import '../Styles/modal.css'
import { Modal, Button } from "react-bootstrap";

export default function AppointmentModal({ show, handleClose }) {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title>Book An Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <form>
            <div className="custom-form-group">
              <label htmlFor="name" className="custom-label">
                Full Name
              </label>
              <input
                type="text"
                className="custom-input"
                id="name"
                placeholder="Enter your full name"
              />
            </div>
            <div className="custom-form-group">
              <label htmlFor="email" className="custom-label">
                Email address
              </label>
              <input
                type="email"
                className="custom-input"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="custom-form-group">
              <label htmlFor="phone" className="custom-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="custom-input"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="custom-form-group">
              <label htmlFor="date" className="custom-label">
                Preferred Date
              </label>
              <input type="date" className="custom-input" id="date" />
            </div>
            <div className="custom-form-group">
              <label htmlFor="time" className="custom-label">
                Preferred Time
              </label>
              <input type="time" className="custom-input" id="time" />
            </div>
            <div className="custom-form-group custom-message-group">
              <label htmlFor="message" className="custom-label">
                Additional Message
              </label>
              <textarea
                className="custom-input"
                id="message"
                rows="3"
                placeholder="Any additional information"
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="custom-btn-secondary"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            className="custom-btn-primary"
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }