import React, { useState, useEffect } from 'react';
import PressButton from './PressButton';
import '../styles/styles.css';
import navImg from "../assets/logo.png"

const Navbar = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'programs'];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-logo">
          <img src={navImg} alt="Online Shoolini Logo" className="navbar-logo-img" />
        </div>
        <div className="navbar-links" role="navigation" aria-label="Main">
          <button
            type="button"
            className={`navbar-link ${activeSection === 'home' ? 'is-active' : ''}`}
            onClick={() => handleNavClick('home')}
            aria-current={activeSection === 'home' ? 'page' : undefined}
          >
            Home
          </button>
          <button
            type="button"
            className={`navbar-link ${activeSection === 'programs' ? 'is-active' : ''}`}
            onClick={() => handleNavClick('programs')}
            aria-current={activeSection === 'programs' ? 'page' : undefined}
          >
            Programs
          </button>
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
