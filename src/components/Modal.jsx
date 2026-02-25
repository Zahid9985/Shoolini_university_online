import React, { useEffect } from 'react';
import LeadForm from './LeadForm';
import '../styles/styles.css';

const Modal = ({ isOpen, onClose, onApply }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking form
      >
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* Form */}
        <LeadForm onClose={onClose} onApply={onApply} />
      </div>
    </div>
  );
};

export default Modal;
