import React, { useState } from "react";
import "./NavBar.css";
import Logo from "./Logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleMouseEnter1 = () => {
    setShowDropdown1(true);
    setShowDropdown2(false);
  };

  const handleMouseEnter2 = () => {
    setShowDropdown2(true);
    setShowDropdown1(false);
  };

  const handleMouseLeave = () => {
    setShowDropdown1(false);
    setShowDropdown2(false);
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
      {/* Navigation Menu */}
      <ul className="nav-menu">
        {/* Home */}
        <Link to="/" className="home" onClick={scrollToTop}>
          <div className="homeback">Home</div>
        </Link>

        {/* About Dropdown */}
        <li
          className="nav-item"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">About</a>
          {showDropdown1 && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/about/team" onClick={handleMouseLeave}>
                  Team
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/about/overview" onClick={handleMouseLeave}>
                  Overview
                </Link>
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

        {/* Logo */}
        <Link to="/" className="logo" onClick={scrollToTop}>
          <img src={Logo} alt="SimuliWare" className="logo-svg" />
        </Link>

        {/* Services Dropdown */}
        <li
          className="nav-item"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave}
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
                      onClick={handleMouseLeave}
                    >
                      Life Data Analysis
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link
                      to="/services/reliability/RAE"
                      onClick={handleMouseLeave}
                    >
                      Reliability/Availability Estimation
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link
                      to="/services/reliability/RT"
                      onClick={handleMouseLeave}
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
                      onClick={handleMouseLeave}
                    >
                      Job Shop Scheduling Simulation
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link
                      to="/services/shop-floor/SFLS"
                      onClick={handleMouseLeave}
                    >
                      Shop Floor Layout Simulation
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link
                      to="/services/shop-floor/ALS"
                      onClick={handleMouseLeave}
                    >
                      Assembly Line Simulation
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          )}
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
