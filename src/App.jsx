import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import CVDisplay from "./components/CVDisplay";
import LetsConnect from "./components/LetsConnect";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Add noise overlay dynamically since index.css class is there
    const noise = document.createElement("div");
    noise.className = "noise-overlay";
    document.body.appendChild(noise);

    return () => {
      if (document.body.contains(noise)) {
        document.body.removeChild(noise);
      }
    };
  }, []);

  return (
    <div className="relative w-full bg-background text-text-dark font-heading min-h-screen selection:bg-accent selection:text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <Experience />
        <CVDisplay />
        <LetsConnect />
      </main>

      {/* Smooth transition into Footer's dark background, hiding white rounded corners */}
      <div className="w-full relative flex flex-col">
        {/* Gradient that fades from transparent (light) to black */}
        <div className="w-full h-32 md:h-48 bg-gradient-to-b from-transparent to-[#0A0A0F]"></div>
        {/* Solid black wrapper directly behind the footer to hide its rounded corners edges */}
        <div className="w-full bg-[#0A0A0F]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
