export type DevotionalItem = {
  title: string;
  link: string;
  date: string;
};

const FEED_URL = "https://rccglive.com/open-heaven/feed/";

function cleanText(value: string) {
  return value
    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .trim();
}

function getTag(item: string, tag: string) {
  const regex = new RegExp(
    `<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`,
    "i"
  );

  const match = item.match(regex);

  return match ? cleanText(match[1]) : "";
}

export async function getOpenHeavens(
  limit = 3
): Promise<DevotionalItem[]> {

  try {

    const response = await fetch(FEED_URL, {
      next: {
        revalidate: 21600,
      },
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();

    const items =
      xml.match(/<item>[\s\S]*?<\/item>/gi) || [];

    return items
      .slice(0, limit)
      .map((item) => {

        const title = getTag(item, "title");
        const link = getTag(item, "link");
        const pubDate = getTag(item, "pubDate");

        let formattedDate = pubDate;

        if (pubDate) {

          const date = new Date(pubDate);

          if (!Number.isNaN(date.getTime())) {

            formattedDate =
              date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              });

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
