export type DevotionalItem = {
  title: string;
  link: string;
  date: string;
};

const FEED_URL =
  "https://rccglive.com/open-heaven/feed/";


/* =====================================================
   CLEAN RSS TEXT
===================================================== */

function cleanText(value: string) {
  return value

    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")

    /* HTML entities */
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#0*38;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')

    /* Generic numeric entities */
    .replace(
      /&#0*(\d+);/g,
      (_, number) =>
        String.fromCharCode(Number(number))
    )

    .trim();
}


/* =====================================================
   GET XML TAG
===================================================== */

function getTag(
  item: string,
  tag: string
) {

  const regex = new RegExp(
    `<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`,
    "i"
  );

  const match = item.match(regex);

  return match
    ? cleanText(match[1])
    : "";
}


/* =====================================================
   GET DEVOTIONAL DATE FROM TITLE
===================================================== */

function getDateFromTitle(
  title: string
) {

  /*
    Example:

    Open Heaven 4 September 2026
    Today Devotional & Commentary
  */

  const match = title.match(
    /(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/i
  );

  if (!match) {
    return "";
  }

  const day = match[1];
  const month = match[2];
  const year = match[3];

  return `${day} ${month} ${year}`;
}


/* =====================================================
   OPEN HEAVENS
===================================================== */

export async function getOpenHeavens(
  limit = 3
): Promise<DevotionalItem[]> {

  try {

    const response = await fetch(
      FEED_URL,
      {
        next: {
          /*
            Refresh approximately every
            6 hours
          */
          revalidate: 21600,
        },

        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );


    if (!response.ok) {
      return [];
    }


    const xml =
      await response.text();


    const items =
      xml.match(
        /<item>[\s\S]*?<\/item>/gi
      ) || [];


    return items
      .slice(0, limit)
      .map((item) => {

        const rawTitle =
          getTag(item, "title");

        const link =
          getTag(item, "link");

        const pubDate =
          getTag(item, "pubDate");


        /* =========================================
           CLEAN TITLE
        ========================================= */

        const title =
          cleanText(rawTitle);


        /* =========================================
           USE DATE FROM DEVOTIONAL TITLE FIRST
        ========================================= */

        let formattedDate =
          getDateFromTitle(title);


        /* =========================================
           FALL BACK TO RSS PUBLICATION DATE
        ========================================= */

        if (
          !formattedDate &&
          pubDate
        ) {

          const date =
            new Date(pubDate);


          if (
            !Number.isNaN(
              date.getTime()
            )
          ) {

            formattedDate =
              date.toLocaleDateString(
                "en-GB",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                }
              );

          }

        }


        return {
          title,
          link,
          date: formattedDate,
        };

      });


  } catch (error) {

    console.error(
      "Unable to load Open Heavens:",
      error
    );

    return [];

  }

}
