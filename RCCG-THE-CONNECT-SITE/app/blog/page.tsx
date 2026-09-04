import Link from "next/link";
import { getOpenHeavens } from "@/lib/getOpenHeavens";

export default async function BlogPage() {

  const devotionals = await getOpenHeavens(3);

  return (
    <main className="bg-[#050505] text-white overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            RCCG The Connect Church
          </div>

          <h1>
            Connect<span>Community</span>
          </h1>

          <p>
            Discover spiritual insights, devotionals,
            testimonies, church updates and life-changing
            teachings for spiritual growth.
          </p>

          <div className="hero-buttons">

            <Link
              href="/"
              className="btn-primary"
            >
              Back Home
            </Link>

            <a
              href="#latest-articles"
              className="btn-secondary"
            >
              Explore Articles
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          LATEST ARTICLES
      ===================================================== */}

      <section
        className="section"
        id="latest-articles"
      >

        <div className="container">

          <div className="section-title">

            <h2>
              Latest Articles
            </h2>

            <p>
              Fresh teachings and inspiration from
              RCCG The Connect Church.
            </p>

          </div>


          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
              gap: "30px",
            }}
          >

{/* =================================================
    ARTICLE 1
================================================= */}

<div
  style={{
    background: "#0d0d0d",
    border: "1px solid #1f2937",
    borderRadius: "28px",
    overflow: "hidden",
    transition: "0.4s ease",
  }}
>

  <img
    src="/blog1.jpg"
    alt="I'll Never Be Small"
    style={{
      width: "100%",
      height: "260px",
      objectFit: "cover",
    }}
  />

  <div style={{ padding: "30px" }}>

    <span
      style={{
        color: "#8bffb0",
        fontSize: "13px",
        fontWeight: "700",
      }}
    >
      Notes By Sis Joy
    </span>

    <h3
      style={{
        fontSize: "28px",
        marginTop: "14px",
        marginBottom: "16px",
        lineHeight: "1.25",
      }}
    >
      I&apos;ll Never Be Small
    </h3>

    <p
      style={{
        color: "#9ca3af",
        lineHeight: "1.8",
        marginBottom: "24px",
      }}
    >
      I may be in a small place, but I serve a great God.
      Little in the hands of God is never insignificant.
      I will remain faithful in the little, grow through
      the process, and trust God with the increase.
    </p>

    <Link
      href="/blog/ill-never-be-small"
      className="btn-primary read-more-btn"
    >
      Read More
    </Link>

  </div>

</div>

            {/* =================================================
                ARTICLE 2
            ================================================= */}

            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1f2937",
                borderRadius: "28px",
                overflow: "hidden",
                transition: "0.4s ease",
              }}
            >

              <img
                src="/blog2.jpg"
                alt="The Call To Purity"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />


              <div style={{ padding: "30px" }}>

                <span
                  style={{
                    color: "#8bffb0",
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  Prophetic Spoken Word
                </span>


                <h3
                  style={{
                    fontSize: "28px",
                    marginTop: "14px",
                    marginBottom: "16px",
                    lineHeight: "1.25",
                  }}
                >
                  The Call To Purity
                </h3>


                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  Purity is not old-fashioned.
                  It is prophetic. A call to holiness,
                  discipline and standing apart in a
                  compromising world.
                </p>


                <Link
                  href="/blog/the-call-to-purity"
                  className="btn-primary read-more-btn"
                >
                  Read More
                </Link>

              </div>

            </div>


            {/* =================================================
                ARTICLE 3
            ================================================= */}

            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1f2937",
                borderRadius: "28px",
                overflow: "hidden",
                transition: "0.4s ease",
              }}
            >

              <img
                src="/blog3.jpg"
                alt="Miracles and Breakthroughs"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />


              <div style={{ padding: "30px" }}>

                <span
                  style={{
                    color: "#8bffb0",
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  Testimonies
                </span>


                <h3
                  style={{
                    fontSize: "28px",
                    marginTop: "14px",
                    marginBottom: "16px",
                    lineHeight: "1.25",
                  }}
                >
                  Miracles &amp; Breakthroughs
                </h3>


                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  Inspiring testimonies revealing
                  God&apos;s faithfulness and supernatural
                  transformation in the lives of His people.
                </p>


                <button
                  className="btn-primary"
                >
                  Read More
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RCCG OPEN HEAVENS
      ===================================================== */}

      <section className="section">

        <div className="container">

          <div className="section-title">

            <span
              style={{
                display: "block",
                color: "#8bffb0",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "10px",
                letterSpacing: "1px",
              }}
            >
              RCCG OPEN HEAVENS
            </span>


            <h2>
              Daily Devotion
            </h2>


            <p>
              Stay spiritually refreshed with the latest
              Open Heavens daily devotionals.
            </p>

          </div>


          {/* =================================================
              DEVOTIONALS AVAILABLE
          ================================================= */}

          {devotionals.length > 0 ? (

            <div
              style={{
                display: "grid",

                gridTemplateColumns:
                  "repeat(auto-fit,minmax(280px,1fr))",

                gap: "30px",
              }}
            >

              {devotionals.map((devotional, index) => (

                <div
                  key={devotional.link}
                  style={{
                    background: "#0d0d0d",

                    border:
                      "1px solid #1f2937",

                    borderRadius: "28px",

                    overflow: "hidden",

                    transition: "0.4s ease",
                  }}
                >


                  {/* DEVOTIONAL IMAGE */}

                  <img
                    src={
                      index === 0
                        ? "/devotion1.jpg"
                        : index === 1
                        ? "/devotion2.jpg"
                        : "/devotion3.jpg"
                    }
                    alt="RCCG Open Heavens Daily Devotional"
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />


                  {/* DEVOTIONAL CONTENT */}

                  <div
                    style={{
                      padding: "30px",
                    }}
                  >

                    <span
                      style={{
                        color: "#8bffb0",

                        fontSize: "13px",

                        fontWeight: "700",
                      }}
                    >
                      {index === 0
                        ? "TODAY'S DEVOTIONAL"
                        : "OPEN HEAVENS"}
                    </span>


                    <h3
                      style={{
                        color: "white",

                        fontSize: "25px",

                        lineHeight: "1.3",

                        marginTop: "14px",

                        marginBottom: "14px",
                      }}
                    >
                      {devotional.title}
                    </h3>


                    <p
                      style={{
                        color: "#8bffb0",

                        fontSize: "13px",

                        marginBottom: "18px",
                      }}
                    >
                      {devotional.date}
                    </p>


                    <p
                      style={{
                        color: "#9ca3af",

                        lineHeight: "1.8",

                        marginBottom: "24px",
                      }}
                    >
                      Strengthen your walk with God through
                      today&apos;s Open Heavens devotional,
                      biblical teaching and spiritual
                      encouragement.
                    </p>


                    <a
                      href={devotional.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Read Devotional
                    </a>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* =================================================
                FALLBACK IF FEED DOES NOT LOAD
            ================================================= */

            <div
              style={{
                maxWidth: "650px",

                margin: "0 auto",

                padding: "40px",

                textAlign: "center",

                background: "#0d0d0d",

                border:
                  "1px solid #1f2937",

                borderRadius: "28px",
              }}
            >

              <h3
                style={{
                  color: "white",

                  fontSize: "28px",

                  marginBottom: "16px",
                }}
              >
                Open Heavens Daily Devotional
              </h3>


              <p
                style={{
                  color: "#9ca3af",

                  lineHeight: "1.8",

                  marginBottom: "25px",
                }}
              >
                The latest Open Heavens devotional
                is temporarily unavailable.
                Please check again shortly.
              </p>


              <a
                href="https://rccglive.com/open-heaven/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Open Heavens
              </a>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}
