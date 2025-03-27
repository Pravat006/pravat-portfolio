import logo from "../../assets/pravat.png";
import HamBugMenu from "./HamBugMenu";
import ThemeToggle  from "./theme-toggle";


function Header() {
 
  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-screen-lg backdrop-blur-md bg-white/10 shadow-lg rounded-2xl px-2 py-2 sm:px-6 sm:mx-auto ">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="xsa"
            height={50}
            width={50}
            className=" rounded-3xl"
          />
          <h1 className="text-xl font-bold text-[var(--text)]">Pravat</h1>
        </div>
        {/* <ul className="sm:flex sm:gap-6 gap-4 hidden ">
          <li>
            <button className="hover:text-blue-500 text-[var(--text)] font-bold duration-200"
              onClick={() => dispatch(setCurrentPage(0))}
              
            >
              Home

            </button>
            
          </li>
          <li>
            <button className="hover:text-blue-500 text-[var(--text)] font-bold duration-200"
              onClick={() => dispatch(setCurrentPage(1))}
            >
              About
            </button>
          </li>
          <li>
            <button className="hover:text-blue-500 text-[var(--text)] font-bold duration-200"
              onClick={() => dispatch(setCurrentPage(2))}
              
            >Projects</button>
          </li>
          <li>
            <button className="hover:text-blue-500 text-[var(--text)] font-bold duration-200"
            onClick={() => dispatch(setCurrentPage(3))}
            
            >Contact</button>
          </li>
          <li>
          </li>
          
        </ul> */}
         <ul className="sm:flex sm:gap-6 gap-4 hidden">
          <li>
            <a href="#home" className="hover:text-blue-500 text-[var(--text)] font-bold duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 text-[var(--text)] font-bold duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 text-[var(--text)] font-bold duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 text-[var(--text)] font-bold duration-200">
              Contact
            </a>
          </li>
        </ul>

            <ThemeToggle 
            className="hidden sm:flex"
            />
        <HamBugMenu />
      </div>
      </nav>
    );
}

export default Header;
