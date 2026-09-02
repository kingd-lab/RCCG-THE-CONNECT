"use client";

import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">

      {/* HERO SECTION */}
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

            <Link href="/" className="btn-primary">
              Back Home
            </Link>

            <button className="btn-secondary">
              Explore Articles
            </button>

          </div>

        </div>

      </section>


      {/* CHRONICLES SECTION */}
      <section className="section">

        <div className="container">

          <div className="section-title">

            <h2>
              Latest Articles
            </h2>

            <p>
              Fresh teachings and inspiration from RCCG The Connect Church.
            </p>

          </div>


          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "30px",
            }}
          >

            {/* CARD 1 */}
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
                alt="Sacrifices aren't always convenient"
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
                  }}
                >
                  sacrifices arent always convenient
                </h3>

                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  You're not there yet, And that's okay.
                  Growth is a journey, not a sudden arrival.
                  becoming who God.....
                </p>

                <Link
                  href="/blog/sacrifices-arent-always-convenient"
                  className="btn-primary read-more-btn"
                >
                  Read More
                </Link>

              </div>

            </div>


            {/* CARD 2 */}
            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1f2937",
                borderRadius: "28px",
                overflow: "hidden",
              }}
            >

              <img
                src="/blog2.jpg"
                alt="The Call to Purity"
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
                  }}
                >
                  The call to purity
                </h3>

                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  Purity…
                  They say it is old-fashioned.
                  They say it is for another generation,
                  for another era,
                  for people who do not understand “real life.”
                </p>

                <Link
                  href="/blog/the-call-to-purity"
                  className="btn-primary read-more-btn"
                >
                  Read More
                </Link>

              </div>

            </div>


            {/* CARD 3 */}
            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1f2937",
                borderRadius: "28px",
                overflow: "hidden",
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
                  }}
                >
                  Miracles & Breakthroughs
                </h3>

                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  Inspiring testimonies revealing God's faithfulness
                  and supernatural transformation.
                </p>

                <button className="btn-primary">
                  Read More
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* WEEKLY DEVOTION SECTION */}
      <section className="section">

        <div className="container">

          <div className="section-title">

            <h2>
              Weekly Devotion
            </h2>

            <p>
              Strengthen faith through powerful teachings,
              encouragement, and weekly spiritual insights.
            </p>

          </div>


          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "30px",
            }}
          >

            {/* CARD 1 */}
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
                src="/devotion1.jpg"
                alt="Walking Daily With God"
                style={{
                  width: "100%",
                  height: "240px",
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
                  Spiritual Growth
                </span>

                <h3
                  style={{
                    fontSize: "26px",
                    marginTop: "14px",
                    marginBottom: "16px",
                  }}
                >
                  Walking Daily With God
                </h3>

                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  Discover how consistency in prayer,
                  worship, and faith transforms spiritual life.
                </p>

                <button className="btn-primary">
                  Read More
                </button>

              </div>

            </div>


            {/* CARD 2 */}
            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1f2937",
                borderRadius: "28px",
                overflow: "hidden",
              }}
            >

              <img
                src="/devotion2.jpg"
                alt="The Power of Prayer"
                style={{
                  width: "100%",
                  height: "240px",
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
                  Prayer & Faith
                </span>

                <h3
                  style={{
                    fontSize: "26px",
                    marginTop: "14px",
                    marginBottom: "16px",
                  }}
                >
                  The Power of Prayer
                </h3>

                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  Learn how prayer strengthens believers
                  and opens doors for breakthroughs.
                </p>

                <button className="btn-primary">
                  Read More
                </button>

              </div>

            </div>


            {/* CARD 3 */}
            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1f2937",
                borderRadius: "28px",
                overflow: "hidden",
              }}
            >

              <img
                src="/devotion3.jpg"
                alt="Faith That Inspires"
                style={{
                  width: "100%",
                  height: "240px",
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
                    fontSize: "26px",
                    marginTop: "14px",
                    marginBottom: "16px",
                  }}
                >
                  Faith That Inspires
                </h3>

                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  Powerful testimonies showing God's goodness,
                  miracles, and restoration in lives.
                </p>

                <button className="btn-primary">
                  Read More
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================= */}
      {/* DAILY DEVOTIONAL SECTION - NEW */}
      {/* ========================================= */}

      <section className="section">

        <div className="container">

          <div className="section-title">

            <h2>
              Daily Devotional
            </h2>

            <p>
              Start each day with God's Word, reflection,
              prayer, and practical encouragement for your
              walk with Christ.
            </p>

          </div>


          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "30px",
            }}
          >


            {/* ========================================= */}
            {/* DEVOTIONAL 1 */}
            {/* ========================================= */}

            <article
              style={{
                background:
                  "linear-gradient(145deg, #101510, #0b0b0b)",
                border: "1px solid #26352a",
                borderRadius: "28px",
                padding: "30px",
                position: "relative",
                overflow: "hidden",
                transition: "0.4s ease",
              }}
            >

              {/* Decorative Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  background: "rgba(139,255,176,0.08)",
                }}
              />


              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "22px",
                }}
              >

                <span
                  style={{
                    color: "#8bffb0",
                    fontSize: "12px",
                    fontWeight: "800",
                    letterSpacing: "1px",
                  }}
                >
                  FAITH & GROWTH
                </span>

                <span
                  style={{
                    fontSize: "28px",
                  }}
                >
                  🌱
                </span>

              </div>


              {/* Date */}
              <p
                style={{
                  color: "#6ee7a0",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                September 1, 2026
              </p>


              {/* Title */}
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "14px",
                }}
              >
                The Law of Harvest
              </h3>


              {/* Scripture */}
              <div
                style={{
                  display: "inline-block",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  background: "rgba(139,255,176,0.08)",
                  border: "1px solid rgba(139,255,176,0.18)",
                  color: "#8bffb0",
                  fontSize: "12px",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Galatians 6:7
              </div>


              {/* Devotional */}
              <p
                style={{
                  color: "#b5b5b5",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                Every seed carries a harvest within it.
                Our words, decisions, relationships,
                generosity, and obedience are seeds that
                can produce a harvest in God's appointed time.
              </p>


              {/* Reflection */}
              <div
                style={{
                  borderLeft: "3px solid #8bffb0",
                  paddingLeft: "16px",
                  marginBottom: "22px",
                }}
              >

                <strong
                  style={{
                    display: "block",
                    color: "#ffffff",
                    marginBottom: "7px",
                  }}
                >
                  Reflection
                </strong>

                <span
                  style={{
                    color: "#9ca3af",
                    lineHeight: "1.7",
                  }}
                >
                  What kind of seeds are you planting through
                  your actions today?
                </span>

              </div>


              {/* Prayer */}
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                  lineHeight: "1.8",
                }}
              >
                <strong style={{ color: "#ffffff" }}>
                  Prayer:
                </strong>{" "}
                Lord, help me to sow seeds that bring glory
                to Your name. Give me patience to wait for
                the harvest and wisdom to plant well. Amen.
              </p>

            </article>


            {/* ========================================= */}
            {/* DEVOTIONAL 2 */}
            {/* ========================================= */}

            <article
              style={{
                background:
                  "linear-gradient(145deg, #101510, #0b0b0b)",
                border: "1px solid #26352a",
                borderRadius: "28px",
                padding: "30px",
                position: "relative",
                overflow: "hidden",
                transition: "0.4s ease",
              }}
            >

              {/* Decorative Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  background: "rgba(139,255,176,0.08)",
                }}
              />


              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "22px",
                }}
              >

                <span
                  style={{
                    color: "#8bffb0",
                    fontSize: "12px",
                    fontWeight: "800",
                    letterSpacing: "1px",
                  }}
                >
                  GIVING & FAITH
                </span>

                <span
                  style={{
                    fontSize: "28px",
                  }}
                >
                  💚
                </span>

              </div>


              {/* Date */}
              <p
                style={{
                  color: "#6ee7a0",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                September 2, 2026
              </p>


              {/* Title */}
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "14px",
                }}
              >
                Trading With God
              </h3>


              {/* Scripture */}
              <div
                style={{
                  display: "inline-block",
                  padding: "7px 12px",
                  borderRa
