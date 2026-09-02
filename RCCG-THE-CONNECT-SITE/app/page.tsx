"use client";

import { useState } from "react";

export default function HomePage() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="container nav-content">

          {/* LOGO */}
          <div className="logo-wrap">

            <img
              src="/logo.png"
              alt="The Connect Church"
              className="logo-img"
            />

            <h1 className="logo">
              The Connect Church
            </h1>

          </div>

          {/* DESKTOP MENU */}
          <div className="nav-links">

            <a href="#">Home</a>

            {/* ABOUT */}
            <div className="dropdown">

              <button className="dropdown-btn">
                About
              </button>

              <div className="dropdown-content">

                <a href="#">Our Story</a>
                <a href="#">Leadership</a>
                <a href="#">Vision</a>

              </div>

            </div>

            {/* SERMONS */}
            <div className="dropdown">

              <button className="dropdown-btn">
                Sermons
              </button>

              <div className="dropdown-content">

                <a href="#">Latest Sermons</a>
                <a href="#">Podcast</a>
                <a href="#">Livestream</a>

              </div>

            </div>

            <a href="#ministries">
              Ministries
            </a>

            <a href="/blog">
              Blog
            </a>

            <a href="#events">
              Events
            </a>

            <a href="#">
              Contact
            </a>

          </div>

          {/* RIGHT */}
          <div className="nav-right">

            <button className="give-btn">
              Give Online
            </button>

            {/* MOBILE BUTTON */}
            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >

              {menuOpen ? "✕" : "☰"}

            </button>

          </div>

        </div>

        {/* MOBILE MENU */}

        <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>

          <a href="#">Home</a>

          <details>

            <summary>About</summary>

            <div className="mobile-dropdown">

              <a href="#">Our Story</a>
              <a href="#">Leadership</a>
              <a href="#">Vision</a>

            </div>

          </details>

          <details>

            <summary>Sermons</summary>

            <div className="mobile-dropdown">

              <a href="#">Latest Sermons</a>
              <a href="#">Podcast</a>
              <a href="#">Livestream</a>

            </div>

          </details>

          <a href="#ministries">
            Ministries
          </a>

          <a href="/blog">
            Blog
          </a>

          <a href="#events">
            Events
          </a>

          <a href="#">
            Contact
          </a>

        </div>

      </nav>

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="hero-badge">
            RCCG • Worship • Community
          </span>

          <h1>
            Experience The Presence
            <span> Of God</span>
          </h1>

          <p>
            A modern worship experience built around faith,
            transformation, community and spiritual growth.
          </p>

          <div className="hero-buttons">

            <a href="#" className="btn-primary">
              Watch Live
            </a>

            <a href="#" className="btn-secondary">
              Join Sunday Service
            </a>

          </div>

        </div>

      </section>

      {/* =========================
          MINISTRIES
      ========================= */}

      <section
        id="ministries"
        className="section"
      >

        <div className="container">

          <div className="section-title">

            <h2>
              Our Ministries
            </h2>

            <p>
              Empowering lives through worship,
              leadership and spiritual growth.
            </p>

          </div>

          <div className="ministry-grid">

            <div className="ministry-card">

              <h3>
                Youth Ministry
              </h3>

              <p>
                Raising kingdom-minded young people through
                worship, mentorship and discipleship.
              </p>

            </div>

            <div className="ministry-card">

              <h3>
                Prayer Ministry
              </h3>

              <p>
                Standing in prayer and intercession
                for transformation and breakthrough.
              </p>

            </div>

            <div className="ministry-card">

              <h3>
                Worship Team
              </h3>

              <p>
                Creating powerful worship encounters
                that lead people into God’s presence.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          EVENTS
      ========================= */}

      <section
        id="events"
        className="section"
      >

        <div className="container">

          <div className="section-title">

            <h2>
              Upcoming Events
            </h2>

            <p>
              Stay connected with conferences,
              worship nights and church gatherings.
            </p>

          </div>

          <div className="events-grid">

            <div className="event-card">

              <img
                src="/event1.jpg"
                alt="Event"
                className="event-image"
              />

              <div className="event-content">

                <h3>
                  Night of Worship
                </h3>

                <p>
                  Friday • 9PM • A powerful atmosphere
                  of worship and prayer encounter.
                </p>

              </div>

            </div>

            <div className="event-card">

              <img
                src="/event2.jpg"
                alt="Event"
                className="event-image"
              />

              <div className="event-content">

                <h3>
                  Leadership Conference
                </h3>

                <p>
                  Equipping believers for kingdom impact,
                  influence and spiritual leadership.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          GALLERY
      ========================= */}

      <section className="section">

        <div className="container">

          <div className="section-title">

            <h2>
              Moments In Worship
            </h2>

            <p>
              Experience the atmosphere, worship
              and community life at The Connect Church.
            </p>

          </div>

          <div className="gallery-grid">

            <div className="gallery-item">
              <img src="/church1.jpg" alt="Church" />
            </div>

            <div className="gallery-item">
              <img src="/church2.jpg" alt="Church" />
            </div>

            <div className="gallery-item">
              <img src="/church3.jpg" alt="Church" />
            </div>

            <div className="gallery-item">
              <img src="/church4.jpg" alt="Church" />
            </div>

          </div>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="container">

          <div className="footer-grid">

            <div>

              <h3>
                The Connect Church
              </h3>

              <p>
                Building a Christ-centered digital worship experience.
              </p>

            </div>

            <div>

              <h3>
                Quick Links
              </h3>

              <ul>

                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Sermons</li>

              </ul>

            </div>

            <div>

              <h3>
                Service Times
              </h3>

              <ul>

                <li>Sunday • 8AM</li>
                <li>Wednesday • 6PM</li>
                <li>Friday Prayer • 9PM</li>

              </ul>

            </div>

            <div>

              <h3>
                Connect
              </h3>

              <ul>

                <li>Instagram</li>
                <li>YouTube</li>
                <li>Facebook</li>

              </ul>

            </div>

          </div>

          <div className="footer-bottom">
            © 2026 The Connect Church. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}
