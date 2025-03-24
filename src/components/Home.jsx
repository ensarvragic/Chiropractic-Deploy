import CustomButton from './CustomBtn';
import chiropractor from '../assets/chiropractor1.png';
import { FaPhoneAlt } from "react-icons/fa";
import '../Styles/home.css';



export default function Home({ handleShowModal }) {
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