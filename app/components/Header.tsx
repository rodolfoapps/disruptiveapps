"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white tracking-tight">
            Disruptive<span className="text-cyan-400">Apps</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/solutions"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Solutions
          </Link>
          <Link
            href="/extensions"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Chrome Extensions
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/extensions/google-reviews-extractor"
            className="text-sm bg-cyan-500 hover:bg-cyan-400 text-[#0a0a0f] font-semibold px-4 py-2 rounded-lg transition"
          >
            Featured: Reviews Extractor
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 px-6 py-4 space-y-3 bg-[#0a0a0f]">
          <Link
            href="/solutions"
            className="block text-sm text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="/extensions"
            className="block text-sm text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Chrome Extensions
          </Link>
          <Link
            href="/about"
            className="block text-sm text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/extensions/google-reviews-extractor"
            className="block text-sm text-cyan-400 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Featured: Reviews Extractor
          </Link>
        </nav>
      )}
    </header>
  );
}
