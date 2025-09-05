// app/components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

const projects = [
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce application with cart and checkout features.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Todo App",
    description: "A simple and interactive todo list application.",
    tech: ["React", "TypeScript"],
    link: "#",
  },
];

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-[var(--primary)] mb-6"
      >
        My Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            className="border rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-[var(--text)] mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-2 py-1 border rounded bg-gray-100 dark:bg-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
