// app/components/About.tsx
"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
];

export default function About(): JSX.Element {
  return (
    <section id="about" className="py-20 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-[var(--primary)] mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-[var(--text)] mb-10"
      >
        I&apos;m a passionate frontend engineer specializing in building responsive and interactive web applications. I love turning ideas into pixel-perfect, user-friendly interfaces.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center"
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 border rounded-lg hover:bg-[var(--primary)] hover:text-white transition cursor-default"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
