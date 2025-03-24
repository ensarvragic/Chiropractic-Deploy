import AboutImage from "../assets/team.png";
import AboutImage1 from "../assets/child.png";
import firstChiro from "../assets/firstChiro.png";
import secondChiro from "../assets/secondChiro.png";
import thirdChiro from "../assets/thirdChiro.png";
import fourthChiro from "../assets/fourthChiro.png";
import massageIcon from "../assets/Vector.png";
import { Icon } from "@iconify/react";
import { FaCalendarCheck, FaComment } from "react-icons/fa";
import '../Styles/about.css';

export default function About({ handleShowModal }) {
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
      <section className="section-about" aria-labelledby="about-heading">
        <h3 className="section-title">How are we Different?</h3>
        <h1 className="section-heading" id="about-heading">
          PERSONALIZED CARE I EXPERT <br />
          CHIROPRACTIC TREATMENT
        </h1>
        <p className="section-description">
          Precise chiropractic care with advanced, gentle techniques designed
          for lasting relief, improved mobility, and long-term wellness tailored
          to your needs.
        </p>
      </section>

      <div className="features-container">
        <div className="feature-card purple" aria-labelledby="male-female-chiropractors">
          <div className="icon-wrapper">
            <Icon icon="mdi:face-female" className="feature-icon" />
          </div>
          <div className="feature-content">
            <h2 className="feature-title" id="male-female-chiropractors">
              Male & Female <br /> Chiropractors
            </h2>
            <p className="feature-text">
              Offering both male and female chiropractors allows you to select a
              healthcare professional you're most comfortable with.
            </p>
          </div>
        </div>

        <div className="feature-card red" aria-labelledby="on-site-massage">
          <div className="icon-wrapper">
            <img src={massageIcon} className="feature-icon" alt="Massage Icon" />
          </div>
          <div className="feature-content">
            <h2 className="feature-title" id="on-site-massage">
              On-site Massage <br /> Therapist
            </h2>
            <p className="feature-text">
              Our skilled therapist creates a tailored experience, addressing
              specific concerns and promoting relaxation.
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
              At Complete Chiropractic, we target pain and injuries at their
              source. We take a holistic approach to help you achieve better
              health.
            </p>
          </div>
        </div>
      </div>

      <button className="about-btn" onClick={handleShowModal} aria-label="Book an appointment">
        <FaCalendarCheck style={{ marginRight: "5px" }} />
        Book An Appointment
      </button>

      <section className="about-us" aria-labelledby="about-us-title">
        <div className="about-content">
          <h3 className="about-subtitle">About Us.</h3>
          <h2 className="about-title" id="about-us-title">
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
          <a href="#learn-more" className="learn-more" aria-label="Learn more about us">
            Learn More →
          </a>
        </div>
        <div className="about-image">
          <img src={AboutImage} alt="Our Team" className="about-imgs" />
          <img src={AboutImage1} alt="Child Chiropractic Treatment" className="about-imgs" />
        </div>
      </section>

      <div className="team-container" aria-labelledby="team-title">
        <h2 className="team-title-about" id="team-title">Who We Are?</h2>
        {chiropractors.map((chiro, index) => (
          <div
            key={index}
            className={`team-card ${index % 2 === 0 ? "group-one" : "group-two"} ${index % 2 === 0 ? "left" : "right"}`}
            aria-labelledby={`team-member-${index}`}
          >
            <img src={chiro.image} alt={`Image of ${chiro.name}`} className="team-image" />
            <div className="team-info">
              <h3 className="team-name" id={`team-member-${index}`}>{chiro.name}</h3>
              <p className="team-title">{chiro.title}</p>
              <p className="team-description">{chiro.description}</p>
            </div>
          </div>
        ))}
        <button className="team-btn" onClick={handleShowModal} aria-label="Book a consultation with our team">
          Book A Consultation
          <FaComment style={{ marginLeft: "5px", marginBottom: "3px" }} />
        </button>
      </div>
    </div>
  );
}
