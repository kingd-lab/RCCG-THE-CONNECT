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
                alt=""
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
                  You're not there yet, And that's okay. Growth is a journey, not a sudden arrival. becoming who God.....
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
                alt=""
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
                  Community
                </span>

                <h3
                  style={{
                    fontSize: "28px",
                    marginTop: "14px",
                    marginBottom: "16px",
                  }}
                >
                  Growing Together in Christ
                </h3>

                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  Discover how fellowship strengthens faith,
                  unity and spiritual accountability.
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
                src="/blog3.jpg"
                alt=""
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
                alt=""
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
                alt=""
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
                alt=""
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

    </main>
  );
}