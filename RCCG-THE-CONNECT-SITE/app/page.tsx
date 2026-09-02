"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {

return (
    <main>

    
      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            Welcome To RCCG The Connect Church
          </div>

          <h1>
            Encounter God <br />
            Experience <span>Transformation</span>
          </h1>

          <p>
            A place of worship, spiritual growth,
            community impact and life-changing encounters
            with God's presence.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Join Us Sunday
            </button>

            <Link href="/blog" className="btn-secondary">
              Church Community
            </Link>

          </div>

        </div>

      </section>

      {/* ================= MINISTRIES ================= */}

      <section
        className="section"
        id="ministries"
      >

        <div className="container">

          <div className="section-title">

            <h2>
              Our Ministries
            </h2>

            <p>
              Empowering lives through worship,
              discipleship, outreach and prayer.
            </p>

          </div>

          <div className="ministry-grid">

            <div className="ministry-card">

              <img
                src="/ministry1.jpg"
                alt=""
                className="card-image"
              />

              <h3>
                Youth Ministry
              </h3>

              <p>
                Raising spiritually strong and purpose-driven youths.
              </p>

            </div>

            <div className="ministry-card">

              <img
                src="/ministry2.jpg"
                alt=""
                className="card-image"
              />

              <h3>
                Worship Ministry
              </h3>

              <p>
                Creating worship encounters that draw people to God.
              </p>

            </div>

            <div className="ministry-card">

              <img
                src="/ministry3.jpg"
                alt=""
                className="card-image"
              />

              <h3>
                Prayer Ministry
              </h3>

              <p>
                Standing in intercession for families and nations.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WORSHIP MOMENTS ================= */}

      <section className="section">

        <div className="container">

          <div className="section-title">

            <h2>
              Worship Moments
            </h2>

            <p>
              Experience moments of worship and spiritual encounters.
            </p>

          </div>

          <div className="home-gallery-grid">

            <div className="home-gallery-item">
              <img src="/gallery1.jpg" alt="" />
            </div>

            <div className="home-gallery-item">
              <img src="/gallery2.jpg" alt="" />
            </div>

            <div className="home-gallery-item">
              <img src="/gallery3.jpg" alt="" />
            </div>

            <div className="home-gallery-item">
              <img src="/gallery4.jpg" alt="" />
            </div>

          </div>

        </div>

      </section>

      {/* ================= EVENTS ================= */}

      <section
        className="section"
        id="events"
      >

        <div className="container">

          <div className="section-title">

            <h2>
              Upcoming Events
            </h2>

            <p>
              Stay connected with conferences,
              worship nights and church programs.
            </p>

          </div>

          <div className="event-grid">

            {/* EVENT 1 */}
            <div className="event-card">

              <div className="event-image-wrap">

                <img
                  src="/event1.jpg"
                  alt=""
                  className="event-image"
                />

              </div>

              <div className="event-content">

                <span className="event-date">
                  Every Sunday • 8:00 AM
                </span>

                <h3>
                  Sunday Worship Experience
                </h3>

                <p>
                  Join powerful worship, prayer,
                  teachings and fellowship.
                </p>

                <button className="btn-primary event-btn">
                  Learn More
                </button>

              </div>

            </div>

            {/* EVENT 2 */}
            <div className="event-card">

              <div className="event-image-wrap">

                <img
                  src="/event2.jpg"
                  alt=""
                  className="event-image"
                />

              </div>

              <div className="event-content">

                <span className="event-date">
                  Friday • 9:00 PM
                </span>

                <h3>
                  Night of Worship
                </h3>

                <p>
                  A night of worship, revival
                  and supernatural encounters.
                </p>

                <Link
                      href="/events/night-of-worship"
                           className="btn-primary event-btn"
                            >
                                     Learn More
                                           </Link>

              </div>

            </div>

            {/* EVENT 3 */}
            <div className="event-card">

              <div className="event-image-wrap">

                <img
                  src="/event3.jpg"
                  alt=""
                  className="event-image"
                />

              </div>

              <div className="event-content">

                <span className="event-date">
                  May 25 • 10:00 AM
                </span>

                <h3>
                  Leadership Conference
                </h3>

                <p>
                  Equipping leaders with wisdom,
                  strategy and kingdom influence.
                </p>

                <button className="btn-primary event-btn">
                  Learn More
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer
        className="footer"
        id="footer"
      >

        <div className="container footer-grid">

          <div>

            <h3>
              RCCG The Connect Church
            </h3>

            <p>
              Building lives through God's word,
              worship and kingdom impact.
            </p>

          </div>

          <div>

            <h3>
              Quick Links
            </h3>

            <ul>

              <li>Home</li>
              <li>Ministries</li>
              <li>Events</li>
              <li>Blog</li>

            </ul>

          </div>

          <div>

            <h3>
              Service Times
            </h3>

            <ul>

              <li>Sunday — 1PM</li>
              <li>Wednesday — 6PM</li>
              <li>Saturday Prayer — 10AM</li>

            </ul>

          </div>

          <div>

            <h3>
             Contact
            </h3>

            <ul>
    <html lang="en">

              <li>Lagos, Nigeria</li>
              <li>rccgtheconnectchurch@gmail.com</li>
              <li>+234 0816950684</li>
      <head>

            </ul>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

          </div>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <div className="footer-bottom">
          © 2026 RCCG The Connect Church.
        </div>
      </head>

      </footer>
      <body>
        {children}
      </body>

    </main>
    </html>
);
}
