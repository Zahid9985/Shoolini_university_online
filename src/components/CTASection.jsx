import React from 'react';
import PressButton from './PressButton';
import '../styles/styles.css';
import { PiMicrophoneStageFill } from "react-icons/pi";

const CTASection = ({ onApplyClick }) => {
  return (
    <section className="cta-section circuit-wrapper">
        <div className="circuit-background"></div>

      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <h2> <PiMicrophoneStageFill /> Don't Miss the 2025 Admission Deadline!</h2>
            <p>
              Seats are filling fast. Apply today and get ₹10,000 off on your first semester fee.
              Scholarships available for meritorious students.
            </p>
          </div>
          <div className="cta-actions">
            <PressButton className="btn-primary" onClick={onApplyClick} style={{ fontSize: '16px', padding: '16px 36px' }}>
              Apply for Free Now
            </PressButton>
            <div className="cta-phone">
              <span>📞 Call Us:</span>
              <PressButton as="a" href="tel:+911800000000" className="cta-phone-link">
                1800-000-0000
              </PressButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
