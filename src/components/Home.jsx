import CustomButton from "./CustomBtn";
import { FaPhoneAlt } from "react-icons/fa";
import chiropractor from '../assets/chiropractor1.webp'
import "../Styles/home.css";
import chiropractor1 from '../assets/chiropractor1.png'

export default function Home({ handleShowModal }) {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="fade-slide-up">
          Leading Chiropractors in{" "}
          <span className="highlight">Sydney’s Northern Beaches</span>
        </h1>
        <p className="home-text fade-slide-up delay-1">
          Feel better after your first session with pioneers of Advanced
          Biostructural Correction, trusted for over 15 years.
        </p>
        <div className="buttons fade-slide-up delay-2">
          <CustomButton onClick={handleShowModal} aria-label="Schedule a call">
            SCHEDULE A CALL
            <FaPhoneAlt style={{ marginLeft: "10px" }} />
          </CustomButton>
          <button className="btn-secondary" aria-label="See how it works">
            See How it Works
          </button>
        </div>
        <section className="stats fade-slide-up delay-3">
          <div className="stat-item">
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h2>1000'S</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h2>5/5</h2>
            <p>Reviews</p>
          </div>
        </section>
      </div>

      <div className="home-img fade-slide-up delay-2">
        <img
          src={chiropractor1}
          alt="Chiropractic session in progress"
          width="696"
          height="620"
<<<<<<< HEAD
          fetchpriority="high"
=======
          fetchPriority="high"
>>>>>>> origin
        />
      </div>
    </section>
  );
}
