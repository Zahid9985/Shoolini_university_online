import React, { useEffect, useState } from "react";

const AutoFormPopup = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const hasApplied = localStorage.getItem("hasApplied");

    if (!hasApplied) {
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("hasApplied", "true");
    setShowForm(false);
  };

  if (!showForm) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AutoFormPopup;