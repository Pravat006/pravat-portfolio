import pp from "@/assets/pp.png";
// import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import ColourfulText from "../ui/colourful-text";
import TextGenerator from "./TextGeneratoer";

export function SpotL() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden   antialiased md:items-center md:justify-center mx-auto rounded-3xl">
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none flex items-center justify-center",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      /> */}

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      {/* <div className="absolue buttom-0 left-0 z-10 mx-auto w-full max-w-7xl  md:pt-0 flex flex-col  sm:flex-col items-center justify-evenly lg:flex-row h-full">
              <h1>sdh</h1>
              </div> */}
        <div className="flex flex-col lg:flex-row items-center justify-end sm:px-8   gap-10  mx-auto my-auto pt-10                 ">
              <div className="introduction   rounded-3xl px-12 py-10 text-[var(--text)] dark:text-[var(--text)]  ">
              <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-[var(--text)] relative z-2 font-sans  ">
                H!! 👋
      </h1>
              <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center  text-[var(--text)] relative z-2 font-sans  ">
        I'am  <ColourfulText text="Pravat" /> <br />Glad to see you here
      </h1>
              <TextGenerator/>
   
              </div>
              <img src={pp} alt="" className="min-w-80 sm:h-96  h-72 object-cover backdrop-blur-md  pt-2.5 px-5 rounded-3xl bg-white/5 right-0"/>

        </div>
      
    </div>
  );
}
