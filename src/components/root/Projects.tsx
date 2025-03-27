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
    <div className="min-h-screen  text-[var(--text)] backdrop-blur-lg border outline-2 rounded-3xl px-6 py-12">
      {/* Moving Heading */}
      <div className="relative overflow-hidden whitespace-nowrap py-6 mt-8">
  {/* Top & Bottom Double Borders */}

  <div className="absolute top-0 left-0 w-full h-1 bg-[var(--text)]"></div>
  {/* <div className="absolute top-[4px] left-0 w-full h-1bg-[var(--text)]"></div> */}

  
  <motion.h1
    className="text-5xl font-bold uppercase text-[var(--text)] tracking-wider"
    animate={{ x: ["-100%", "100%"] }}
    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
  >
    PROJECTS &nbsp; PROJECTS &nbsp; PROJECTS &nbsp; PROJECTS &nbsp;
  </motion.h1>

  <div className="absolute bottom-[4px] left-0 w-full h-1 bg-[var(--text)]"></div>
  <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--text)]"></div>
</div>


      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30 }} // Alternate Scroll Directions
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card className="relative overflow-hidden rounded-lg shadow-lg border bg-gray-500 transition-transform duration-300 group-hover:scale-105">
              <CardContent className="p-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-44 lg:h-72 object-cover rounded-md"
                />
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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
