import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Languages from "./components/Languages";
import Specializations from "./components/Specializations";
import CodingProfiles from "./components/CodingProfiles";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Languages />
      <Specializations />
      <CodingProfiles />
      <Certifications />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
