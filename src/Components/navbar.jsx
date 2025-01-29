import React, { useState } from 'react';
import './Navbar.css';

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
                <img src="Assets/logo-png.png" alt="Kosi Seva Sadan Logo" className="logo-img animated-logo" />
                <div className="logo-text">
                    Kosi Seva Sadan
                    <p className="slogan">Restoring Hope, Reviving Communities</p>
                </div>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="./index.html"><b>Home</b></a></li>

                    <li
                        onMouseEnter={() => toggleDropdown('about')}
                        onMouseLeave={() => toggleDropdown('about')}
                    >
                        <a href="#" className="mouse-event"><b>About Us <span className="caret"></span></b></a>
                        {dropdown.about && (
                            <div className="dropdown-menu" id="about-dropdown">
                                <a href="./aboutWhoWeAre.html">Who We Are</a>
                                <hr />
                                <a href="./team.html">The Team</a>
                                <hr />
                                <a href="./values.html">Our Values</a>
                                <hr />
                                <a href="./kssPolicies.html">KSS Policies</a>
                                <hr />
                                <a href="">Financials</a>
                            </div>
                        )}
                    </li>

                    <li
                        onMouseEnter={() => toggleDropdown('what')}
                        onMouseLeave={() => toggleDropdown('what')}
                    >
                        <a href="#" className="mouse-event"><b>What We Do <span className="caret"></span></b></a>
                        {dropdown.what && (
                            <div className="dropdown-menu" id="what-dropdown">
                                <a href="./womenEmpowerment.html" id="women-empowerment">Women Empowerment</a>
                                <hr />
                                <a href="" id="health-nutrition">Health & Nutrition</a>
                                <hr />
                                <a href="" id="watsan">Water and Sanitation (WATSAN)</a>
                                <hr />
                                <a href="" id="education-awareness">Education and Awareness</a>
                                <hr />
                                <a href="" id="child-rights">Child Rights</a>
                                <hr />
                                <a href="" id="drr-climate">DRR & Climate Change</a>
                                <hr />
                                <a href="" id="skills-dev">Skills Development</a>
                                <hr />
                                <a href="" id="sust-agri">Sustainable Agriculture</a>
                                <hr />
                                <a href="" id="environment">Environment & Clean Energy</a>
                                <hr />
                                <a href="" id="livelihood-prom">Livelihood Promotion</a>
                            </div>
                        )}
                    </li>

                    <li
                        onMouseEnter={() => toggleDropdown('res')}
                        onMouseLeave={() => toggleDropdown('res')}
                    >
                        <a href="#" className="mouse-event"><b>Resources <span className="caret"></span></b></a>
                        {dropdown.res && (
                            <div className="dropdown-menu" id="res-dropdown">
                                <a href="./annualReport.html">Annual Report</a>
                                <hr />
                                <a href="">FCRA</a>
                                <hr />
                                <a href="">Organization Doc</a>
                                <hr />
                                <a href="">Case Study</a>
                                <hr />
                                <a href="">Stories</a>
                            </div>
                        )}
                    </li>

                    <li
                        onMouseEnter={() => toggleDropdown('gallery')}
                        onMouseLeave={() => toggleDropdown('gallery')}
                    >
                        <a href="#" className="mouse-event"><b>Media <span className="caret"></span></b></a>
                        {dropdown.gallery && (
                            <div className="dropdown-menu" id="gallery-dropdown">
                                <a href="./galleryImages.html">Gallery</a>
                                <hr />
                                <a href="">Paper Clips</a>
                            </div>
                        )}
                    </li>

                    <li><a href="./contact.html"><b>Contact</b></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
