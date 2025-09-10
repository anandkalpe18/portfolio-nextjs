// app/components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

const projects = [
  {
    title: "Airport Operations",
    description:
      "Built and optimized REST APIs in ASP.NET Core 6 with in-memory caching to reduce latency, integrated Azure Cosmos DB for real-time updates, and resolved a memory leak in baggage scanning workflows to improve system stability.",
    tech: [".NET 6", "Azure", "Cosmos DB", "In-Memory Caching"],
  },
  {
    title: "Airline Employee Ticketing System",
    description:
      "Developed backend services to manage employee travel credits and bookings, integrated PeopleSoft and third-party APIs, and used Azure Service Bus for asynchronous data sync. Automated background jobs to ensure accurate profile updates.",
    tech: [".NET 6", "Azure Service Bus", "Azure Functions", "CI/CD"],
  },
  {
    title: "Corporate Canteen Management System",
    description:
      "A personal project showcasing clean architecture with .NET 8, JWT authentication, and role-based access for employees, vendors, and admins. Includes CRUD APIs and modular layers for maintainability.",
    tech: [".NET 8", "Entity Framework", "JWT Auth", "Clean Architecture"],
    link: "https://github.com/anandkalpe/corporate-canteen",
  },
  {
    title: "Recommender System",
    description:
      "Implemented collaborative filtering algorithms to generate personalized recommendations using Python and scikit-learn. Includes data preprocessing and evaluation metrics.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/anandkalpe18/Recommender-System",
  },
  {
    title: "Sunspots Analysis",
    description:
      "Performed time-series analysis of sunspot activity data to explore periodic trends, using visualization techniques for clear insights.",
    tech: ["Python", "Matplotlib", "NumPy"],
    link: "https://github.com/anandkalpe18/Sunspots",
  },
  {
    title: "Binary Classifier",
    description:
      "Built a machine learning model for binary classification tasks, focusing on feature engineering, model training, and accuracy optimization.",
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    link: "https://github.com/anandkalpe18/Binary-Classifier",
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
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-6 hover:shadow-lg transition cursor-pointer bg-[var(--surface)]"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-[var(--text)] mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-full 
             bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] 
             text-white shadow-md"
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
