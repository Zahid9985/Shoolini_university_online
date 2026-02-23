import React from 'react';
import '../styles/styles.css';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Brand Column */}
        <div className="footer-brand">
          <strong>Online Shoolini</strong>
          <p>
            Shoolini University's official online learning platform. Offering UGC-entitled,
            NAAC A+ accredited online degrees for working professionals and fresh graduates.
          </p>
          <div className="footer-social">
            <div className="social-btn"><FaFacebook />
</div>
            <div className="social-btn"><FaSquareInstagram />
</div>
            <div className="social-btn"><FaSquareXTwitter /></div>
            <div className="social-btn"><FaSquareWhatsapp />
</div>
            <div className="social-btn"><FaYoutube /></div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Programs</h4>
          <ul>
            <li><a href="#">MBA Online</a></li>
            <li><a href="#">MCA Online</a></li>
            <li><a href="#">M.Sc. Data Science</a></li>
            <li><a href="#">BBA Online</a></li>
            <li><a href="#">BCA Online</a></li>
            <li><a href="#">M.Com Online</a></li>
            <li><a href="#">B.Com Online</a></li>
          </ul>
        </div>

        {/* About Links */}
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="#">About Shoolini University</a></li>
            <li><a href="#">Rankings & Accreditations</a></li>
            <li><a href="#">Faculty</a></li>
            <li><a href="#">Placements</a></li>
            <li><a href="#">Student Life</a></li>
            <li><a href="#">News & Events</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <div className="footer-contact-item">
            <span className="icon"><FaLocationDot />
</span>
            <p>Shoolini University, Solan,<br />Himachal Pradesh 173212, India</p>
          </div>

          <div className="footer-contact-item">
            <span className="icon"><FaPhoneAlt />
</span>
            <p>
              <a href="tel:+911800000000">1800-000-0000</a><br />
              <a href="tel:+911792220000">+91-1792-220000</a>
            </p>
          </div>

          <div className="footer-contact-item">
            <span className="icon"><IoMailUnreadSharp /></span>
            <p>
              <a href="mailto:online@shooliniuniversity.com">
                online@shooliniuniversity.com
              </a>
            </p>
          </div>

          <div className="footer-contact-item">
            <span className="icon"><FaClock /></span>
            <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} This is a student portfolio project for educational purposes only. It is not the official website of Shoolini University.
            &nbsp;|&nbsp;
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</a>
            &nbsp;|&nbsp;
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms & Conditions</a>
            &nbsp;|&nbsp;
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Refund Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
