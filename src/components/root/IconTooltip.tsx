import { useState } from "react";
import { motion } from "framer-motion";
import { css, express, git, github, html, java, javascript, mongodb, node, postman, prisma, python, react, tailwind, ts } from "@/assets/icons/icons";

const icons = [
  { id: 1, src: html, tooltip: "HTML" },
  { id: 2, src: css, tooltip: "CSS" },
  { id: 3, src: javascript, tooltip: "JavaScript" },
  { id: 4, src: node, tooltip: "Node.js" },
  { id: 5, src: react, tooltip: "React.js", isSpinning: true }, // React will spin
  { id: 6, src: express, tooltip: "Express.js" },
  { id: 7, src: mongodb, tooltip: "MongoDB" },
  { id: 8, src: java, tooltip: "Java" },
  { id: 9, src: tailwind, tooltip: "Tailwind CSS" },
  { id: 10, src: ts, tooltip: "TypeScript" },
  { id: 11, src: git, tooltip: "Git" },
  { id: 12, src: github, tooltip: "GitHub" },
  { id: 13, src: python, tooltip: "Python" },
  { id: 14, src: prisma, tooltip: "Prisma" },
  { id: 15, src: postman, tooltip: "Postman" },
];

const IconTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-center mt-10 bg-gray-400 p-4 rounded-2xl lg:p-8" >
      {icons.map((item, index) => (
        <div
          key={item.id}
          className="relative flex flex-col items-center cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Animated Icon */}
          <motion.img
            src={item.src}
            alt={item.tooltip}
            className="w-12 h-12"
            animate={
              item.isSpinning
                ? { rotate: 360 }
                : {}
            }
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={item.isSpinning 
              ? { repeat: Infinity, duration: 4, ease: "linear" } 
              : { type: "spring", stiffness: 300 }
            }
          />

          {/* Tooltip with animation */}
          {hoveredIndex === index && (
            <motion.div
              className="absolute bottom-14 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              {item.tooltip}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconTooltip;
