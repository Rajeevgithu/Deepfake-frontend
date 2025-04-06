import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Stickyheader.css";

const StickyHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky-header">
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">
            <img src="/Moon.svg" alt="DeepShield Logo" className="moon-icon" />
            <span className="logo-text">DeepShield</span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/detect"
            className={`nav-link ${
              location.pathname === "/detect" ? "active" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Detect
          </Link>
          <Link
            to="/features"
            className={`nav-link ${
              location.pathname === "/features" ? "active" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default StickyHeader;
