"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
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

        <nav className="desktop-nav">
          <Link href="/" className="nav-link">Home</Link>

          <div className="nav-dropdown">
            <button className="nav-dropdown-button">
              Sermons
              <ChevronDown size={16} />
            </button>

            <div className="nav-dropdown-menu">
              <Link href="/sermons">Latest Sermons</Link>
              <Link href="/sermons">Watch Online</Link>
              <Link href="/sermons">Podcast</Link>
            </div>
          </div>

          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/ministries" className="nav-link">Ministries</Link>
          <Link href="/events" className="nav-link">Events</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation"
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileMenu && (
        <div className="mobile-nav">

          <Link href="/" onClick={closeMobileMenu}>
            <Home size={18} />
            Home
          </Link>

          <div className="mobile-sermons">
            <button
              className="mobile-sermons-button"
              onClick={() => setSermonMenu(!sermonMenu)}
            >
              <span>
                <Headphones size={18} />
                Sermons
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
            Blog
          </Link>

          <Link href="/ministries" onClick={closeMobileMenu}>
            <Users size={18} />
            Ministries
          </Link>

          <Link href="/events" onClick={closeMobileMenu}>
            <CalendarDays size={18} />
            Events
          </Link>

          <Link href="/contact" onClick={closeMobileMenu}>
            <Mail size={18} />
            Contact
          </Link>

        </div>
      )}
    </header>
  );
}

