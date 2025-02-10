import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [dropdown, setDropdown] = useState({
        about: false,
        what: false,
        res: false,
        gallery: false,
    });

    const toggleDropdown = (menu) => {
        setDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img src="/Assets/logo-png.png" alt="Kosi Seva Sadan Logo" className="logo-img animated-logo" />
                </Link>
                <div className="logo-text">
                    Kosi Seva Sadan
                    <p className="slogan">Restoring Hope, Reviving Communities</p>
                </div>
            </div>

            <div className="nav-links">
                <ul>
                    <li><Link to="/"><b>Home</b></Link></li>

                    {/* About Us Dropdown */}
                    <li
                        onMouseEnter={() => toggleDropdown("about")}
                        onMouseLeave={() => toggleDropdown("about")}
                    >
                        <span className="mouse-event"><b>About Us <span className="caret"></span></b></span>
                        {dropdown.about && (
                            <div className="dropdown-menu" id="about-dropdown">
                                <Link to="/who-we-are">Who We Are</Link>
                                <hr />
                                <Link to="/team">The Team</Link>
                                <hr />
                                <Link to="/values">Our Values</Link>
                                <hr />
                                <Link to="/Policies">KSS Policies</Link>
                                <hr />
                                <Link to="/financials">Financials</Link>
                            </div>
                        )}
                    </li>

                    {/* What We Do Dropdown */}
                    <li
                        onMouseEnter={() => toggleDropdown("what")}
                        onMouseLeave={() => toggleDropdown("what")}
                    >
                        <span className="mouse-event"><b>What We Do <span className="caret"></span></b></span>
                        {dropdown.what && (
                            <div className="dropdown-menu" id="what-dropdown">
                                <Link to="/women-empowerment">Women Empowerment</Link>
                                <hr />
                                <Link to="/health-nutrition">Health & Nutrition</Link>
                                <hr />
                                <Link to="/watsan">Water and Sanitation (WATSAN)</Link>
                                <hr />
                                <Link to="/education-awareness">Education and Awareness</Link>
                                <hr />
                                <Link to="/child-rights">Child Rights</Link>
                                <hr />
                                <Link to="/drr-climate">DRR & Climate Change</Link>
                                <hr />
                                <Link to="/skills-development">Skills Development</Link>
                                <hr />
                                <Link to="/sustainable-agriculture">Sustainable Agriculture</Link>
                                <hr />
                                <Link to="/environment">Environment & Clean Energy</Link>
                                <hr />
                                <Link to="/livelihood-promotion">Livelihood Promotion</Link>
                            </div>
                        )}
                    </li>

                    {/* Resources Dropdown */}
                    <li
                        onMouseEnter={() => toggleDropdown("res")}
                        onMouseLeave={() => toggleDropdown("res")}
                    >
                        <span className="mouse-event"><b>Resources <span className="caret"></span></b></span>
                        {dropdown.res && (
                            <div className="dropdown-menu" id="res-dropdown">
                                <Link to="/annual-report">Annual Report</Link>
                                <hr />
                                <Link to="/fcra">FCRA</Link>
                                <hr />
                                <Link to="/organization-docs">Organization Docs</Link>
                                <hr />
                                <Link to="/case-study">Case Study</Link>
                                <hr />
                                <Link to="/stories">Stories</Link>
                            </div>
                        )}
                    </li>

                    {/* Media Dropdown */}
                    <li
                        onMouseEnter={() => toggleDropdown("gallery")}
                        onMouseLeave={() => toggleDropdown("gallery")}
                    >
                        <span className="mouse-event"><b>Media <span className="caret"></span></b></span>
                        {dropdown.gallery && (
                            <div className="dropdown-menu" id="gallery-dropdown">
                                <Link to="/gallery">Gallery</Link>
                                <hr />
                                <Link to="/paper-clips">Paper Clips</Link>
                            </div>
                        )}
                    </li>

                    <li><Link to="/contact"><b>Contact</b></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
