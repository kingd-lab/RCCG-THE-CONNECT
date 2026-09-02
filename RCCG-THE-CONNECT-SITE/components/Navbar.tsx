"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Headphones,
  BookOpen,
  Users,
  CalendarDays,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sermonMenu, setSermonMenu] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setSermonMenu(false);
  };

  return (
    <header className="site-navbar">
      <div className="navbar-container">
        <Link href="/" onClick={closeMobileMenu} className="church-logo">
          <div className="church-logo-mark">C</div>

          <div className="church-logo-text">
            <span>THE CONNECT</span>
            <small>CHURCH</small>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-dropdown-button"
              aria-label="Open Sermons menu"
            >
              Sermons
              <ChevronDown size={16} />
            </button>

            <div className="nav-dropdown-menu">
              <Link href="/sermons">Latest Sermons</Link>
              <Link href="/sermons">Watch Online</Link>
              <Link href="/sermons">Podcast</Link>
            </div>
          </div>

          <Link href="/blog" className="nav-link">
            Blog
          </Link>

          <Link href="/ministries" className="nav-link">
            Ministries
          </Link>

          <Link href="/events" className="nav-link">
            Events
          </Link>

          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileMenu && (
        <div className="mobile-nav">
          <Link href="/" onClick={closeMobileMenu}>
            <Home size={18} />
            <span>Home</span>
          </Link>

          <Link href="/about" onClick={closeMobileMenu}>
            <Info size={18} />
            <span>About</span>
          </Link>

          <div className="mobile-sermons">
            <button
              type="button"
              className="mobile-sermons-button"
              onClick={() => setSermonMenu(!sermonMenu)}
              aria-expanded={sermonMenu}
            >
              <span>
                <Headphones size={18} />
                <span>Sermons</span>
              </span>

              <ChevronDown
                size={18}
                className={sermonMenu ? "rotate-arrow" : ""}
              />
            </button>

            {sermonMenu && (
              <div className="mobile-sermons-submenu">
                <Link href="/sermons" onClick={closeMobileMenu}>
                  Latest Sermons
                </Link>

                <Link href="/sermons" onClick={closeMobileMenu}>
                  Watch Online
                </Link>

                <Link href="/sermons" onClick={closeMobileMenu}>
                  Podcast
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" onClick={closeMobileMenu}>
            <BookOpen size={18} />
            <span>Blog</span>
          </Link>

          <Link href="/ministries" onClick={closeMobileMenu}>
            <Users size={18} />
            <span>Ministries</span>
          </Link>

          <Link href="/events" onClick={closeMobileMenu}>
            <CalendarDays size={18} />
            <span>Events</span>
          </Link>

          <Link href="/contact" onClick={closeMobileMenu}>
            <Mail size={18} />
            <span>Contact</span>
          </Link>
        </div>
      )}
    </header>
  );
}


3. app/about/page.tsx
---------------------
export default function AboutPage() {
  return (
    <main className="simple-page">
      <section className="simple-page-hero">
        <span className="eyebrow">ABOUT US</span>

        <h1>About The Connect Church</h1>

        <p>
          Welcome to RCCG The Connect Church.
          We are a community committed to connecting
          people with God, His Word and one another.
        </p>
      </section>
    </main>
  );
}
