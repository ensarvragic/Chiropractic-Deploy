import { useEffect } from "react";
import AboutImage from "../assets/team-min.png";
import AboutImage1 from "../assets/child-min.png";
import firstChiro from "../assets/firstChiro-min.png";
import secondChiro from "../assets/secondChiro-min.png";
import thirdChiro from "../assets/thirdChiro-min.png";
import fourthChiro from "../assets/fourthChiro-min.png";
import massageIcon from "../assets/Vector.png";
import { Icon } from "@iconify/react";
import { FaCalendarCheck, FaComment } from "react-icons/fa";
import "../Styles/about.css";

export default function About({ handleShowModal }) {
  const chiropractors = [
    {
      name: "Dr. HOOMAN ZAHEDI",
      title: "Chiropractor",
      description:
        "After qualifying as a chiropractor at Macquarie University, Hooman travelled to the UK...",
      image: firstChiro,
    },
    {
      name: "Dr. JASON WHEALING",
      title: "Chiropractor",
      description:
        "Jason enters his 7th year as Chiropractor at our Dee Why clinic...",
      image: secondChiro,
    },
    {
      name: "Dr. CHRISTINE MARTIN",
      title: "Chiropractor",
      description:
        "After qualifying as a chiropractor at Macquarie University, Christine travelled to the UK...",
      image: thirdChiro,
    },
    {
      name: "Dr. SONYA",
      title: "Chiropractor",
      description:
        "Jason enters his 7th year as Chiropractor at our Dee Why clinic...",
      image: fourthChiro,
    },
  ];

  // 👇 Animacija on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about">
<<<<<<< HEAD
      <section className="section-about animate-on-scroll" aria-labelledby="about-heading">
=======
      <section
        className="section-about animate-on-scroll"
        aria-labelledby="about-heading"
      >
>>>>>>> origin
        <h3 className="section-title">How are we Different?</h3>
        <h1 className="section-heading" id="about-heading">
          PERSONALIZED CARE I EXPERT <br />
          CHIROPRACTIC TREATMENT
        </h1>
        <p className="section-description">
          Precise chiropractic care with advanced, gentle techniques...
        </p>
      </section>

      <div className="features-container animate-on-scroll">
<<<<<<< HEAD
        <div className="feature-card purple" aria-labelledby="male-female-chiropractors">
=======
        <div
          className="feature-card purple"
          aria-labelledby="male-female-chiropractors"
        >
>>>>>>> origin
          <div className="icon-wrapper">
            <Icon icon="mdi:face-female" className="feature-icon" />
          </div>
          <div className="feature-content">
            <h2 className="feature-title" id="male-female-chiropractors">
              Male & Female <br /> Chiropractors
            </h2>
            <p className="feature-text">
<<<<<<< HEAD
              Offering both male and female chiropractors...
=======
              Offering both male and female chiropractors, we provide
              personalized care for pain relief, mobility, and overall
              well-being. Whether for back pain, sports injuries, or posture
              correction, our team is here to help.
>>>>>>> origin
            </p>
          </div>
        </div>

        <div className="feature-card red" aria-labelledby="on-site-massage">
          <div className="icon-wrapper">
<<<<<<< HEAD
            <img src={massageIcon} className="feature-icon" alt="Massage Icon" loading="lazy" />
=======
            <img
              src={massageIcon}
              className="feature-icon"
              alt="Massage Icon"
              loading="lazy"
            />
>>>>>>> origin
          </div>
          <div className="feature-content">
            <h2 className="feature-title" id="on-site-massage">
              On-site Massage <br /> Therapist
            </h2>
            <p className="feature-text">
<<<<<<< HEAD
              Our skilled therapist creates a tailored experience...
=======
              Our skilled therapist provides a personalized on-site massage
              experience, promoting relaxation, pain relief, and improved
              overall well-being in a comfortable setting.
>>>>>>> origin
            </p>
          </div>
        </div>

        <div className="feature-card dark-purple" aria-labelledby="pain-relief">
          <div className="icon-wrapper">
            <Icon icon="solar:running-bold" className="feature-icon" />
          </div>
          <div className="feature-content">
            <h2 className="feature-title" id="pain-relief">
              We can reduce pain <br /> in just one visit
            </h2>
            <p className="feature-text">
<<<<<<< HEAD
              At Complete Chiropractic, we target pain and injuries at their source...
=======
              At Complete Chiropractic, we target pain and injuries at their
              source, providing effective treatments that address the root
              cause, not just the symptoms. Our approach focuses on long-term
              relief and improved mobility for a healthier, pain-free lifestyle.
>>>>>>> origin
            </p>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <button className="about-btn animate-on-scroll" onClick={handleShowModal} aria-label="Book an appointment">
=======
      <button
        className="about-btn animate-on-scroll"
        onClick={handleShowModal}
        aria-label="Book an appointment"
      >
>>>>>>> origin
        <FaCalendarCheck style={{ marginRight: "5px" }} />
        Book An Appointment
      </button>

<<<<<<< HEAD
      <section className="about-us animate-on-scroll" aria-labelledby="about-us-title">
=======
      <section
        className="about-us animate-on-scroll"
        aria-labelledby="about-us-title"
      >
>>>>>>> origin
        <div className="about-content">
          <h3 className="about-subtitle">About Us.</h3>
          <h2 className="about-title" id="about-us-title">
            The Northern Beaches' Most Trusted Chiropractors
          </h2>
          <p className="about-text">
            As the leading chiropractic clinic in Sydney’s Northern Beaches...
          </p>
          <p className="about-text">
<<<<<<< HEAD
            At Complete Chiropractic, we target pain and injuries at their source...
=======
            At Complete Chiropractic, we target pain and injuries at their
            source...
>>>>>>> origin
          </p>
          <a
            href="#learn-more"
            className="learn-more"
            aria-label="Learn more about us"
          >
            Learn More →
          </a>
        </div>
        <div className="about-image">
<<<<<<< HEAD
          <img src={AboutImage} alt="Our Team" className="about-imgs" loading="lazy" />
          <img src={AboutImage1} alt="Child Chiropractic Treatment" className="about-imgs" loading="lazy" />
        </div>
      </section>

      <div className="team-container animate-on-scroll" aria-labelledby="team-title">
        <h2 className="team-title-about" id="team-title">Who We Are?</h2>
=======
          <img
            src={AboutImage}
            alt="Our Team"
            className="about-imgs"
            loading="lazy"
          />
          <img
            src={AboutImage1}
            alt="Child Chiropractic Treatment"
            className="about-imgs"
            loading="lazy"
          />
        </div>
      </section>

      <div
        className="team-container animate-on-scroll"
        aria-labelledby="team-title"
      >
        <h2 className="team-title-about" id="team-title">
          Who We Are?
        </h2>
>>>>>>> origin
        {chiropractors.map((chiro, index) => (
          <div
            key={index}
            className={`team-card ${
              index % 2 === 0 ? "group-one" : "group-two"
            } ${index % 2 === 0 ? "left" : "right"}`}
            aria-labelledby={`team-member-${index}`}
          >
<<<<<<< HEAD
            <img src={chiro.image} alt={`Image of ${chiro.name}`} className="team-image" loading="lazy" />
=======
            <img
              src={chiro.image}
              alt={`Image of ${chiro.name}`}
              className="team-image"
              loading="lazy"
            />
>>>>>>> origin
            <div className="team-info">
              <h3 className="team-name" id={`team-member-${index}`}>
                {chiro.name}
              </h3>
              <p className="team-title">{chiro.title}</p>
              <p className="team-description">{chiro.description}</p>
            </div>
          </div>
        ))}
<<<<<<< HEAD
        <button className="team-btn animate-on-scroll" onClick={handleShowModal} aria-label="Book a consultation with our team">
=======
        <button
          className="team-btn animate-on-scroll"
          onClick={handleShowModal}
          aria-label="Book a consultation with our team"
        >
>>>>>>> origin
          Book A Consultation
          <FaComment style={{ marginLeft: "5px", marginBottom: "3px" }} />
        </button>
      </div>
    </div>
  );
}
