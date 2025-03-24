import CustomButton from "./CustomBtn";
import chiropractor from "../assets/chiropractor1.png";
import { FaPhoneAlt } from "react-icons/fa";
import "../Styles/home.css";

export default function Home({ handleShowModal }) {
  return (
    <section className="home">
      <div className="home-content">
        {/* Preconnect to font resources - add this to your HTML head ideally */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
        
        {/* Critical content first */}
        <h1 className="lcp-heading">
          Leading Chiropractors in{" "}
          <span className="highlight">Sydney's Northern Beaches</span>
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

        {/* Stats section - now non-lazy but optimized */}
        <section className="stats">
          <div>
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>
          <div>
            <h2>1000'S</h2>
            <p>Happy Customers</p>
          </div>
          <div>
            <h2>5/5</h2>
            <p>Reviews</p>
          </div>
        </section>
      </div>

      {/* LCP Image Optimization */}
      <div className="home-img">
        <img 
          src={chiropractor} 
          alt="Chiropractic session in progress" 
          width="696"
          height="620"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}