import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [dropdown, setDropdown] = useState({
        about: false,
        what: false,
        res: false,
        gallery: false,
    });

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDropdown = (menu) => {
        setDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            {/* Logo Container */}
            <div className="logo-container">
                <Link to="/">
                    <img
                        src={scrolled ? "Assets/logo-png.png" : "Assets/logo-white.png"}
                        alt="Kosi Seva Sadan Logo"
                        className="logo-img"
                    />
                </Link>
                <div className="logo-text">
                    KOSI SEVA SADAN
                    <p className="slogan">Restoring Hope, Reviving Communities</p>
                </div>
            </div>

            {/* Hamburger for Mobile */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            {/* Nav Links */}
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>

                    {/* About Us Dropdown */}
                    <li
                        onMouseEnter={() => toggleDropdown("about")}
                        onMouseLeave={() => toggleDropdown("about")}
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

                    {/* What We Do Dropdown */}
                    <li
                        onMouseEnter={() => toggleDropdown("what")}
                        onMouseLeave={() => toggleDropdown("what")}
                    >
                        <span className="mouse-event">What We Do ▾</span>
                        {dropdown.what && (
                            <div className="dropdown-menu">
                                <Link to="/women-empowerment">Women Empowerment</Link>
                                <Link to="/health-nutrition">Health & Nutrition</Link>
                                <Link to="/watsan">Water & Sanitation</Link>
                                <Link to="/education-awareness">Education & Awareness</Link>
                                <Link to="/child-rights">Child Rights</Link>
                                <Link to="/drr-climate">Climate Change</Link>
                                <Link to="/skills-development">Skills Development</Link>
                                <Link to="/sustainable-agriculture">Sustainable Agriculture</Link>
                                <Link to="/environment">Environment & Clean Energy</Link>
                                <Link to="/livelihood-promotion">Livelihood Promotion</Link>
                            </div>
                        )}
                    </li>

                    {/* Resources Dropdown */}
                    <li
                        onMouseEnter={() => toggleDropdown("res")}
                        onMouseLeave={() => toggleDropdown("res")}
                    >
                        <span className="mouse-event">Resources ▾</span>
                        {dropdown.res && (
                            <div className="dropdown-menu">
                                <Link to="/annual-report">Annual Report</Link>
                                <Link to="/fcra">FCRA</Link>
                                <Link to="/organization-docs">Organization Docs</Link>
                                <Link to="/careers">Careers</Link>
                                <Link to="/stories">Stories</Link>
                            </div>
                        )}
                    </li>

                    {/* Media Dropdown */}
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

                    {/* Contact */}
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            {/* Search Box & Donate Button */}
            <div className="nav-actions">
                <input type="text" placeholder="Search..." className="search-box" />
                <button className="donate-btn">Donate</button>
            </div>
        </nav>
    );
};

export default Navbar;
