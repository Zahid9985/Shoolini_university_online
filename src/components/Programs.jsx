import React from 'react';
import PressButton from './PressButton';
import '../styles/styles.css';
import { MdSubject } from "react-icons/md";

const programs = [
  {
    icon: <MdSubject />,
    name: 'MBA',
    tagline: 'Master of Business Administration',
    highlights: ['Marketing', 'Finance', 'HR', 'Operations', 'IT Management'],
    duration: '2 Years',
    eligibility: 'Any Graduate',
  },
  {
    icon: <MdSubject />,
    name: 'MCA',
    tagline: 'Master of Computer Applications',
    highlights: ['Data Science', 'Cloud Computing', 'Cybersecurity', 'AI/ML'],
    duration: '2 Years',
    eligibility: 'B.Sc./BCA/BIT',
  },
  {
    icon: <MdSubject />,
    name: 'M.Sc. Data Science',
    tagline: 'Master of Science in Data Science',
    highlights: ['Machine Learning', 'Python', 'Big Data', 'Analytics'],
    duration: '2 Years',
    eligibility: 'Any Science Graduate',
  },
  {
    icon: <MdSubject />,
    name: 'BBA',
    tagline: 'Bachelor of Business Administration',
    highlights: ['Entrepreneurship', 'Marketing', 'Finance', 'Leadership'],
    duration: '3 Years',
    eligibility: '10+2 Pass',
  },
  {
    icon: <MdSubject />,
    name: 'BCA',
    tagline: 'Bachelor of Computer Applications',
    highlights: ['Web Development', 'Java', 'Databases', 'Networking'],
    duration: '3 Years',
    eligibility: '10+2 Pass',
  },
  {
    icon: <MdSubject />,
    name: 'M.Com',
    tagline: 'Master of Commerce',
    highlights: ['Accounting', 'Taxation', 'Finance', 'Economics'],
    duration: '2 Years',
    eligibility: 'B.Com Graduate',
  },
];

const Programs = ({ onApplyClick }) => {
  return (
    <section className="programs-section circuit-wrapper">
      <div className="circuit-background"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Programs</span>
          <h2 className="section-title">
            Online Degree Programs <span>For Every Goal</span>
          </h2>
          <p className="section-subtitle">
            UGC-recognised, industry-aligned online programs built for working professionals
            and fresh graduates alike.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((prog, idx) => (
            <div className="program-card" key={idx}>
              <div className="program-card-header">
                <div className="program-icon">{prog.icon}</div>
                <div>
                  <h3>{prog.name}</h3>
                  <span>{prog.tagline}</span>
                </div>
              </div>
              <div className="program-card-body">
                <div className="program-highlights">
                  {prog.highlights.slice(0, 3).map((h, i) => (
                    <span key={i}>{h}</span>
                  ))}
                  {prog.highlights.length > 3 && (
                    <span>+{prog.highlights.length - 3} more</span>
                  )}
                </div>
                <div className="program-meta">
                  <div className="program-meta-item">
                    <span className="dot">⏱</span>
                    <span>{prog.duration}</span>
                  </div>
                  <div className="program-meta-item">
                    <span className="dot">📋</span>
                    <span>{prog.eligibility}</span>
                  </div>
                </div>
                <PressButton className="btn-primary" onClick={onApplyClick}>
                  Apply Now →
                </PressButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
