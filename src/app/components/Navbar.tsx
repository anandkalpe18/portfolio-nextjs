// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { JSX, useState } from "react";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/80 dark:bg-black/60 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div
            style={{ backgroundColor: "var(--primary)" }}
            className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold"
          >
            AK
          </div>
          <span className="hidden sm:inline-block font-semibold">Anand Kalpe</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-[var(--primary)]">About</a>
          <a href="#projects" className="hover:text-[var(--primary)]">Projects</a>
          <a href="#contact" className="hover:text-[var(--primary)]">Contact</a>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            className="p-2"
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-white/95 dark:bg-black/90">
          <a href="#about" className="py-2">About</a>
          <a href="#projects" className="py-2">Projects</a>
          <a href="#contact" className="py-2">Contact</a>
        </div>
      )}
    </header>
  );
}
