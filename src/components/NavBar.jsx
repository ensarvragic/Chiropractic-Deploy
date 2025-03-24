import logo from "../assets/logo.png";
import { FaCalendarCheck, FaBars, FaTimes } from "react-icons/fa";
import CustomButton from "./CustomBtn";
import "../App.css";

export default function NavBar({
  scrollToSection,
  activeSection,
  handleShowModal,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="logo">
        <img src={logo} alt="Company Logo" loading="lazy" />
      </div>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        {["Home", "About", "Services", "Reviews", "Blog"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section);
              setMenuOpen(false);
            }}
            className={activeSection === section ? "active" : ""}
            aria-current={activeSection === section ? "page" : undefined}
            aria-label={`Go to the ${section} section`}
          >
            {section}
          </a>
        ))}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("FAQ");
            setMenuOpen(false);
          }}
          className={`faq-btn ${activeSection === "FAQ" ? "active" : ""}`}
          aria-label="Go to FAQ section"
        >
          FAQ
        </button>

        <CustomButton onClick={handleShowModal} aria-label="Book an appointment">
          <FaCalendarCheck style={{ marginRight: "5px" }} />
          Book An Appointment
        </CustomButton>
      </div>

      <div className="contact">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("FAQ");
            setMenuOpen(false);
          }}
          className={`faq-btn ${activeSection === "FAQ" ? "active" : ""}`}
          aria-label="Go to FAQ section"
        >
          FAQ
        </button>
        <CustomButton onClick={handleShowModal} aria-label="Book an appointment">
          <FaCalendarCheck style={{ marginRight: "5px" }} />
          Book An Appointment
        </CustomButton>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen ? "true" : "false"}
        aria-controls="main-navigation-links"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}