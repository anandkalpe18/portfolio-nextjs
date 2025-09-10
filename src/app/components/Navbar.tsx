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
    <header className="bg-white/80 dark:bg-black/60 backdrop-blur sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            style={{ backgroundColor: "var(--primary)" }}
            className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold shadow-md transition-transform group-hover:scale-105"
          >
            AK
          </div>
          <span className="hidden sm:inline-block font-semibold text-lg text-[var(--text)] dark:text-gray-200 transition-colors">
            Anand Kalpe
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center font-medium">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[var(--text)] dark:text-gray-200 hover:text-[var(--primary)] transition-colors"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Polished dark mode toggle */}
          <div
            className="ml-6 flex items-center cursor-pointer select-none"
            onClick={toggleDarkMode}
          >
            <div className="w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 relative shadow-inner transition-colors duration-300">
              {/* Icons */}
              <span className="absolute left-2 text-yellow-400 text-sm">☀️</span>
              <span className="absolute right-2 text-blue-400 text-sm">🌙</span>

              {/* Sliding circle */}
              <motion.div
                animate={{ x: darkMode ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white w-6 h-6 rounded-full shadow-md"
              />
            </div>
          </div>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            className="p-2"
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--text)] dark:text-gray-200"
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
            <div className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 relative transition-colors duration-300 shadow-inner">
              <motion.div
                animate={{ x: darkMode ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white w-4 h-4 rounded-full shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white/95 dark:bg-black/90 border-t border-gray-200 dark:border-gray-700"
        >
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-2 text-[var(--text)] dark:text-gray-200 hover:text-[var(--primary)] transition-colors"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
