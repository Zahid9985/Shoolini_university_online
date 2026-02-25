import React from 'react';
import PressButton from './PressButton';
import '../styles/styles.css';

const steps = [
  {
    number: '01',
    title: 'Fill the Form',
    desc: 'Submit your basic details through the online application form on this page.',
  },
  {
    number: '02',
    title: 'Get Counselled',
    desc: 'Our expert counsellor will call you to guide you through program selection.',
  },
  {
    number: '03',
    title: 'Pay & Enroll',
    desc: 'Complete fee payment through secure online gateway with EMI options.',
  },
  {
    number: '04',
    title: 'Start Learning',
    desc: 'Access your LMS dashboard, join live classes and begin your journey!',
  },
];

const AdmissionProcess = ({ onApplyClick }) => {
  return (
    <section className="process-section circuit-wrapper">
        {/* <div className="circuit-background"></div> */}

      <div className="container">
        <div className="section-header">
          <span className="section-tag">Admission Process</span>
          <h2 className="section-title">
            Get Enrolled in <span>4 Simple Steps</span>
          </h2>
          <p className="section-subtitle">
            Our streamlined admission process ensures you can start your online
            education journey without any hassle.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, idx) => (
            <div className="process-step" key={idx}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <PressButton className="btn-primary" onClick={onApplyClick} style={{ fontSize: '16px', padding: '16px 48px' }}>
            Start Your Application Now →
          </PressButton>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
