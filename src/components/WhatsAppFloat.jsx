import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/styles.css';

const WhatsAppFloat = () => {
  const whatsappNumber = '919876543210'; // Replace with actual WhatsApp number
  const whatsappMessage = 'Hello! I want to know more about online programs at Shoolini University.';
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      className="whatsapp-float" 
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </button>
  );
};

export default WhatsAppFloat;
