import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/root/Header";
import Home from "./components/root/Home";
import About from "./components/root/About";
import Projects from "./components/root/Projects";
import Contact from "./components/root/Contact";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const currentPage = useSelector((state: any) => state.currentPage.currentPage);
  const [prevPage, setPrevPage] = useState(currentPage);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (currentPage !== prevPage) {
      setTransitioning(true);
      setTimeout(() => {
        setPrevPage(currentPage);
        setTransitioning(false);
      }, 800); // Same duration as the animation
    }
  }, [currentPage]);

  // Wave transition animation
  const pageVariants = {
    initial: { clipPath: "circle(0% at 0% 0%)" },
    animate: { 
      clipPath: "circle(150% at 0% 0%)", 
      transition: { duration: 0.8, ease: "easeInOut" } 
    },
  };

  return (
    <ThemeProvider>
      <div className="relative w-full h-screen bg-[var(--bg)] dark:bg-[var(--bg-dark)] overflow-hidden">
        <Header />

        {/* Show the previous page until transition completes */}
        <div className="absolute inset-0 w-full h-full">
          {prevPage === 0 && <Home />}
          {prevPage === 1 && <About />}
          {prevPage === 2 && <Projects />}
          {prevPage === 3 && <Contact />}
        </div>

        {/* Overlay transition effect */}
        <AnimatePresence>
          {transitioning && (
            <motion.div
              key={currentPage} // Unique key ensures animation triggers
              variants={pageVariants}
              initial="initial"
              animate="animate"
              className="absolute top-0 left-0 w-full h-full bg-[var(--bg)] dark:bg-[var(--bg-dark)]"
            >
              {currentPage === 0 && <Home />}
              {currentPage === 1 && <About />}
              {currentPage === 2 && <Projects />}
              {currentPage === 3 && <Contact />}
            </motion.div>
          )}
        </AnimatePresence>
         
      </div>
    </ThemeProvider>
  );
}

export default App;
