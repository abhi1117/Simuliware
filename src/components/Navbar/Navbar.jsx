import React, { useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const { pathname } = useLocation(); // Get current path

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false); // Close other dropdown
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    setShowDropdown1(false); // Close other dropdown
  };

  // Function to scroll window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" className="nav-link" onClick={scrollToTop}>
          Simuliware
        </Link>
      </div>

      {/* Navigation Menu */}
      <ul className="nav-menu">
        {/* Home */}
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            onClick={() => {
              setShowDropdown1(false);
              scrollToTop();
            }}
          >
            Home
          </Link>
        </li>

        {/* About Dropdown */}
        <li
          className="nav-item"
          onMouseEnter={toggleDropdown1}
          onMouseLeave={toggleDropdown1}
        >
          <a href="#">About</a>
          {showDropdown1 && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/about/team" onClick={() => setShowDropdown1(false)}>
                  Team
                </Link>
              </li>
              <li className="dropdown-item">
                <Link
                  to="/about/overview"
                  onClick={() => setShowDropdown1(false)}
                >
                  Overview
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Services Dropdown */}
        <li
          className="nav-item"
          onMouseEnter={toggleDropdown2}
          onMouseLeave={toggleDropdown2}
        >
          <a href="#">Services</a>
          {showDropdown2 && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="#">Reliability Services</a>
                <ul className="submenu">
                  <li className="submenu-item">
                    <Link
                      to="/services/reliability/LDA"
                      onClick={() => setShowDropdown2(false)}
                    >
                      Life Data Analysis
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link
                      to="/services/reliability/RAE"
                      onClick={() => setShowDropdown2(false)}
                    >
                      Reliability/Availability Estimation
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link
                      to="/services/reliability/RT"
                      onClick={() => setShowDropdown2(false)}
                    >
                      Reliability Testing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown-item">
                <a href="#">Shop Floor Services</a>
                <ul className="submenu">
                  <li className="submenu-item">
                    <Link
                      to="/services/shop-floor/JSSS"
                      onClick={() => setShowDropdown2(false)}
                    >
                      Job Shop Scheduling Simulation
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link
                      to="/services/shop-floor/SFLS"
                      onClick={() => setShowDropdown2(false)}
                    >
                      Shop Floor Layout Simulation
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link
                      to="/services/shop-floor/ALS"
                      onClick={() => setShowDropdown2(false)}
                    >
                      Assembly Line Simulation
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </li>

        {/* Gallery */}
        <li className="nav-item">
          <Link to="/gallery" className="nav-link" onClick={scrollToTop}>
            Gallery
          </Link>
        </li>

        {/* Contact */}
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={scrollToTop}>
            Contact
          </Link>
        </li>

        {/* Login */}
        <li className="nav-item">
          <Link to="/login" className="nav-link" onClick={scrollToTop}>
            Login
          </Link>
        </li>

        {/* Register */}
        <li className="nav-item">
          <Link to="/register" className="nav-link" onClick={scrollToTop}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
