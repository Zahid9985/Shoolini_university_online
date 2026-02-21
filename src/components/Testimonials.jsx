import React from 'react';
import '../styles/styles.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'MBA Graduate, 2024 | Marketing Manager',
    initials: 'PS',
    text: 'The online MBA from Shoolini completely transformed my career. The curriculum is updated, faculty is responsive, and the placement support is outstanding. Got placed at a Fortune 500 company!',
    stars: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'MCA Graduate, 2023 | Software Engineer',
    initials: 'RM',
    text: "As a working professional, flexibility was everything for me. Shoolini's online MCA program let me learn at my own pace. The live sessions and recorded lectures are super helpful.",
    stars: 5,
  },
  {
    name: 'Ananya Singh',
    role: 'M.Sc. Data Science | Data Analyst',
    initials: 'AS',
    text: "I was skeptical about online degrees but Shoolini proved me wrong. The Data Science program has hands-on projects, industry case studies, and real mentors. Best investment of my career!",
    stars: 5,
  },
  {
    name: 'Vikram Nair',
    role: 'BBA Graduate | Entrepreneur',
    initials: 'VN',
    text: 'Coming from Kerala, I could never have attended a university in Himachal Pradesh. The online program brought world-class education to my doorstep. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Sneha Patel',
    role: 'M.Com Graduate | CA Aspirant',
    initials: 'SP',
    text: 'The M.Com curriculum at Shoolini Online is extremely comprehensive. The taxation and accounting modules are very practical. UGC recognition was the deciding factor for me.',
    stars: 5,
  },
  {
    name: 'Arjun Kapoor',
    role: 'BCA Student | Freelance Developer',
    initials: 'AK',
    text: 'I started freelancing while studying BCA at Shoolini Online. The tech skills I gained from the program helped me build real projects and earn. Great balance of theory and practice.',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section circuit-wrapper">
        <div className="circuit-background"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Student Stories</span>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Real experiences from real students who transformed their careers with
            Shoolini Online degrees.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-stars">
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div className="author-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
