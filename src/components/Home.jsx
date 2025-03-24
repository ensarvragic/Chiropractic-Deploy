import CustomButton from "./CustomBtn";
import chiropractor from "../../public/assets/chiropractor1.webp";
import { FaPhoneAlt } from "react-icons/fa";
import "../Styles/home.css";

export default function Home({ handleShowModal }) {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          Leading Chiropractors in{" "}
          <span className="highlight">Sydney’s Northern Beaches</span>
        </h1>
        <p className="home-text">
          Feel better after your first session with pioneers of Advanced
          Biostructural Correction, trusted for over 15 years.
        </p>
        <div className="buttons">
          <CustomButton onClick={handleShowModal} aria-label="Schedule a call">
            SCHEDULE A CALL
            <FaPhoneAlt style={{ marginLeft: "10px" }} />
          </CustomButton>
          <button className="btn-secondary" aria-label="See how it works">
            See How it Works
          </button>
        </div>
        <section className="stats">
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

      <div className="home-img">
        <img
          src={chiropractor}
          alt="Chiropractic session in progress"
          width="696"
          height="620"
          fetchPriority="high" // ✅ prioritet učitavanja
        />
      </div>
    </section>
  );
}
