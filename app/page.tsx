import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import AIResearch from "../components/AI Research";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">
      {/* NAVBAR (floating glass style) */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT YOU */}
      <About />

      {/* EXPERIENCE (your telecom + broadcast + freelance) */}
      <Experience />

      {/* PROJECTS (FULL STACK SHOWCASE - NEW) */}
      <Projects />

      {/* AI RESEARCH (your PRB + LTE deep learning work - NEW) */}
      <AIResearch />

      {/* SKILLS (FULL STACK + TELECOM + AI) */}
      <Skills />

      {/* CERTIFICATIONS */}
      <Certifications />

      {/* EDUCATION */}
      <Education />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
