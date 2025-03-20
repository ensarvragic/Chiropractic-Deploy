import { useState, useEffect } from "react";
import { FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";
import "./App.css";
import logo from "./assets/logo.png";
import chiropractor from "./assets/chiropractor.png";
import "./Styles/home.css";
import "./Styles/about.css";
import { Icon } from "@iconify/react";
import massageIcon from "./assets/Vector.png";
import AboutImage from "./assets/team.png";
import AboutImage1 from "./assets/child.png";
import "./Styles/services.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");

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
      <NavBar scrollToSection={scrollToSection} activeSection={activeSection} />
      <div id="Home" className="section">
        <Home />
      </div>
      <div id="About" className="section">
        <About />
      </div>
      <div id="Services" className="section">
        <Services />
      </div>
      <div id="Reviews" className="section">
        <Reviews />
      </div>
      <div id="Blog" className="section">
        <Blog />
      </div>
      <div id="FAQ" className="section">
        <FAQ />
      </div>
    </>
  );
}

export function NavBar({ scrollToSection, activeSection }) {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        {["Home", "About", "Services", "Reviews", "Blog"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section);
            }}
            className={activeSection === section ? "active" : ""}
          >
            {section}
          </a>
        ))}
      </div>
      <div className="contact">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("FAQ");
          }}
          className={`faq-btn ${activeSection === "FAQ" ? "active" : ""}`}
        >
          FAQ
        </button>
        <Button>
          <FaCalendarCheck style={{ marginRight: "5px" }} />
          Book An Appointment
        </Button>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          Leading Chiropractors in{" "}
          <span className="highlight">Sydney’s Northern Beaches</span>
        </h1>
        <p>
          Feel better after your first session with pioneers of Advanced
          Biostructural Correction, trusted for over 15 years.
        </p>
        <div className="buttons">
          <Button>
            SCHEDULE A CALL
            <FaPhoneAlt style={{ marginLeft: "10px" }} />
          </Button>
          <button className="btn secondary">See How it Works</button>
        </div>
        <div className="stats">
          <div>
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>
          <div>
            <h2>1000’S</h2>
            <p>Happy Customers</p>
          </div>
          <div>
            <h2>5/5</h2>
            <p>Reviews</p>
          </div>
        </div>
      </div>

      <div className="home-img">
        <img src={chiropractor} alt="Chiropractic session" />
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="about">
      <div className="section-about">
        <h3 className="section-title">How are we Different?</h3>
        <h1 className="section-heading">
          PERSONALIZED CARE I EXPERT <br />
          CHIROPRACTIC TREATMENT
        </h1>
        <p className="section-description">
          Precise chiropractic care with advanced, gentle techniques designed
          for lasting relief, improved mobility, and long-term wellness tailored
          to your needs.
        </p>
      </div>

      <div className="features-container">
        <div className="feature-card purple">
          <div className="icon-wrapper">
            <Icon icon="mdi:face-female" className="feature-icon" />
          </div>
          <div className="feature-content">
            <h2 className="feature-title">
              Male & Female <br /> Chiropractors
            </h2>
            <p className="feature-text">
              Offering both male and female chiropractors allows you to select a
              healthcare professional you're most comfortable with.
            </p>
          </div>
        </div>

        <div className="feature-card red">
          <div className="icon-wrapper">
            <img src={massageIcon} className="feature-icon" />
          </div>
          <div className="feature-content">
            <h2 className="feature-title">
              On-site Massage <br /> Therapist
            </h2>
            <p className="feature-text">
              Our skilled therapist creates a tailored experience, addressing
              specific concerns and promoting relaxation.
            </p>
          </div>
        </div>

        <div className="feature-card dark-purple">
          <div className="icon-wrapper">
            <Icon icon="solar:running-bold" className="feature-icon" />
          </div>
          <div className="feature-content">
            <h2 className="feature-title">
              We can reduce pain <br /> in just one visit
            </h2>
            <p className="feature-text">
              At Complete Chiropractic, we target pain and injuries at their
              source. We take a holistic approach to help you achieve better
              health.
            </p>
          </div>
        </div>
      </div>
      <button className="about-btn">
        <FaCalendarCheck style={{ marginRight: "5px" }} />
        Book An Appointment
      </button>
      <section className="about-us">
        <div className="about-content">
          <h3 className="about-subtitle">About Us.</h3>
          <h2 className="about-title">
            The Northern Beaches' Most Trusted Chiropractors
          </h2>
          <p className="about-text">
            As the leading chiropractic clinic in Sydney’s Northern Beaches, our
            chiropractors have an extensive range of experience across multiple
            treatment modalities. Ours is one of the few Australian clinics to
            offer Advanced Biostructural Correction (ABC). This treatment method
            is known to gradually unwind previous injuries and traumas and can
            help you optimize your health.
          </p>
          <p className="about-text">
            At Complete Chiropractic, we target pain and injuries at their
            source. We take a holistic approach to help you achieve better
            health. Alongside our breakthrough range of chiropractic treatments,
            we’ll address your lifestyle habits, posture, and diet to enhance
            your wellness and bring you closer to reducing chronic pain.
          </p>
          <a href="#learn-more" className="learn-more">
            Learn More →
          </a>
        </div>
        <div className="about-image">
          <img src={AboutImage} alt="Team" className="about-imgs" />
          <img src={AboutImage1} alt="Team" className="about-imgs" />
        </div>
      </section>
    </div>
  );
}

export function Services() {
  return (
    <div>
      <div className="section-services">
        <h3 className="services-title">How we can help you?</h3>
        <h1 className="services-heading">Our Chiropractic Services</h1>
        <p className="services-description">
          We provide targeted chiropractic care using advanced, gentle
          techniques to deliver lasting relief, enhance mobility, and support
          your overall wellness, all customized to your specific needs.
        </p>
      </div>
    </div>
  );
}

export function Reviews() {
  return <div style={{ height: "100vh" }}>Reviews</div>;
}

export function Blog() {
  return <div style={{ height: "100vh", background: "blue" }}>Blog</div>;
}

export function FAQ() {
  return <div style={{ height: "100vh" }}>FAQ</div>;
}

export function Button({ children }) {
  return <button className="btn">{children}</button>;
}
