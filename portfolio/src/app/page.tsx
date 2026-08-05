import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CareerHighlights from "@/components/sections/CareerHighlights";
import Companies from "@/components/sections/Companies";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Teaching from "@/components/sections/Teaching";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CareerHighlights />
        <Companies />
        <Skills />
        <Projects />
        <Teaching />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
