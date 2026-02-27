import React, { useState } from 'react';
import PressButton from './PressButton';
import '../styles/styles.css';

const LeadForm = ({ onApply }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    course: '',
    state: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log('Form submitted:', formData);
  //   setSubmitted(true);
  // };
  const handleSubmit = (e) => {
  e.preventDefault();

  console.log('Form submitted:', formData);

  if (onApply) {
    onApply();   // tells App.jsx user has applied
  }

  setSubmitted(true);
};

  if (submitted) {
    return (
      <div className="hero-form-card" style={{ textAlign: 'center', padding: '48px 30px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
        <h3 className="form-card-title">Application Submitted!</h3>
        <p className="form-card-sub" style={{ marginBottom: 0 }}>
          Our counsellor will call you within 24 hours. Check your email for further details.
        </p>
      </div>
    );
  }

  return (
    <div className="hero-form-card">
      <h3 className="form-card-title">Apply for Admission 2025</h3>
      <p className="form-card-sub">Get free counselling from our experts</p>

      <div className="form-security-notice">
        🔒 Your information is 100% secure. No spam, ever.
        <br />
        <small>By submitting you agree to our Privacy Policy & Terms</small>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number *</label>
          <div className="form-phone">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+971">+971</option>
              <option value="+65">+65</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Enter mobile number"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Select Program *</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Program --</option>
            <option value="mba">MBA (Online)</option>
            <option value="bba">BBA (Online)</option>
            <option value="mca">MCA (Online)</option>
            <option value="bca">BCA (Online)</option>
            <option value="msc_data_science">M.Sc. Data Science</option>
            <option value="ma">MA (Online)</option>
            <option value="mcom">M.Com (Online)</option>
            <option value="bcom">B.Com (Online)</option>
          </select>
        </div>

        <div className="form-group">
          <label>State *</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">-- Select State --</option>
            <option value="delhi">Delhi</option>
            <option value="himachal">Himachal Pradesh</option>
            <option value="punjab">Punjab</option>
            <option value="haryana">Haryana</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="karnataka">Karnataka</option>
            <option value="up">Uttar Pradesh</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="tamilnadu">Tamil Nadu</option>
            <option value="wb">West Bengal</option>
            <option value="other">Other</option>
          </select>
        </div>

        <PressButton type="submit" className="form-submit-btn">
          Apply Now — It's Free!
        </PressButton>
      </form>
    </div>
  );
};

export default LeadForm;
