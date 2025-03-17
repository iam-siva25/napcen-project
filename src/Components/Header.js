import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUser, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/images/Napcen-logo.png";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home" },
    {
      name: "Products",
      submenu: [
        { path: "/software", name: "Software Solutions" },
        { path: "/hardware", name: "Hardware Products" },
        { path: "/services", name: "Professional Services" },
      ],
    },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  // Handle closing dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [location]);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Napcen Logo" width="120" height="40" loading="lazy" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation Menu */}
          <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            {navItems.map((item) =>
              item.submenu ? (
                <div className="dropdown-container" ref={dropdownRef} key={item.name}>
                  <button
                    className={`nav-link dropdown-toggle ${isProductsOpen ? "active" : ""}`}
                    onClick={() => setProductsOpen(!isProductsOpen)}
                    aria-expanded={isProductsOpen}
                  >
                    {item.name} <FiChevronDown className="dropdown-icon" />
                  </button>

                  <div className={`dropdown-menu ${isProductsOpen ? "open" : ""}`}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="dropdown-item"
                        onClick={() => {
                          setProductsOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Login Button */}
            <div className="header-actions">
              <button className="auth-button" onClick={() => setLoginOpen(true)}>
                <FiUser className="auth-icon" />
                <span>Login</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* 🔐 Login Modal */}
      {isLoginOpen && (
        <div className="login-modal">
          <div className="login-container">
            <button className="close-btn" onClick={() => setLoginOpen(false)}>✖</button>
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
