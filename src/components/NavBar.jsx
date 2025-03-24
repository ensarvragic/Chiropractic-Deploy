import logo from "../assets/logo.png";
import { FaCalendarCheck, FaBars, FaTimes } from "react-icons/fa";
import CustomButton from "./CustomBtn";

import '../App.css'

export default function NavBar({ scrollToSection, activeSection, handleShowModal, menuOpen, setMenuOpen }) {
  
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
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
        >
          FAQ
        </button>
        <CustomButton onClick={handleShowModal}>
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
        >
          FAQ
        </button>
        <CustomButton onClick={handleShowModal}>
          <FaCalendarCheck style={{ marginRight: "5px" }} />
          Book An Appointment
        </CustomButton>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
}
