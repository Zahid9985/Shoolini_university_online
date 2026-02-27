import React, { useState } from 'react';
import '../styles/styles.css';

const FAQ_ITEMS = [
  {
    question: 'How do I apply for admission?',
    answer: 'Click the Apply Now button and fill out the form. Our counsellor will contact you within 24 hours.'
  },
  {
    question: 'Are the online programs UGC approved?',
    answer: 'Yes. All online programs are UGC-entitled and designed to meet regulatory standards.'
  },
  {
    question: 'Can I study while working full-time?',
    answer: 'Absolutely. The programs are flexible and self-paced, so you can learn alongside your job.'
  },
  {
    question: 'What support will I get after applying?',
    answer: 'You will receive guidance from admission advisors, onboarding help, and academic support throughout.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="section-tag">FAQs</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know before applying.</p>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer" aria-hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
