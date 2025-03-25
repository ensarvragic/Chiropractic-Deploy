import "../Styles/services.css";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { FaCalendarCheck } from "react-icons/fa";

export default function Services({ handleShowModal }) {
   useEffect(() => {
      const elements = document.querySelectorAll(".animate-on-scroll");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
  
      elements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  return (
    <div>
      <div className="section-services animate-on-scroll">
        <h3 className="services-title" id="services-title">How we can help you?</h3>
        <h1 className="services-heading">Our Chiropractic Services</h1>
        <p className="services-description">
          We provide targeted chiropractic care using advanced, gentle
          techniques to deliver lasting relief, enhance mobility, and support
          your overall wellness, all customized to your specific needs.
        </p>
      </div>
      <div className="services-accordion animate-on-scroll" >
        <div className="services-accordion-div">
          <Accordion aria-labelledby="services-title">
            <Accordion.Item eventKey="0" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Body Posture Improvement
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                70% of the body's energy is used to counteract gravity.
                <br />
                We treat the underlying factors contributing to poor posture and
                you may see a positive change in posture in just one visit.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Treatment of Age-Related and Mobility Issues
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                We can help you manage a range of injuries and illness, giving
                you greater mobility and the freedom to be as active as
                possible.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Upper and Lower Back Pain Treatment
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                We assess the source of your back pain and form a customized
                treatment plan.
                <br />
                Alongside traditional chiropractic treatments, you can get
                lifestyle advice that could help you take your health into your
                own hands.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Chronic Pain Relief
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                Break free from pain cycles through targeted and personalised
                treatments.
                <br />
                Our methods focus on both immediate relief and long-term
                management strategies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Improving Overall Health, Wellness, and Quality of Life
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                Regardless of where you are on your wellness journey, you can
                always get more active, sleep better, or simply feel more
                energized.
                <br />
                We develop strategies that fit your lifestyle. You can build a
                foundation for lasting wellness with us.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="services-accordion-item">
              <Accordion.Header className="services-accordion-header">
                Vertigo and Dizziness Treatment
              </Accordion.Header>
              <Accordion.Body className="services-accordion-body">
                If you feel symptoms like vertigo getting in the way when you do
                daily tasks,
                <br />
                we can assess its underlying cause and create tailored plans to
                prevent it from occurring in the future.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <button 
          className="service-btn animate-on-scroll" 
          onClick={handleShowModal} 
          aria-label="Book a chiropractic appointment">
          <FaCalendarCheck style={{ marginRight: "5px" }} />
          Book An Appointment
        </button>
      </div>
    </div>
  );
}
