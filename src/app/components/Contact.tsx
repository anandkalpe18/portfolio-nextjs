"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/anandkalpe18" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/anandkalpe/" },
  { name: "Email", url: "mailto:anandkalpe18@gmail.com" },
];

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-[var(--primary)] mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
      >
        <input
          type="text"
          placeholder="Name"
          className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--muted)]"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--muted)]"
          required
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--muted)]"
          required
        />

        <button
          type="submit"
          className="bg-[var(--primary)] text-white px-6 py-2 rounded hover:bg-[var(--accent)] transition"
        >
          Send Message
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 flex justify-center gap-6"
      >
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:text-[var(--accent)]"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
