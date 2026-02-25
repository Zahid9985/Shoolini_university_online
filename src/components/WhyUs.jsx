import React from 'react';
import '../styles/styles.css';
import { PiPersonSimpleHikeBold } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { SiHomepage } from "react-icons/si";
import { FaGlobeAmericas } from "react-icons/fa";

const reasons = [
  {
    icon: <PiPersonSimpleHikeBold />,
    title: 'NAAC A+ Accredited',
    desc: 'Only accredited online university offering degrees with global recognition and industry trust.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Learn Anytime, Anywhere',
    desc: 'Access lectures, materials, and exams from your smartphone, tablet, or laptop — 24/7.',
  },
  {
    icon: <PiStudentFill />,
    title: 'UGC Recognised Degree',
    desc: 'Degrees entitled by UGC, holding the same value as a regular on-campus degree.',
  },
  {
    icon: <GiTeacher />,
    title: 'Industry Mentorship',
    desc: 'Learn from 500+ industry experts and get mentored by top corporate leaders.',
  },
  {
    icon: <FaMoneyBill1Wave />,
    title: 'Affordable EMI Options',
    desc: 'Flexible fee structure with 0% EMI, scholarships, and easy financing for all students.',
  },
  {
    icon: <FaHandshake />,
    title: '95% Placement Rate',
    desc: 'Dedicated placement cell with 500+ hiring partners ensuring your career success.',
  },
  {
    icon: <SiHomepage />,
    title: 'Same Degree, Online',
    desc: 'Receive the same degree certificate as regular students — no distinction mentioned.',
  },
  {
    icon: <FaGlobeAmericas />,
    title: 'Global Peer Network',
    desc: 'Connect with 30,000+ students and alumni from 40+ countries worldwide.',
  },
];

const WhyUs = () => {
  return (
    <section className="why-section circuit-wrapper">
      {/* <div className="circuit-background"></div> */}
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            Why <span>Shoolini Online</span> is Your Best Choice
          </h2>
          <p className="section-subtitle">
            We combine academic rigour with flexible learning to deliver an education
            experience built for the future of work.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
