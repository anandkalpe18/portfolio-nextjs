// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="text-center py-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-[var(--primary)]"
      >
        Hi, I&apos;m Anand Kalpe
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-xl text-[var(--text)] max-w-2xl mx-auto"
      >
        .NET Developer | ASP.NET Core | Azure | Microservices
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex justify-center gap-6 flex-wrap"
      >
        {/* Projects Button */}
        <Link
          href="#projects"
          className="px-6 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition"
        >
          View Projects
        </Link>

        {/* Resume Download */}
        <a
          href="https://drive.google.com/file/d/1btNKMq0z9Zr4c6HBzQhnS60UGelMAgAQ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition"
        >
          Download Resume
        </a>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="px-6 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
