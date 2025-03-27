import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const HamBugMenu = () => {
  const [isChecked, setIsChecked] = useState(false);
 
  return (
    <div
      id="menuToggle"
      className="relative flex items-center justify-center sm:hidden"
    >
      <input
        id="checkbox"
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor="checkbox"
        className="toggle relative w-10 h-10 cursor-pointer block"
      >
        <div
          className={`bar absolute left-0 right-0 h-1 rounded bg-yellow-600 transition-all duration-300 ${
            isChecked
              ? "bottom-[calc(50%-10px)] mb-[10px] rotate-45"
              : "bottom-[calc(50%+10px)]"
          }`}
        ></div>
        <div
          className={`bar absolute left-0 right-0 h-1 rounded bg-[var(--text)] transition-all duration-300 ${
            isChecked ? "top-[calc(50%+10px)] opacity-0" : "top-[calc(50%-2px)]"
          }`}
        ></div>
        <div
          className={`bar absolute left-0 right-0 h-1 rounded bg-yellow-300 transition-all duration-300 ${
            isChecked
              ? "top-[calc(50%-2px)] -rotate-45"
              : "top-[calc(50%+10px)]"
          }`}
        ></div>
      </label>
      {isChecked && (
        <nav className="absolute top-14 right-2.5 w-56 backdrop-blur-lg bg-[var(--card-bg)]/70 z-50 shadow-lg p-4 rounded-lg py-6">
          <ul className="space-y-2">
          <li className="text-center">
            <a href="#home" className="hover:text-blue-500 hover:text-2xl text-[var(--rev-bg)] font-bold duration-200 "  onClick={() => setIsChecked(!isChecked)}>
              Home
            </a>
          </li>
          <li className="text-center">
            <a href="#about" className="hover:text-blue-500  hover:text-2xl text-[var(--rev-bg)] font-bold duration-200"  onClick={() => setIsChecked(!isChecked)}>
              About
            </a>
          </li>
          <li className="text-center">
            <a href="#projects" className="hover:text-blue-500 hover:text-2xl text-[var(--rev-bg)] font-bold duration-200"  onClick={() => setIsChecked(!isChecked)}>
              Projects
            </a>
          </li>
          <li className="text-center">
            <a href="#contact" className="hover:text-blue-500 text-[var(--rev-bg)] font-bold duration-200 hover:text-2xl"
             onClick={() => setIsChecked(!isChecked)}
            >
              Contact
            </a>
          </li>
          
            
            <li>
              <ThemeToggle className="w-full h-full" />
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamBugMenu;
