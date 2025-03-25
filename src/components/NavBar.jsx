import { memo } from "react";
import logo from "../assets/logo.png"; 
import { FaCalendarCheck, FaBars, FaTimes } from "react-icons/fa";
import CustomButton from "./CustomBtn";
import "../App.css";

const NavBar = ({
  scrollToSection,
  activeSection,
  handleShowModal,
  menuOpen,
  setMenuOpen,
}) => {
  const sections = ["Home", "About", "Services", "Reviews", "Blog"];

  return (
    <nav className="nav" aria-label="Main navigation">
      {/* Critical LCP element - optimized with eager loading and dimensions */}
      <div className="logo">
        <img
          src={logo}
          alt="Company Logo"
          loading="eager"
          width="150"
          height="50"
          style={{ width: "auto", height: "auto" }}
          fetchPriority="high"
        />
      </div>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        {sections.map((section) => (
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

        <CustomButton onClick={handleShowModal}>
          <FaCalendarCheck style={{ marginRight: "5px" }} />
          Book An Appointment
        </CustomButton>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default memo(NavBar);