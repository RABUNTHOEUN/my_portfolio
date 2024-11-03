import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./about/page";
import Projects from "./projects/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
     
      <Hero />
      <Projects />
      <About />
      
    </>
  );
}
