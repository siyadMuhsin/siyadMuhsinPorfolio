import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    {/* <Header /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education/>
      <Contact />
      <Footer />
    </>
  );
}
