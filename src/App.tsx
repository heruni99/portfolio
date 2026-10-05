import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Projects from "./components/section/Projects";
import MiniProjects from "./components/section/MiniProjects";
import Skills from "./components/section/Skills";
import Contact from "./components/section/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <MiniProjects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
