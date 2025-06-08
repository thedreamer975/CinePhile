import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Logo" />
          <p>Your ultimate movie booking experience</p>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="">Terms</a>
          <a href="">Privacy</a>
        </div>
      </div>
      <div className="footer-copyright">
        © 2025 Cinephile. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 