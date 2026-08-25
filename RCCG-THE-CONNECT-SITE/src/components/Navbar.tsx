
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">
          Church
        </h1>

        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/sermons">Sermons</Link>
          <Link href="/events">Events</Link>
          <Link href="/give">Give</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
