import { motion } from "framer-motion";
import IconTooltip from "./IconTooltip";

const About = () => {
  return (
    <div className="min-h-screen bg-transparent backdrop-blur-3xl  text-[var(--text)] px-6 md:px-16 pt-28 pb-10 rounded-3xl overflow-hidden border-2 shadow-2xl">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }} // Reverse transition
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        About Me
      </motion.h1>

      {/* Self Introduction */}
      <motion.div
        className="max-w-3xl mx-auto mb-10 text-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }} // Reverse transition
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="mb-4 text-2xl">
          Hi, I'm <span className="text-blue-400 font-semibold text-3xl">Pravat Behera</span>, a passionate web developer who loves building interactive and scalable applications.
        </p>
        <p className="lg:text-2xl">
          My journey in coding started with a curiosity for web technologies, and it has grown into a deep expertise in <h3 className="font-bold text-xl ">Frontend and Backend Development</h3>
        </p>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }} // Reverse transition
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="font-bold lg:text-2xl">🎓 Studying <span className="font-bold text-yellow-500">B.Tech in Computer Science </span > Biju Patnaik University of Technology</p>
        <p className="lg:text-2xl">My studies have provided me with a strong foundation in software development and problem-solving. <br /> Which makes me more curious about Development </p>
      </motion.div>

      {/* Development Skills */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }} // Reverse transition
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Development Skills</h2>
        <div>
          <IconTooltip />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
