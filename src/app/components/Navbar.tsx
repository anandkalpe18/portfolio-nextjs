"use client";

import Link from "next/link";
import { useState, useEffect, JSX } from "react";
import { motion } from "framer-motion";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    document.body.classList.toggle("dark", saved);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
    localStorage.setItem("darkMode", String(!darkMode));
  };

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
          <span className="hidden sm:inline-block font-semibold text-[var(--text)] dark:text-[var(--text)]">
            Anand Kalpe
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-[var(--primary)]">
            About
          </a>
          <a href="#projects" className="hover:text-[var(--primary)]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[var(--primary)]">
            Contact
          </a>

          {/* Polished dark mode toggle */}
          <div
            className="ml-4 flex items-center cursor-pointer select-none"
            onClick={toggleDarkMode}
          >
            <div className="w-20 h-10 flex items-center bg-gray-800 dark:bg-gray-200 rounded-full p-1 relative shadow-inner transition-colors duration-300">
              {/* Sun icon */}
              <span className="absolute left-2 text-yellow-400 text-xl">
                ☀️
              </span>
              {/* Moon icon */}
              <span className="absolute right-2 text-blue-400 text-xl">🌙</span>

              {/* Sliding circle */}
              <div
                className={`bg-white w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-10" : "translate-x-0"
                }`}
              />
            </div>
          </div>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-2">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Dark mode toggle mobile */}
          <div
            className="flex items-center cursor-pointer select-none"
            onClick={toggleDarkMode}
          >
            <div className="w-14 h-7 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 relative transition-colors duration-300 shadow-inner">
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-white/95 dark:bg-black/90"
        >
          <a href="#about" className="py-2">
            About
          </a>
          <a href="#projects" className="py-2">
            Projects
          </a>
          <a href="#contact" className="py-2">
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
}
