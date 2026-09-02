"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-xl border-b border-gray-800 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-yellow-400">
          Church
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-yellow-400 transition">
            Home
          </a>

          {/* ABOUT */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-400 transition">
              About <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:flex flex-col z-50 bg-[#111] border border-gray-800 rounded-xl p-4 gap-3 w-52 shadow-2xl">
              <a href="#" className="hover:text-yellow-400 transition">Who We Are</a>
              <a href="#" className="hover:text-yellow-400 transition">Leadership</a>
              <a href="#" className="hover:text-yellow-400 transition">Vision</a>
            </div>
          </div>

          {/* SERMONS */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-400 transition">
              Sermons <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:flex flex-col z-50 bg-[#111] border border-gray-800 rounded-xl p-4 gap-3 w-52 shadow-2xl">
              <a href="#" className="hover:text-yellow-400 transition">Latest Sermons</a>
              <a href="#" className="hover:text-yellow-400 transition">Sermon Series</a>
              <a href="#" className="hover:text-yellow-400 transition">Livestream</a>
            </div>
          </div>

          {/* BLOG */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-400 transition">
              Blog <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:flex flex-col z-50 bg-[#111] border border-gray-800 rounded-xl p-4 gap-3 w-52 shadow-2xl">
              <a href="#" className="hover:text-yellow-400 transition">Articles</a>
              <a href="#" className="hover:text-yellow-400 transition">Devotionals</a>
              <a href="#" className="hover:text-yellow-400 transition">Church News</a>
            </div>
          </div>

          <a href="#ministries" className="hover:text-yellow-400 transition">Ministries</a>
          <a href="#events" className="hover:text-yellow-400 transition">Events</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>

          <button className="bg-yellow-400 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition">
            Give Online
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-white hover:text-yellow-400 transition"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden bg-black border-t border-gray-800 px-6 py-6 flex flex-col gap-5 animate-fadeIn">
          <a href="#" onClick={() => setMobileMenu(false)} className="hover:text-yellow-400 transition">Home</a>
          <a href="#" onClick={() => setMobileMenu(false)} className="hover:text-yellow-400 transition">About</a>
          <a href="#" onClick={() => setMobileMenu(false)} className="hover:text-yellow-400 transition">Sermons</a>
          <a href="#sermons" onClick={() => setMobileMenu(false)} className="hover:text-yellow-400 transition">Blog</a>
          <a href="#ministries" onClick={() => setMobileMenu(false)} className="hover:text-yellow-400 transition">Ministries</a>
          <a href="#events" onClick={() => setMobileMenu(false)} className="hover:text-yellow-400 transition">Events</a>
          <a href="#contact" onClick={() => setMobileMenu(false)} className="hover:text-yellow-400 transition">Contact</a>

          <button className="bg-yellow-400 text-black py-4 rounded-full font-semibold w-full">
            Give Online
          </button>
        </div>
      )}
    </nav>
  );
}
