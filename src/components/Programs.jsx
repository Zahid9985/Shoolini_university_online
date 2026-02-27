import React from 'react';
import PressButton from './PressButton';
import '../styles/styles.css';
import artIcon from '../assets/programLogo/Arts.png';
import buisIcon from '../assets/programLogo/Business.png';
import bcaIcon from '../assets/programLogo/ComputerApplications.png';
import mbaIcon from '../assets/programLogo/MBA.png';

const programs = [
  {
    icon: mbaIcon,
    name: 'MBA',
    tagline: 'Master of Business Administration',
    highlights: ['Marketing', 'Finance', 'HR', 'Operations', 'IT Management'],
    duration: '2 Years',
    eligibility: 'Any Graduate',
  },
  {
    icon: bcaIcon,
    name: 'MCA',
    tagline: 'Master of Computer Applications',
    highlights: ['Data Science', 'Cloud Computing', 'Cybersecurity', 'AI/ML'],
    duration: '2 Years',
    eligibility: 'B.Sc./BCA/BIT',
  },
  {
    icon: artIcon,
    name: 'M.Sc. Data Science',
    tagline: 'Master of Science in Data Science',
    highlights: ['Machine Learning', 'Python', 'Big Data', 'Analytics'],
    duration: '2 Years',
    eligibility: 'Any Science Graduate',
  },
  {
    icon: buisIcon,
    name: 'BBA',
    tagline: 'Bachelor of Business Administration',
    highlights: ['Entrepreneurship', 'Marketing', 'Finance', 'Leadership'],
    duration: '3 Years',
    eligibility: '10+2 Pass',
  },
  {
    icon: bcaIcon,
    name: 'BCA',
    tagline: 'Bachelor of Computer Applications',
    highlights: ['Web Development', 'Java', 'Databases', 'Networking'],
    duration: '3 Years',
    eligibility: '10+2 Pass',
  },
  {
    icon: buisIcon,
    name: 'B.Com (Hons.)',
    tagline: 'Bachelor of Commerce (Honours)',
    highlights: ['Accounting', 'Taxation', 'Finance', 'Economics'],
    duration: '3 Years',
    eligibility: '10+2 pass',
  },
  {
  icon: artIcon,
  name: 'MA',
  tagline: 'English Literature',
  highlights: ["Literary Theory","World Literature","Critical Analysis","Academic Writing","Research Methodology"],
  duration: '2 Years',
  eligibility: 'bachelor degree',


},
{
  icon: buisIcon,
  name: 'MBA Premium',
  tagline: 'Master of Business Administration',
  highlights: ['1:1 Personal Mentorship', 'Hybrid or Flexible Learning', 'System Design'],
  duration: '2 Years',
  eligibility: 'bachelor degree',
},
{
  icon: artIcon,
  name: 'MA in Journalism & Mass Communication',
  // tagline: 'Shape Narratives, Influence Minds, Command the Media.',
  highlights: ['Media Studies', 'Reporting', 'Digital Media'],
  duration: '2 Years',
  eligibility: 'Bachelor degree',
},
];

const Programs = ({ onApplyClick }) => {
  return (
    <section className="programs-section circuit-wrapper" id="programs">
      {/* <div className="circuit-background"></div> */}
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
                <div className="program-icon">
  <img src={prog.icon} alt={prog.name} />
</div>
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
