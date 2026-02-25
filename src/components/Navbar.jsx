import React from 'react';
import PressButton from './PressButton';
import '../styles/styles.css';
import navImg from "../assets/logo.png"

const Navbar = ({ onApplyClick }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src={navImg} alt="Online Shoolini Logo" className="navbar-logo-img" />
        </div>
        <div className="navbar-cta">
          <PressButton className="btn-primary" onClick={onApplyClick}>
            Apply Now →
          </PressButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
