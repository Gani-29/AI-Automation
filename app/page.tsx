import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import About from "./components/About";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="pt-24">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <Process />
      <CaseStudies />
      <Contact />
    </main>
  );
}