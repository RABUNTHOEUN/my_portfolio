import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
     <Header>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio showcasing my web development projects." />
      </Header>
      <Hero />
      <Projects />
      <About />
      <Footer />
    </>
  );
}
