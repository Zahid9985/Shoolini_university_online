import React from 'react';
import TextType from './TextType';
import PressButton from './PressButton';
import '../styles/styles.css';
// import callIcon from "../assets/callicon.svg";
import { IoCall } from "react-icons/io5";
import { MdSchool } from "react-icons/md";
import heroImg from "../assets/heroimg.jpeg";

const TYPED_PHRASES = [
  'Online Degrees',
  'MBA Programs',
  'MCA Courses',
  'Data Science',
  'BBA & BCA',
  'M.Com Degrees',
];

const Hero = ({ onApplyClick }) => {
  return (
  //   <div class="circuit-wrapper">
  // <div class="circuit-background"></div>
    <section className="hero">
      <div className="hero-grid"   aria-hidden="true" />
      <div className="hero-aurora" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span></span>
            Admissions Open 2025 — Limited Seats
          </div>

          <h1 className="hero-title">
            Advance Your Career with
            <br />
            <span className="hero-title-typed">
              <TextType
                text={TYPED_PHRASES}
                as="span"
                typingSpeed={60}
                deletingSpeed={35}
                pauseDuration={1800}
                loop
                showCursor
                cursorCharacter="|"
                cursorClassName="hero-cursor"
                className="hero-typed-inner"
              />
            </span>
            {' '}from
            <br />
            Shoolini University
          </h1>

          <p className="hero-subtitle">
            UGC-entitled, NAAC A+ accredited online programs designed for working
            professionals. Learn at your own pace with industry-relevant curriculum.
          </p>

          <div className="hero-stats">
            <div className="hero-stat"><strong>30,000+</strong><small className='hero-state-small'>Students Enrolled</small></div>
            <div className="hero-stat"><strong>95%</strong><small className='hero-state-small'>Placement Rate</small></div>
            <div className="hero-stat"><strong>20+</strong><small className='hero-state-small'>Online Programs</small></div>
            <div className="hero-stat"><strong>NAAC A+</strong><small className='hero-state-small'>Accredited</small></div>
          </div>

          <div className="hero-actions">
            <PressButton className="btn-primary hero-apply-btn" onClick={onApplyClick}>
              <MdSchool /> Apply Now — It's Free
            </PressButton>
            <PressButton className="btn-secondary hero-call-btn" href="tel:+911800000000" as="a">
             <IoCall className="call-icon" /> Speak to Counsellor
            </PressButton>
          </div>

          <div className="hero-accreditations">
            <p>Recognized by</p>
            <div className="accred-badges">
              <span className="accred-badge">UGC</span>
              <span className="accred-badge">NAAC A+</span>
              <span className="accred-badge">NIRF</span>
              <span className="accred-badge">AIU</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={heroImg}
            alt="Shoolini University Campus"
            className="hero-university-img"
          />
          <div className="hero-img-badge hero-img-badge--top">
            <span className="badge-icon">🏆</span>
            <div><strong>NAAC A+</strong><small>Accredited University</small></div>
          </div>
          <div className="hero-img-badge hero-img-badge--bottom">
            <span className="badge-icon"><MdSchool /></span>
            <div><strong>UGC Recognised</strong><small>Government Approved</small></div>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default Hero;

