"use client";

import { useState, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notes, Note } from "@/data/notesData";

type SubCategory = {
  name: string;
  notes: Note[];
};

type Category = {
  name: string;
  subCategories: SubCategory[];
};

export default function Notes(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  // Build categories array from notes object
  const categories: Category[] = [
    {
      name: "Design Patterns",
      subCategories: Object.keys(notes).map((key) => ({
        name: key,
        notes: notes[key],
      })),
    },
  ];

  const categoryColors: Record<string, string> = {
    "Creational Design Patterns": "border-green-500",
    "Structural Design Patterns": "border-blue-500",
    "Behavioral Design Patterns": "border-purple-500",
  };

  return (
    <section id="notes" className="py-20 max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-[var(--primary)] mb-12"
      >
        Study Notes
      </motion.h2>

      {/* Step 1: Show Main Categories */}
      {!selectedCategory && !selectedSubCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedCategory(category)}
              className="cursor-pointer bg-[var(--surface)] shadow-lg hover:shadow-xl rounded-xl border-l-8 p-6 transition-all border-[var(--primary)]"
            >
              <h3 className="text-2xl font-semibold text-[var(--accent)] mb-2">{category.name}</h3>
              <p className="text-sm text-[var(--text)]">{category.subCategories.length} subcategories</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Step 2: Show Subcategories */}
      <AnimatePresence>
        {selectedCategory && !selectedSubCategory && (
          <motion.div
            key="subcategories"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className="col-span-full mb-4 px-4 py-2 bg-[var(--primary)] text-white rounded shadow hover:shadow-md transition"
            >
              ← Back to Categories
            </button>

            {selectedCategory.subCategories.map((sub) => (
              <motion.div
                key={sub.name}
                whileHover={{ scale: 1.02 }}
                className={`cursor-pointer bg-[var(--surface)] shadow-md hover:shadow-lg rounded-xl border-l-8 p-6 transition-all ${categoryColors[sub.name]}`}
                onClick={() => setSelectedSubCategory(sub)}
              >
                <h4 className="text-xl font-bold text-[var(--accent)] mb-2">{sub.name}</h4>
                <p className="text-sm text-[var(--text)]">{sub.notes.length} patterns</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Step 3: Show Notes in Subcategory */}
        {selectedSubCategory && !selectedNote && (
          <motion.div
            key="notes"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedSubCategory(null)}
              className="col-span-full mb-4 px-4 py-2 bg-[var(--primary)] text-white rounded shadow hover:shadow-md transition"
            >
              ← Back to Subcategories
            </button>

            {selectedSubCategory.notes.map((note) => (
              <motion.div
                key={note.title}
                whileHover={{ scale: 1.02 }}
                className="bg-[var(--surface)] shadow-md hover:shadow-lg rounded-lg p-6 cursor-pointer flex flex-col justify-between transition"
                onClick={() => setSelectedNote(note)}
              >
                <h4 className="text-xl font-bold text-[var(--accent)] mb-3">{note.title}</h4>
                <div className="text-sm text-[var(--text)] flex flex-col gap-2">
                  <p>
                    <span className="font-semibold">Formal Definition: </span>
                    {note.definition}
                  </p>
                  <p>
                    <span className="font-semibold">When to Use: </span>
                    {note.use}
                  </p>
                  <p>
                    <span className="font-semibold">Problem Solved: </span>
                    {note.problem}
                  </p>
                  <p>
                    <span className="font-semibold">Real World Use Case: </span>
                    {note.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Step 4: Note Detail Modal */}
{selectedNote && (
  <motion.div
    key="noteModal"
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-[var(--surface)] dark:bg-black rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedNote(null)}
        className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--primary)] text-xl z-10"
      >
        ✖
      </button>

      {/* Modal Content */}
      <div className="flex flex-col p-6 gap-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 2rem)" }}>
        {/* Optional Image */}
        {selectedNote.image && (
          <img
            src={selectedNote.image}
            alt={selectedNote.title}
            className="w-full max-h-60 object-contain mb-4 rounded"
          />
        )}

        {/* Title */}
        <h3 className="text-3xl font-extrabold text-[var(--primary)] rounded-md px-6 py-3 mb-4 shadow-md text-center bg-[var(--surface)] dark:bg-gray-800">
          {selectedNote.title}
        </h3>

        {/* Note Details */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded shadow-sm">
            <p className="font-semibold mb-1 text-[var(--accent)]">Formal Definition</p>
            <p>{selectedNote.definition}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded shadow-sm">
            <p className="font-semibold mb-1 text-[var(--accent)]">When to Use</p>
            <p>{selectedNote.use}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded shadow-sm">
            <p className="font-semibold mb-1 text-[var(--accent)]">Problem Solved</p>
            <p>{selectedNote.problem}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded shadow-sm">
            <p className="font-semibold mb-1 text-[var(--accent)]">Real World Use Case</p>
            <p>{selectedNote.example}</p>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}
      </AnimatePresence>
    </section>
  );
}
