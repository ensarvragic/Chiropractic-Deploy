import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar.jsx';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Reviews from "./components/Reviews.jsx";
import Blog  from "./components/Blog.jsx";
import FAQ from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import AppointmentModal from "./components/AppointmentModal.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let currentSection = "Home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        handleShowModal={handleShowModal}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div id="Home" className="section">
        <Home handleShowModal={handleShowModal} />
      </div>
      <div id="About" className="section">
        <About handleShowModal={handleShowModal} />
      </div>
      <div id="Services" className="section">
        <Services handleShowModal={handleShowModal} />
      </div>
      <div id="Reviews" className="section">
        <Reviews handleShowModal={handleShowModal} />
      </div>
      <div id="Blog" className="section">
        <Blog handleShowModal={handleShowModal}/>
      </div>
      <div id="FAQ" className="section">
        <FAQ />
      </div>
      <div className="section">
        <Footer />
      </div>
      <AppointmentModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
}