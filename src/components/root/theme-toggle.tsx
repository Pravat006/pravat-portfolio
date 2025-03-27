import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const ThemeToggle = ({
    className = "",
}) => {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-6 border rounded-full shadow-accent bg-gray-200 dark:bg-black items-center justify-center transition-colors duration-300 relative overflow-hidden text-center h-5 w-5 flex ${className}`}
    >
      <Sun
        size={40}
        className={`absolute mask-image-radial  h-5 transition-transform duration-500 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
      />
      <Moon
      size={40}
        className={`absolute h-5 transition-transform duration-500 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
      />
    </button>
  );
};

export default ThemeToggle;