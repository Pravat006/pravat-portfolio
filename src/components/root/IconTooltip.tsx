import { useState } from "react";
import { motion } from "framer-motion";
import { github, java, prisma } from "@/assets/icons/icons";

const icons = [
  {
    id: 1,
    src: "https://camo.githubusercontent.com/6647554cf19482c32acc6a6a3b8bd68b845fafabd474595e7e92dead3075c3ea/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667",
    tooltip: "HTML",
  },
  {
    id: 2,
    src: "https://camo.githubusercontent.com/4eaf7f26830ffa4bc4c4502a24e9be29fa2796208648a805e8f610da811aeb05/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667",
    tooltip: "CSS",
  },
  {
    id: 3,
    src: "https://camo.githubusercontent.com/426c1121b29abc64a6b1af1e3aa3091abb38e39c87054720b765af1425c74e7f/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667",
    tooltip: "JavaScript",
  },
  {
    id: 4,
    src: "https://camo.githubusercontent.com/d21012299f2ccd4a7d73b13f896b0be91c9e71bb7f0b51f1cbfb783ed6b9f9b1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667",
    tooltip: "Node.js",
  },
  {
    id: 5,
    src: "https://camo.githubusercontent.com/34b891c76d258e4b0ee593443e5cbc2506cdbb7d3cd6bc0e4beffa87a9c1611b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667",
    tooltip: "React.js",
    isSpinning: true,
  }, // React will spin
  {
    id: 6,
    src: "https://camo.githubusercontent.com/1a9d3ee6440ef16833951dd0615689bd1c129848ed82ba885d611a03d93979fc/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f657870726573732f657870726573732d6f726967696e616c2e737667",
    tooltip: "Express.js",
  },
  {
    id: 7,
    src: "https://camo.githubusercontent.com/8c779088a37e29fdc8fca5576357aa67c86f30041734226d17f70e150eececdf/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6d6f6e676f6462",
    tooltip: "MongoDB",
  },
  { id: 8, src: java, tooltip: "Java" },
  {
    id: 9,
    src: "https://camo.githubusercontent.com/a739cc726be1242578d99c1507c43b7323fe4b74e2f04e3cf7b16fbe66b1893d/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7461696c77696e646373732f7461696c77696e646373732d6f726967696e616c2d776f72646d61726b2e737667",
    tooltip: "Tailwind CSS",
  },
  {
    id: 10,
    src: "https://camo.githubusercontent.com/a07203131922e3fa0d6d0cd787edb5597771b30d712574bbc70a3c7aaa0161ea/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667",
    tooltip: "TypeScript",
  },
  {
    id: 11,
    src: "https://camo.githubusercontent.com/15166a15835f145259844be455ab5945594a70c48a3090aa83d193bd5e3e9bc5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667",
    tooltip: "Git",
  },
  { id: 12, src: github, tooltip: "GitHub" },
  {
    id: 13,
    src: "https://camo.githubusercontent.com/1594bb61e85b22739a2e8fa02ea68154f8969efc2f280a47f2602f99d5f0fc0e/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7079",
    tooltip: "Python",
  },
  { id: 14, src: prisma, tooltip: "Prisma" },
  {
    id: 15,
    src: "https://camo.githubusercontent.com/f4887ca5e072fc6d4fa36981141f3052c397dcf712b63f36908faa4dc5f7971b/68747470733a2f2f63646e2e73696d706c6569636f6e732e6f72672f706f73746d616e2f464636433337",
    tooltip: "Postman",
  },
];

const IconTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-center mt-10 bg-gray-400 p-4 rounded-2xl lg:p-8">
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
            animate={item.isSpinning ? { rotate: 360 } : {}}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={
              item.isSpinning
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
