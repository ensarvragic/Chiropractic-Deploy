import logo from '../assets/logo.png'
import '../Styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Product</h3>
          <ul className="footer-links" role='list'>
            <li aria-label="Spinal Adjustments">Spinal Adjustments</li>
            <li aria-label="Massage Therapy">Massage Therapy</li>
            <li aria-label="Corrective Exercises">Corrective Exercises</li>
            <li aria-label="Posture Assessment">Posture Assessment</li>
            <li aria-label="Wellness Advice">Wellness Advice</li>
            <li aria-label="Rehabilitation">Rehabilitation</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Information</h3>
          <ul className="footer-links">
            <li aria-label="FAQ">FAQ</li>
            <li aria-label="Blog">Blog</li>
            <li aria-label="Support">Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li aria-label="About Us">About us</li>
            <li aria-label="Careers">Careers</li>
            <li aria-label="Contact Us">Contact us</li>
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
               aria-label="Enter your email address"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-img">
          <img src={logo} alt='Complete Chiropractic logo'/>
        </div>
        <div className="footer-bottom-left">
          <span aria-label="Terms of Service">Terms</span>
          <span aria-label="Privacy Policy">Privacy</span>
          <span aria-label="Cookie Policy">Cookies</span>
        </div>
        <div className="footer-bottom-right">
          <span>© 2025 Complete Chiropractic. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
