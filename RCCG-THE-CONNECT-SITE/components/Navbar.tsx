"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="container nav-content">

        {/* LOGO */}
        <div className="logo-wrap">

          <img
            src="/logo.png"
            alt="logo"
            className="logo-img"
          />

          <h2 className="logo">
            RCCG The Connect Church
          </h2>

        </div>

        {/* DESKTOP NAV */}
        <div className="nav-links">

          <Link href="/">
            Home
          </Link>

          <div className="dropdown">

            <button className="dropdown-btn">
              About
            </button>

            <div className="dropdown-content">

              <Link href="/about#vision">
                Our Vision
              </Link>

              <Link href="/about#leadership">
                Leadership
              </Link>

              <Link href="/about#mission">
                Mission
              </Link>

            </div>

          </div>

          <div className="dropdown">

            <button className="dropdown-btn">
              Sermons
            </button>

            <div className="dropdown-content">

              <Link href="/sermons">
                Latest Sermons
              </Link>

            </div>

          </div>

          <div className="dropdown">

            <button className="dropdown-btn">
              Blog
            </button>

            <div className="dropdown-content">

              <Link href="/blog">
                Church Chronicles
              </Link>

              <Link href="/blog">
                Devotionals
              </Link>

              <Link href="/blog">
                Testimonies
              </Link>

            </div>

          </div>

          <Link href="/#ministries">
            Ministries
          </Link>

          <Link href="/events">
            Events
          </Link>

          <Link href="/#footer">
            Contact
          </Link>

        </div>

        {/* RIGHT */}
        <div className="nav-right">

          <button className="give-btn">
            Give Online
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>

        <Link href="/">
          Home
        </Link>

        <Link href="/about">
          About
        </Link>

        <Link href="/sermons">
          Sermons
        </Link>

        <Link href="/#ministries">
          Ministries
        </Link>

        <Link href="/events">
          Events
        </Link>

        <Link href="/blog">
          Blog
        </Link>

        <Link href="/#footer">
          Contact
        </Link>

      </div>

    </nav>
  );
}
