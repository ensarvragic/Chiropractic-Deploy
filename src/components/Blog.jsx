import "../Styles/blog.css";
import BlogImage from "../assets/blog.png";

export default function Blog({ handleShowModal }) {
  return (
    <div className="blog-section">
      <div className="blog-content">
        <h1 className="blog-title" id="blog-title">Need Help? Meet The New You Today</h1>
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
        <button 
          className="blog-consultation-btn" 
          onClick={handleShowModal} 
          aria-label="Book a consultation with Jason">
          Book A Consultation
        </button>
      </div>

      <div className="blog-video-container">
        <a 
          href="https://www.youtube.com/watch?v=XvYeHDnvfPw&t=40s" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Watch our informative video on YouTube">
          <img 
            src={BlogImage} 
            alt="Thumbnail image for blog video" 
            className="blog-image"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
}
