import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const AdmissionPopup = ({ onApplyClick }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 17,
    hours: 5,
    minutes: 31,
    seconds: 59
  });

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          // Reset to initial values
          return { days: 17, hours: 5, minutes: 31, seconds: 59 };
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleToggle = () => {
    if (isExpanded) {
      setIsClosing(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsClosing(false);
      }, 200);
    } else {
      setIsExpanded(true);
    }
  };

  const handleApplyClick = () => {
    if (onApplyClick) {
      onApplyClick();
    }
  };

  return (
    <>
      {/* Collapsed Arrow Button */}
      {!isExpanded && !isClosing && (
        <button 
          className="admission-arrow-btn" 
          onClick={handleToggle}
          aria-label="Open Admission Popup"
        >
          <span className="arrow-icon">◀</span>
        </button>
      )}

      {/* Expanded Popup */}
      {isExpanded && (
        <div className={`admission-popup ${isClosing ? 'is-collapsing' : ''}`}>
          <button 
            className="admission-popup-close" 
            onClick={handleToggle}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="admission-popup-content">
            <h3 className="admission-popup-title">Admissions Closing!</h3>
            <p className="admission-popup-hurry">HURRY UP!</p>
            
            <div className="admission-countdown">
              <div className="countdown-box countdown-days">
                <span className="countdown-value">{timeLeft.days}d</span>
              </div>
              <div className="countdown-box countdown-hours">
                <span className="countdown-value">{timeLeft.hours}h</span>
              </div>
              <div className="countdown-box countdown-minutes">
                <span className="countdown-value">{timeLeft.minutes}m</span>
              </div>
              <div className="countdown-box countdown-seconds">
                <span className="countdown-value">{timeLeft.seconds}s</span>
              </div>
            </div>
            
            <button className="admission-apply-btn" onClick={handleApplyClick}>
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdmissionPopup;
