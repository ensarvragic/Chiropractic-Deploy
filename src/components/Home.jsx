import { memo } from "react";
import chiropractor from '../../public/assets/chiropractor1.webp'
import CustomButton from "./CustomBtn";
import { FaPhoneAlt } from "react-icons/fa";
import "../Styles/home.css";

const Home = ({ handleShowModal }) => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          Leading Chiropractors in{" "}
          <span className="highlight">Sydney's Northern Beaches</span>
        </h1>
        <p>
          Feel better after your first session with pioneers of Advanced
          Biostructural Correction.
        </p>
        
        <div className="buttons">
          <CustomButton onClick={handleShowModal}>
            SCHEDULE A CALL
            <FaPhoneAlt style={{ marginLeft: "10px" }} />
          </CustomButton>
          <button className="btn-secondary">See How it Works</button>
        </div>
        
        <section className="stats">
          {[
            ["15+", "Years Experience"],
            ["1000'S", "Happy Customers"],
            ["5/5", "Reviews"]
          ].map(([value, label], index) => (
            <div key={index} className="stat-item">
              <h2>{value}</h2>
              <p>{label}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Critical LCP image - optimized */}
      <div className="home-img">
        <img
          src={chiropractor}
          alt="Chiropractic session"
          width="696"
          height="620"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default memo(Home);