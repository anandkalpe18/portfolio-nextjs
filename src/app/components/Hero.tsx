// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero(): JSX.Element {
  return (
    <section className="text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-[var(--primary)]"
      >
        Hi, I&apos;m Anand Kalpe
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-xl text-[var(--text)]"
      >
        Frontend Engineer | Building Modern Web Experiences
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex justify-center gap-6"
      >
        <Link
          href="#projects"
          className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--accent)] transition"
        >
          View Projects
        </Link>
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
