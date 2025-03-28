"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Simulate form submission (Replace with backend API later)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send. Try again!");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-[var(--text)] bg-transparent border outline-2 rounded-3xl shadow-2xl">
      {/* Heading with Scroll Animation */}
      <motion.h1
        className="text-5xl font-bold uppercase mb-10 tracking-widest"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Contact Me
      </motion.h1>

      {/* Social Media Links */}
      <motion.div
        className="flex space-x-6 text-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-all">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-all">
          <FaTwitter />
        </a>
        <a href="mailto:your@email.com" className="hover:text-red-400 transition-all">
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Contact Form with Scroll Animation */}
      <motion.div
        className="mt-10 bg-[var(--text)] p-6 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-[var(--rev-bg)]">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-[var(--rev-bg)] text-[var(--text)] rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--rev-bg)]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-[var(--rev-bg)] text-[var(--text)]e rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--rev-bg)]">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-[var(--rev-bg)] text-[var(--text)] rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows={4}
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-[var(--rev-bg)] hover:bg-blue-500 transition-all rounded-md font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
          {status && <p className="text-center text-gray-300 mt-2">{status}</p>}
        </form>
      </motion.div>
    </div>
  );
}
