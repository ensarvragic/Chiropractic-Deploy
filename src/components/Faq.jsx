import { Accordion } from "react-bootstrap";
import '../Styles/faq.css'

export default function FAQ() {
    return (
      <div className="faq-container">
        <div>
          <h3 className="faq-title" arial-level='2'>Our most asked questions.</h3>
          <h1 className="faq-heading" arial-level='1'>Frequently Asked Questions (FAQ)</h1>
        </div>
  
        <div className="faq-accordion-wrapper">
          <div className="faq-accordion-column">
            <Accordion>
              <Accordion.Item eventKey="0" className="faq-accordion-item">
                <Accordion.Header className="faq-accordion-header">
                  How does chiropractic care differ from physical therapy?
                </Accordion.Header>
                <Accordion.Body className="faq-accordion-body">
                  Chiropractic care often targets immediate pain relief and
                  long-term structural correction, while physical therapy
                  generally restores function and mobility following injury or
                  surgery.
                </Accordion.Body>
              </Accordion.Item>
  
              <Accordion.Item eventKey="1" className="faq-accordion-item">
                <Accordion.Header className="faq-accordion-header">
                  Are chiropractic treatments safe?
                </Accordion.Header>
                <Accordion.Body className="faq-accordion-body">
                  Yes, chiropractic treatments are generally safe when performed
                  by a qualified chiropractor. Side effects, such as mild soreness
                  or stiffness, are usually minimal and temporary. Chiropractors
                  are trained to assess patients carefully and avoid treatments
                  that could pose risks, especially for individuals with
                  pre-existing medical conditions.
                </Accordion.Body>
              </Accordion.Item>
  
              <Accordion.Item eventKey="2" className="faq-accordion-item">
                <Accordion.Header className="faq-accordion-header">
                  How long will it take before I see results?
                </Accordion.Header>
                <Accordion.Body className="faq-accordion-body">
                  Many patients start seeing results after their first treatment.
                  However, more severe conditions may need weeks of care to fully
                  address underlying issues. Treatment duration varies based on
                  individual symptoms, so discuss your needs with Dr. Zahedi.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
  
          <div className="faq-accordion-column">
            <Accordion>
              <Accordion.Item eventKey="3" className="faq-accordion-item">
                <Accordion.Header className="faq-accordion-header">
                  How long do chiropractic treatments take?
                </Accordion.Header>
                <Accordion.Body className="faq-accordion-body">
                  Treatment time varies based on your condition and commitment.
                  While many patients seek quick pain relief, others continue care
                  for posture correction and overall wellness, aiming for
                  long-term health benefits and improved quality of life.
                </Accordion.Body>
              </Accordion.Item>
  
              <Accordion.Item eventKey="4" className="faq-accordion-item">
                <Accordion.Header className="faq-accordion-header">
                  What conditions can chiropractic care help with?
                </Accordion.Header>
                <Accordion.Body className="faq-accordion-body">
                  Chiropractic care can address a variety of conditions, including
                  back pain, neck pain, headaches, joint pain, sciatica, poor
                  posture, and issues caused by muscle tension, injuries, or
                  spinal misalignment. It may also assist with mobility problems
                  and pain during pregnancy. The primary focus is on improving
                  spinal alignment and nervous system function to promote overall
                  health.
                </Accordion.Body>
              </Accordion.Item>
  
              <Accordion.Item eventKey="5" className="faq-accordion-item">
                <Accordion.Header className="faq-accordion-header">
                  Are spinal adjustments painful?
                </Accordion.Header>
                <Accordion.Body className="faq-accordion-body">
                  ABC™ is a painless, fast method of chiropractic treatment. Some
                  patients experience slight muscle soreness after adjustments,
                  which typically resolves within 24 hours.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }