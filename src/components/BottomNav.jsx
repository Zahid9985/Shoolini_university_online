import React from 'react';
import PressButton from './PressButton';
import '../styles/styles.css';

const BottomNav = ({ onApplyClick }) => {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav-content">
        <p className="bottom-nav-text">
          SPEAK WITH OUR ADVISOR BY CALLING
          <a className="bottom-nav-phone" href="tel:+911234567890">+91 1234567890</a>
        </p>
        <PressButton className="bottom-nav-btn" onClick={onApplyClick}>
          Apply Now
        </PressButton>
      </div>
    </div>
  );
};

export default BottomNav;
