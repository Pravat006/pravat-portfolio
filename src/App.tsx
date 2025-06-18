
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/root/Header";
import Home from "./components/root/Home";
import About from "./components/root/About";
import Projects from "./components/root/Projects";
import Contact from "./components/root/Contact";
import CanvasBackground from "./components/root/CanvaBackground";

function App() {
  // const currentPage = useSelector((state: any) => state.currentPage.currentPage);

  return (
    <ThemeProvider>
      <div className=" h-screen  dark:bg-[var(--bg-dark)] overflow-auto bg-app-bg ">
        <CanvasBackground/>
        <Header />
        <div className="flex flex-col gap-5 ">
          
          <section id="home" className="rounded-3xl ">
            <Home />
          </section>
          <section id="about" className="min-h-screen rounded-3xl flex items-center justify-center">
            <About />
          </section>
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;