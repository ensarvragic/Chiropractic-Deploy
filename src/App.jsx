import { useState, useEffect } from "react";
import {
  FaCalendarCheck,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaComment,
} from "react-icons/fa";
import "./App.css";
import logo from "./assets/logo.png";
import chiropractor from "./assets/chiropractor1.png";
import "./Styles/home.css";
import "./Styles/about.css";
import { Icon } from "@iconify/react";
import massageIcon from "./assets/Vector.png";
import AboutImage from "./assets/team.png";
import AboutImage1 from "./assets/child.png";
import "./Styles/services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Modal, Button } from "react-bootstrap";
import "./Styles/review.css";
import firstChiro from "./assets/firstChiro.png";
import secondChiro from "./assets/secondChiro.png";
import thirdChiro from "./assets/thirdChiro.png";
import fourthChiro from "./assets/fourthChiro.png";
import "./Styles/faq.css";
import { ImQuotesLeft } from "react-icons/im";
import Recension from "./assets/recensionn.png";
import "./Styles/modal.css";
import "./Styles/blog.css";
import "./Styles/footer.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [showModal, setShowModal] = useState(false);

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

export function NavBar({ scrollToSection, activeSection, handleShowModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

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

export function Home({ handleShowModal }) {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          Leading Chiropractors in{" "}
          <span className="highlight">Sydney’s Northern Beaches</span>
        </h1>
        <p className="hom-text">
          Feel better after your first session with pioneers of Advanced
          Biostructural Correction, trusted for over 15 years.
        </p>
        <div className="buttons">
          <CustomButton onClick={handleShowModal}>
            SCHEDULE A CALL
            <FaPhoneAlt style={{ marginLeft: "10px" }} />
          </CustomButton>
          <button className="btn-secondary">See How it Works</button>
        </div>
        <div className="stats">
          {/* da se odradi u lniji da bude */}
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

export function About({ handleShowModal }) {
  const chiropractors = [
    {
      name: "Dr. HOOMAN ZAHEDI",
      title: "Chiropractor",
      description:
        "After qualifying as a chiropractor at Macquarie University, Hooman travelled to the UK. Along with a few other chiropractors, he pioneered chiropractic treatment in Scotland and went on to become the Director of Chiropractic Care and a partner in Europe’s largest chiropractic group, comprising 21 practices. When he returned to Australia he became a Founding Board member of Advanced Biostructural Correction Australia, a unique chiropractic technique.",
      image: firstChiro,
    },
    {
      name: "Dr. JASON WHEALING",
      title: "Chiropractor",
      description:
        "Jason enters his 7th year as Chiropractor at our Dee Why clinic. With a passion for health and performance, forged in some of the best clinics in Australia and the UK, he thrives on the positive outcomes his patients experience. With certainty through rigorous testing, Jason is always looking toward that next level of vitality – for you, and your family.",
      image: secondChiro,
    },
    {
      name: "Dr. CHRISTINE MARTIN",
      title: "Chiropractor",
      description:
        "After qualifying as a chiropractor at Macquarie University, Christine travelled to the UK. Along with a few other chiropractors, she pioneered chiropractic treatment in Scotland and went on to become the Director of Chiropractic Care and a partner in Europe’s largest chiropractic group, comprising 21 practices. When she returned to Australia she became a Founding Board member of Advanced Biostructural Correction Australia, a unique chiropractic technique.",
      image: thirdChiro,
    },
    {
      name: "Dr. SONYA",
      title: "Chiropractor",
      description:
        "Jason enters his 7th year as Chiropractor at our Dee Why clinic. With a passion for health and performance, forged in some of the best clinics in Australia and the UK, he thrives on the positive outcomes his patients experience. With certainty through rigorous testing, Jason is always looking toward that next level of vitality – for you, and your family.",
      image: fourthChiro,
    },
  ];
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
      <button className="about-btn" onClick={handleShowModal}>
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
      <div className="team-container">
        <h2 className="team-title-about">Who we are?</h2>
        {chiropractors.map((chiro, index) => (
          <div
            key={index}
            className={`team-card ${
              index % 2 === 0 ? "group-one" : "group-two"
            } ${index % 2 === 0 ? "left" : "right"}`}
          >
            <img src={chiro.image} alt={chiro.name} className="team-image" />
            <div className="team-info">
              <h3 className="team-name">{chiro.name}</h3>
              <p className="team-title">{chiro.title}</p>
              <p className="team-description">{chiro.description}</p>
            </div>
          </div>
        ))}
        <button className="team-btn" onClick={handleShowModal}>
          Book An Consultation
          <FaComment style={{ marginLeft: "5px", marginBottom: "3px" }} />
        </button>
      </div>
    </div>
  );
}

export function Services({ handleShowModal }) {
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
      <div className="services-accordion">
        <div className="services-accordion-div">
          <Accordion>
            <Accordion.Item eventKey="0" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Body Posture Improvement
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                70% of the body's energy is used to counteract gravity.
                <br />
                We treat the underlying factors contributing to poor posture and
                you may see a positive change in posture in just one visit.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Treatment of Age-Related and Mobility Issues
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                We can help you manage a range of injuries and illness, giving
                you greater mobility and the freedom to be as active as
                possible.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Upper and Lower Back Pain Treatment
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                We assess the source of your back pain and form a customized
                treatment plan.
                <br />
                Alongside traditional chiropractic treatments, you can get
                lifestyle advice that could help you take your health into your
                own hands.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Chronic Pain Relief
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                Break free from pain cycles through targeted and personalised
                treatments.
                <br />
                Our methods focus on both immediate relief and long-term
                management strategies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Improving Overall Health, Wellness, and Quality of Life
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                Regardless of where you are on your wellness journey, you can
                always get more active, sleep better, or simply feel more
                energized.
                <br />
                We develop strategies that fit your lifestyle. You can build a
                foundation for lasting wellness with us.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Vertigo and Dizziness Treatment
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                If you feel symptoms like vertigo getting in the way when you do
                daily tasks,
                <br />
                we can assess its underlying cause and create tailored plans to
                prevent it from occurring in the future.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <button className="service-btn" onClick={handleShowModal}>
          <FaCalendarCheck style={{ marginRight: "5px" }} />
          Book An Appointment
        </button>
      </div>
    </div>
  );
}

export function Reviews({ handleShowModal }) {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <h1>What Our Customers Have To Say About Our Work</h1>
      <a
        href="https://www.thepeoplesreview.ie/"
        className="reviews-link"
        target="blank"
      >
        <img src={Recension} />
      </a>

      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="quote-icon">
            <ImQuotesLeft />
          </div>
          <h3 className="testimonial-heading">Knowledgeable</h3>
          <p>
            I cannot recommend this chiropractor enough! From the moment I
            walked in, I was welcomed with warmth and professionalism. The
            doctor took the time to understand my specific concerns and tailored
            the treatment accordingly. I felt a noticeable improvement after
            just one session, and with each visit, my mobility and overall
            well-being continued to improve. The office is well-maintained, the
            staff is incredibly friendly, and the entire experience is nothing
            short of outstanding. If you're looking for a skilled,
            knowledgeable, and genuinely caring chiropractor, this is the place
            to go! Thanks 😊
          </p>
          <strong>- Scott</strong>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">
            <ImQuotesLeft />
          </div>
          <h3>Professional</h3>
          <p>
            My experience at this chiropractic clinic has been nothing but
            positive. Not only did the treatment help relieve my chronic back
            pain, but the chiropractor also provided valuable advice on posture,
            daily exercises, and lifestyle changes that have made a real
            difference in my health. The holistic approach here is what truly
            sets them apart—it's not just about quick fixes but long-term
            well-being. The professionalism, expertise, and friendly atmosphere
            make every visit enjoyable. I can confidently say that my quality of
            life has improved tremendously thanks to their care! Thanks 😊
          </p>
          <strong>- Matt</strong>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">
            <ImQuotesLeft />
          </div>
          <h3>Amazing Work</h3>
          <p>
            I had been struggling with neck and shoulder pain for months before
            I found this chiropractor, and I only wish I had come sooner! Every
            appointment is a pleasant experience, from the welcoming front desk
            staff to the thorough and effective treatments. The chiropractor
            takes the time to explain each step and ensures that I feel
            comfortable throughout the process. What truly impressed me was the
            personalized approach—no one-size-fits-all solutions, just dedicated
            care tailored to my needs. If you're looking for someone who is not
            only highly skilled but also compassionate and attentive, look no
            further. This place is a game-changer! Thanks 😊
          </p>
          <strong>- Rabecca</strong>
        </div>
      </div>

      <button className="consultation-button" onClick={handleShowModal}>
        Book A Consultation
        <FaComment style={{ marginLeft: "5px", marginBottom: "5px" }} />
      </button>
    </div>
  );
}

export function Blog({handleShowModal}) {
  return (
    <div className="blog-section">
      <div className="blog-content">
        <h1 className="blog-title">Need Help? Meet The New You Today</h1>
        <p className="blog-text">
          Jason enters his 7th year as Chiropractor at our Dee Why clinic. With
          a passion for health and performance, forged in some of the best
          clinics in Australia and the UK, he thrives on the positive outcomes
          his patients experience.
        </p>
        <p className="blog-text">
          With certainty through rigorous testing, Jason is always looking
          toward that next level of vitality – for you, and your family.
        </p>
        <button className="blog-consultation-btn" onClick={handleShowModal}>Book A Consultation</button>
      </div>
      <div className="blog-video-container">
        <iframe
          src="https://www.youtube.com/embed/XvYeHDnvfPw"
          title="Revolutionary Technique Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="blog-video"
        ></iframe>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <div className="faq-container">
      <div>
        <h3 className="faq-title">Our most asked questions.</h3>
        <h1 className="faq-heading">Frequently Asked Questions (FAQ)</h1>
      </div>

      <div className="faq-accordion-wrapper">
        <div className="faq-accordion-column">
          <Accordion>
            <Accordion.Item eventKey="0" className="faq-accordion-item">
              <Accordion.Header className="faq-accordion-header">
                How does chiropractic care differ from physical therapy?
              </Accordion.Header>
              <Accordion.Body className="faq-accordion-body">
                Chiropractic care often targets immediate pain relief and
                long-term structural correction, while physical therapy
                generally restores function and mobility following injury or
                surgery.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="faq-accordion-item">
              <Accordion.Header className="faq-accordion-header">
                Are chiropractic treatments safe?
              </Accordion.Header>
              <Accordion.Body className="faq-accordion-body">
                Yes, chiropractic treatments are generally safe when performed
                by a qualified chiropractor. Side effects, such as mild soreness
                or stiffness, are usually minimal and temporary. Chiropractors
                are trained to assess patients carefully and avoid treatments
                that could pose risks, especially for individuals with
                pre-existing medical conditions.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="faq-accordion-item">
              <Accordion.Header className="faq-accordion-header">
                How long will it take before I see results?
              </Accordion.Header>
              <Accordion.Body className="faq-accordion-body">
                Many patients start seeing results after their first treatment.
                However, more severe conditions may need weeks of care to fully
                address underlying issues. Treatment duration varies based on
                individual symptoms, so discuss your needs with Dr. Zahedi.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="faq-accordion-column">
          <Accordion>
            <Accordion.Item eventKey="3" className="faq-accordion-item">
              <Accordion.Header className="faq-accordion-header">
                How long do chiropractic treatments take?
              </Accordion.Header>
              <Accordion.Body className="faq-accordion-body">
                Treatment time varies based on your condition and commitment.
                While many patients seek quick pain relief, others continue care
                for posture correction and overall wellness, aiming for
                long-term health benefits and improved quality of life.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="faq-accordion-item">
              <Accordion.Header className="faq-accordion-header">
                What conditions can chiropractic care help with?
              </Accordion.Header>
              <Accordion.Body className="faq-accordion-body">
                Chiropractic care can address a variety of conditions, including
                back pain, neck pain, headaches, joint pain, sciatica, poor
                posture, and issues caused by muscle tension, injuries, or
                spinal misalignment. It may also assist with mobility problems
                and pain during pregnancy. The primary focus is on improving
                spinal alignment and nervous system function to promote overall
                health.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="faq-accordion-item">
              <Accordion.Header className="faq-accordion-header">
                Are spinal adjustments painful?
              </Accordion.Header>
              <Accordion.Body className="faq-accordion-body">
                ABC™ is a painless, fast method of chiropractic treatment. Some
                patients experience slight muscle soreness after adjustments,
                which typically resolves within 24 hours.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Product</h3>
          <ul className="footer-links">
            <li>Spinal Adjustments</li>
            <li>Massage Therapy</li>
            <li>Corrective Exercises</li>
            <li>Posture Assessment</li>
            <li>Wellness Advice</li>
            <li>Rehabilitation</li>
          </ul>
        </div>

 
        <div className="footer-section">
          <h3 className="footer-title">Information</h3>
          <ul className="footer-links">
            <li>FAQ</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Subscribe</h3>
          <p className="footer-description">
            Hello, we are Complete Chiropractic. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team.
          </p>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Email address"
              className="email-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-img">
          <img src={logo} />
        </div>
        <div className="footer-bottom-left">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
        <div className="footer-bottom-right">
          <span>© 2025 Complete Chiropractic. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export function AppointmentModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title>Book An Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-body">
        <form>
          <div className="custom-form-group">
            <label htmlFor="name" className="custom-label">
              Full Name
            </label>
            <input
              type="text"
              className="custom-input"
              id="name"
              placeholder="Enter your full name"
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="email" className="custom-label">
              Email address
            </label>
            <input
              type="email"
              className="custom-input"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="phone" className="custom-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="custom-input"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="custom-form-group">
            <label htmlFor="date" className="custom-label">
              Preferred Date
            </label>
            <input type="date" className="custom-input" id="date" />
          </div>
          <div className="custom-form-group">
            <label htmlFor="time" className="custom-label">
              Preferred Time
            </label>
            <input type="time" className="custom-input" id="time" />
          </div>
          <div className="custom-form-group custom-message-group">
            <label htmlFor="message" className="custom-label">
              Additional Message
            </label>
            <textarea
              className="custom-input"
              id="message"
              rows="3"
              placeholder="Any additional information"
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
          className="custom-btn-secondary"
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleClose}
          className="custom-btn-primary"
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function CustomButton({ children, onClick }) {
  return (
    <button className="custom-btn" onClick={onClick}>
      {children}
    </button>
  );
}
