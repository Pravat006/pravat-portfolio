import React, { useEffect, useState } from "react";

const TextGenerator: React.FC = () => {
  const sentences: string[] = [
    "HTML",
    "Css",
    "Javascript",
    "Typescript",
    "React",
    "Node.Js",
    "express",
    "Mongodb",
    "mongoose",
    "Git",
    "Github",
    "Python",

  ];
const colors: string[]=[
    "text-orange-500", 
    "text-blue-500",
    "text-yellow-500",
    "text-blue-500",
    "text-blue-400",
    "text-green-500",
    "text-grey-500",
    "text-green-500",
    "text-green-500",
    "text-orange-500",
    "text-gray-200",
    "text-yellow-500",
]
  const [index, setIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    // Typing effect
    if (charIndex < sentences[index].length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText((prev) => prev + sentences[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed

      return () => clearTimeout(typingTimer);
    }

    // Delay before clearing and switching to the next sentence
    const switchTimer = setTimeout(() => {
      setDisplayedText("");
      setCharIndex(0);
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 2000); // Delay before moving to next sentence

    return () => clearTimeout(switchTimer);
  }, [charIndex, index]);

  return (
    <div className="mt-4 flex items-center justify-center   text-white ">
      <div className={`z-2 text-2xl md:text-5xl lg:text-7xl  font-bold font-mono transitin-200 ${colors[index]}`}>
        {displayedText}
        <span className="animate-blink">|</span>
      </div>
    </div>
  );
};

export default TextGenerator;
