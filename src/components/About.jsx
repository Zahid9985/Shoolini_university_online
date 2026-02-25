import React from 'react';
import '../styles/styles.css';
import { FaBuildingColumns } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import { FaGlobeAmericas } from "react-icons/fa";
const aboutFeatures = [
  {
    icon: <FaBuildingColumns />,
    title: 'Est. 2009',
    desc: 'Decade of academic excellence',
  },
  {
    icon: <FaGlobeAmericas />,
    title: 'Global Recognition',
    desc: 'Degree accepted worldwide',
  },
  {
    icon: <GiTeacher />,
    title: 'Expert Faculty',
    desc: '200+ distinguished professors',
  },
  {
    icon: <GiArchiveResearch />,
    title: 'Research Driven',
    desc: 'Top 100 universities in India',
  },
];

const About = () => {
  return (
    <section className="about-section circuit-wrapper">
      {/* <div className="circuit-background"></div> */}
      <div className="container">
        {/* Image */}
        <div className="about-image-wrapper">
          <img
            src="src\assets\About_img.png"
            alt="Shoolini University Campus"
          />
          <div className="about-image-badge">
            <strong>#1</strong>
            <span>Private University<br />Himachal Pradesh</span>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          <div className="section-header">
            <span className="section-tag">About Shoolini University</span>
            <h2 className="section-title">
              A Legacy of <span>Academic Excellence</span>
            </h2>
          </div>

          <p className="section-subtitle">
            Shoolini University is a NAAC A+ accredited institution consistently ranked
            among India's top universities. Our online programs bring the same quality
            education to your doorstep — anytime, anywhere.
          </p>

          <p className="section-subtitle" style={{ marginTop: '14px' }}>
            With UGC-recognized online degrees, industry-aligned curriculum, and a
            world-class learning management system, we empower working professionals
            to upskill and grow their careers without pausing their lives.
          </p>

          <div className="about-features">
            {aboutFeatures.map((feat, idx) => (
              <div className="about-feature" key={idx}>
                <span className="about-feature-icon">{feat.icon}</span>
                <div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
