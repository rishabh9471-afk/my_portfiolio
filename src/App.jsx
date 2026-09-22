import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Experience from "./components/Experience.jsx";
import DataAnalytics from "./components/DataAnalytics.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <Experience />
        <DataAnalytics />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
