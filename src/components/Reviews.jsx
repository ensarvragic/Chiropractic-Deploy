import Recension from "../assets/recensionn.png";
import { ImQuotesLeft } from "react-icons/im";
import '../Styles/review.css';
import { FaComment } from "react-icons/fa";

export default function Reviews({ handleShowModal }) {
  return (
    <section className="testimonials-container">
      <h2>Testimonials</h2>
      <h1>What Our Customers Have To Say About Our Work</h1>

      <a
        href="https://www.thepeoplesreview.ie/"
        className="reviews-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read more reviews on The People's Review"
      >
        <img 
          src={Recension} 
          alt="Customer testimonials collage"
          className="testimonial-image"
        />
      </a>

      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="quote-icon">
            <ImQuotesLeft />
          </div>
          <h3 className="testimonial-heading">Knowledgeable</h3>
          <blockquote>
            <p>
              I cannot recommend this chiropractor enough! From the moment I
              walked in, I was welcomed with warmth and professionalism. The
              doctor took the time to understand my specific concerns and tailored
              the treatment accordingly. I felt a noticeable improvement after
              just one session, and with each visit, my mobility and overall
              well-being continued to improve. The office is well-maintained, the
              staff is incredibly friendly, and the entire experience is nothing
              short of outstanding. If you're looking for a skilled,
              knowledgeable, and genuinely caring chiropractor, this is the place
              to go! Thanks 😊
            </p>
          </blockquote>
          <strong>- Scott</strong>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">
            <ImQuotesLeft />
          </div>
          <h3>Professional</h3>
          <blockquote>
            <p>
              My experience at this chiropractic clinic has been nothing but
              positive. Not only did the treatment help relieve my chronic back
              pain, but the chiropractor also provided valuable advice on posture,
              daily exercises, and lifestyle changes that have made a real
              difference in my health. The holistic approach here is what truly
              sets them apart—it's not just about quick fixes but long-term
              well-being. The professionalism, expertise, and friendly atmosphere
              make every visit enjoyable. I can confidently say that my quality of
              life has improved tremendously thanks to their care! Thanks 😊
            </p>
          </blockquote>
          <strong>- Matt</strong>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">
            <ImQuotesLeft />
          </div>
          <h3>Amazing Work</h3>
          <blockquote>
            <p>
              I had been struggling with neck and shoulder pain for months before
              I found this chiropractor, and I only wish I had come sooner! Every
              appointment is a pleasant experience, from the welcoming front desk
              staff to the thorough and effective treatments. The chiropractor
              takes the time to explain each step and ensures that I feel
              comfortable throughout the process. What truly impressed me was the
              personalized approach—no one-size-fits-all solutions, just dedicated
              care tailored to my needs. If you're looking for someone who is not
              only highly skilled but also compassionate and attentive, look no
              further. This place is a game-changer! Thanks 😊
            </p>
          </blockquote>
          <strong>- Rabecca</strong>
        </div>
      </div>

      <button className="consultation-button" onClick={handleShowModal}>
        Book A Consultation
        <FaComment style={{ marginLeft: "5px", marginBottom: "5px" }} />
      </button>
    </section>
  );
}
