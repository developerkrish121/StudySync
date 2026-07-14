import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-section">
          <h2 className="footer-logo">StudySync</h2>

          <p className="footer-text">
            Empowering students with smarter learning, better planning,
            and seamless productivity. StudySync helps you stay organized,
            focused, and achieve your academic goals.
          </p>

          <div className="social-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>

          <ul>
            <li><a href="#">Study Planner</a></li>
            <li><a href="#">Notes</a></li>
            <li><a href="#">Task Manager</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p><FaEnvelope /> support@studysync.com</p>

          <p><FaPhoneAlt /> +91 98765 43210</p>

          <p><FaMapMarkerAlt /> India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} StudySync. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;