"use client";
import img from "@/assets/pravat.png";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Chat App",
    image: img,
    projectLink: "https://your-chat-app.com",
    github: "https://github.com/your-repo/chat-app",
  },
  {
    name: "Chat App",
    image: img,
    projectLink: "https://your-chat-app.com",
    github: "https://github.com/your-repo/chat-app",
  },
  {
    name: "Chat App",
    image: img,
    projectLink: "https://your-chat-app.com",
    github: "https://github.com/your-repo/chat-app",
  },
  {
    name: "Chat App",
    image: img,
    projectLink: "https://your-chat-app.com",
    github: "https://github.com/your-repo/chat-app",
  },
  {
    name: "Chat App",
    image: img,
    projectLink: "https://your-chat-app.com",
    github: "https://github.com/your-repo/chat-app",
  },
  {
    name: "Chat App",
    image: img,
    projectLink: "https://your-chat-app.com",
    github: "https://github.com/your-repo/chat-app",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen  text-[var(--text)]  outline-none border border-none  rounded-3xl px-6 py-12">
      {/* Moving Heading */}
        <h1 className="text-center text-5xl font-bold mt-16 underline">PROJECTS</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mx-12 lg:gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30 }} // Alternate Scroll Directions
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card className="relative overflow-hidden rounded-lg shadow-lg border  transition-transform duration-300 group-hover:scale-105">
              <CardContent className="shadow-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-44 lg:h-96 object-cover rounded-md"
                />
                <div className="backdrop-blur-[20px]  shadow-accent mt-2 rounded-2xl  px-5 py-2">
                  <h2 className="text-xl font-semibold mt-4">{project.name}</h2>
                  <div className="flex gap-4 mt-3">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 flex items-center gap-1"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
