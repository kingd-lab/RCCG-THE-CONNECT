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

              <a href="#">
                Our Vision
              </a>

              <a href="#">
                Leadership
              </a>

              <a href="#">
                Mission
              </a>

            </div>

          </div>

          <div className="dropdown">

            <button className="dropdown-btn">
              Sermons
            </button>

            <div className="dropdown-content">

              <a href="/sermons">
                Latest Sermons
              </a>

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

              <a href="/blog">
                Devotionals
              </a>

              <a href="/blog">
                Testimonies
              </a>

            </div>

          </div>

          <a href="#ministries">
            Ministries
          </a>

          <a href="#events">
            Events
          </a>

          <a href="#footer">
            Contact
          </a>

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

        <a href="#sermons">
          Sermons
        </a>

        <a href="#ministries">
          Ministries
        </a>

        <a href="#events">
          Events
        </a>

        <Link href="/blog">
          Blog
        </Link>

        <a href="#footer">
          Contact
        </a>

      </div>

    </nav>
  );
}
