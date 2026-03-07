import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Philosophy from "./components/Philosophy";
import Protocol from "./components/Protocol";
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
    <div className="relative w-full bg-background text-text-dark font-heading min-h-screen selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <Experience />
        <Philosophy />
        <Protocol />
      </main>
      <Footer />
    </div>
  );
}

export default App;
