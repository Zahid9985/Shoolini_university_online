
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import AdmissionProcess from './components/AdmissionProcess';
// import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import PressButton from './components/PressButton';
import AdmissionPopup from './components/AdmissionPopup';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollReveal from './components/ScrollReveal';
import BottomNav from './components/BottomNav';
import FAQ from './components/FAQ';
// import ClickSpark from './components/ClickSpark';
import './styles/styles.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const intervalRef = useRef(null);

  const openModal  = () => setIsModalOpen(true);

  useEffect(() => {
    const hasApplied = localStorage.getItem("hasApplied");

    if (!hasApplied) {
      // Initial popup after 10 seconds
      const initialTimer = setTimeout(() => {
        setIsModalOpen(true);
      }, 10000);

      return () => {
        clearTimeout(initialTimer);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);

    const hasApplied = localStorage.getItem("hasApplied");

    if (!hasApplied) {
      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      // Set up recurring popup every 2 minutes
      intervalRef.current = setInterval(() => {
        setIsModalOpen(true);
      }, 120000); // 2 minutes
    }
  };

  const handleApply = () => {
    localStorage.setItem("hasApplied", "true");
    setIsModalOpen(false);
    
    // Clear the interval when user applies
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    // <ClickSpark
    //   sparkColor="#FC3B63"
    //   sparkSize={12}
    //   sparkRadius={22}
    //   sparkCount={10}
    //   duration={500}
    //   easing="ease-out"
    //   extraScale={1.2}
    // >
      <div className="App" style={{ width: '100%', overflowX: 'hidden' }}>
        <Navbar onApplyClick={openModal} />
        <Hero onApplyClick={openModal} />
        
        <ScrollReveal>
          <TrustBar />
        </ScrollReveal>
        
        <ScrollReveal>
          <About />
        </ScrollReveal>
        
        <ScrollReveal>
          <Programs onApplyClick={openModal} />
        </ScrollReveal>
        
        <ScrollReveal>
          <WhyUs />
        </ScrollReveal>
        
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        
        <ScrollReveal>
          <AdmissionProcess onApplyClick={openModal} />
        </ScrollReveal>

        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
        
        {/* <ScrollReveal>
          <CTASection onApplyClick={openModal} />
        </ScrollReveal> */}
        
        <Footer />

        {/* Sticky Mobile CTA
        <div className="sticky-bottom-cta">
          <PressButton className="sticky-apply-btn" onClick={openModal}>
            Apply Now — Free Counselling
          </PressButton>
        </div> */}

        <Modal 
  isOpen={isModalOpen} 
  onClose={handleClose} 
  onApply={handleApply} 
/>
        
        {/* Floating Components */}
        <AdmissionPopup onApplyClick={openModal} />
        <WhatsAppFloat />

        <BottomNav onApplyClick={openModal} />
      </div>
  );
}

export default App;
