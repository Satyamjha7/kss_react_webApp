import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState({
    about: false,
    what: false,
    res: false,
    gallery: false,
    media: false,
  });

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleDropdownClick = (menu) => {
    setDropdown(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({
      about: false,
      what: false,
      res: false,
      gallery: false,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <Link to="/">
          <img
            src={scrolled ? "/images/logo-png.png" : "/images/logo-white.png"}
            alt="Kosi Seva Sadan Logo"
            className="logo-img"
          />
        </Link>
        <div className="logo-text">
          KOSI SEVA SADAN
          <p className="slogan">Restoring Hope, Reviving Communities</p>
        </div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>

          <li
            onMouseEnter={() => toggleDropdown("about")}
            onMouseLeave={() => toggleDropdown("about")}
            onClick={() => handleDropdownClick('about')} 
          >
            <span className="mouse-event">About Us ▾</span>
            {dropdown.about && (
              <div className="dropdown-menu">
                <Link to="/who-we-are">Who We Are</Link>
                <Link to="/team">The Team</Link>
                <Link to="/values">Our Values</Link>
                <Link to="/Policies">KSS Policies</Link>
                <Link to="/financials">Financials</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => toggleDropdown("what")}
            onMouseLeave={() => toggleDropdown("what")}
            onClick={() => handleDropdownClick('about')} 
          >
            <span className="mouse-event">What We Do ▾</span>
            {dropdown.what && (
              <div className="dropdown-menu">
                <Link to="/women-empowerment">Strengthening Women’s Participation</Link>
                <Link to="/health-nutrition">Promoting Child Rights through Education and Skill Development </Link>
                <Link to="/watsan">Health, Sanitation and Nutrition</Link>
                <Link to="/education-awareness">Climate-Resilient Livelihoods and Sustainable Agriculture</Link>
                <Link to="/child-rights">Flood Preparedness, Relief, and Community Resilience</Link>
                <Link to="/drr-climate">Environment Conservation and Clean Energy Solutions</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => toggleDropdown("res")}
            onMouseLeave={() => toggleDropdown("res")}
            onClick={() => handleDropdownClick('about')} 
          >
            <span className="mouse-event">Resources ▾</span>
            {dropdown.res && (
              <div className="dropdown-menu">
                <Link to="/annual-report">Annual Report</Link>
                <Link to="/fcra">FCRA</Link>
                <Link to="/organization-docs">Organization Docs</Link>
                <Link to="/careers">Careers</Link>
                <div
                className="dropdown-item"
                onMouseEnter={() => setDropdown((prev) => ({ ...prev, media: true }))}
                onMouseLeave={() => setDropdown((prev) => ({ ...prev, media: false }))}
                >
                  <span>Media ▸</span>
                  {dropdown.media && (
                    <div className="side-dropdown-menu">
                      <Link to="/gallery">Gallery</Link>
                      <Link to="/paper-clips">Paper Clips</Link>
                    </div>
                  )}
                </div>
                <Link to="/stories">Stories</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => toggleDropdown("gallery")}
            onMouseLeave={() => toggleDropdown("gallery")}  
          >
            <span className="mouse-event">Media ▾</span>
            {dropdown.gallery && (
              <div className="dropdown-menu">
                <Link to="/gallery">Gallery</Link>
                <Link to="/paper-clips">Paper Clips</Link>
              </div>
            )}
          </li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="nav-actions">
        <input type="text" placeholder="Search..." className="search-box" />
        <button className="donate-btn">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
