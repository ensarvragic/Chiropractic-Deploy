import logo from '../assets/logo.png'
import '../Styles/footer.css'

export default function Footer() {
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
