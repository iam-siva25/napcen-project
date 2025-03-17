import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Napcen. All rights reserved.</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook"><FiFacebook /></a>
          <a href="#" aria-label="Twitter"><FiTwitter /></a>
          <a href="#" aria-label="Instagram"><FiInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
