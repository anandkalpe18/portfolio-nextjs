"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_9vhh0aj",
        "template_nfz3cru",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "uEO3Cf6E1i9kz8jf8"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" }); // clear form
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-[var(--primary)] mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-[var(--surface)] shadow-lg rounded-xl p-6 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border border-gray-300 text-black placeholder-gray-500 
           dark:text-white dark:placeholder-gray-400 
           px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border border-gray-300 text-black placeholder-gray-500 
             dark:text-white dark:placeholder-gray-400 
             px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="border border-gray-300 text-black placeholder-gray-500 
             dark:text-white dark:placeholder-gray-400 
             px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          required
        />

        <button
          type="submit"
          className="mt-4 bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[var(--accent)] transition shadow-md"
        >
          Send Message
        </button>
      </motion.form>

      {/* Status Messages */}
      {status === "success" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center text-green-600 font-semibold"
        >
          ✅ Message sent successfully! I’ll get back to you soon.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center text-red-600 font-semibold"
        >
          ❌ Oops! Something went wrong. Please try again later.
        </motion.p>
      )}
    </section>
  );
}
