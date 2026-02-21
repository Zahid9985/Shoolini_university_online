import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import AdmissionProcess from './components/AdmissionProcess';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import PressButton from './components/PressButton';
import ClickSpark from './components/ClickSpark';
import './styles/styles.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal  = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ClickSpark
      sparkColor="#FC3B63"
      sparkSize={12}
      sparkRadius={22}
      sparkCount={10}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <div className="App" style={{ width: '100%', overflowX: 'hidden' }}>
        <Navbar onApplyClick={openModal} />
        <Hero onApplyClick={openModal} />
        <TrustBar />
        <About />
        <Programs onApplyClick={openModal} />
        <WhyUs />
        <Testimonials />
        <AdmissionProcess onApplyClick={openModal} />
        <CTASection onApplyClick={openModal} />
        <Footer />

        {/* Sticky Mobile CTA */}
        <div className="sticky-bottom-cta">
          <PressButton className="sticky-apply-btn" onClick={openModal}>
            Apply Now — Free Counselling
          </PressButton>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </ClickSpark>
  );
}

export default App;
