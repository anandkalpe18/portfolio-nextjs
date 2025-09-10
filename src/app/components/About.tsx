// app/components/About.tsx
"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

const skills = [
  
  // Backend
  ".NET 6+",
  "ASP.NET Core",
  "Entity Framework",
  "REST APIs",
  // Cloud
  // "Azure Functions",
  // "Azure App Services",
  // "Cosmos DB",
  // "Azure Service Bus",
  // Tools
  // "Docker",
  "Git",
  // "Azure DevOps",
  // "Jenkins",

  // Concepts
  "DSA",
  "System Design",
  "SOLID Principles",
  "Clean Architecture",

  //Languages
  "C#",
  "C++",
  "HTML",
  "CSS",  

  //Database
  "SQL",
  "Sql Server"
];

export default function About(): JSX.Element {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto">
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
        className="text-center text-[var(--text)] mb-10 max-w-3xl mx-auto"
      >
        I have 3 years of experience as a{" "}
        <span className="font-semibold">.NET Developer</span>, building{" "}
        <span className="font-semibold">
          secure, scalable enterprise applications
        </span>
        with{" "}
        <span className="font-semibold">
          ASP.NET Core, Azure, and Microservices
        </span>
        . I’m passionate about writing{" "}
        <span className="font-semibold">clean, efficient code </span>
        and creating solutions that are{" "}
        <span className="font-semibold">
          performant, reliable, and easy to maintain
        </span>
        .
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
