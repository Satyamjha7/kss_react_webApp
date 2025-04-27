import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
    return (
        <MDBFooter className="footer">
            <section className="social-section">
                <div className="social-text">
                    <span>Follow us for updates</span>
                </div>

                <div className="social-icons">
                    <a href="#" className="social-link">
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href="#" className="social-link">
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href="#" className="social-link">
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href="#" className="social-link">
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href="#" className="social-link">
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className="footer-content">
                <MDBContainer className="footer-container">
                    <MDBRow className="footer-row">
                        <MDBCol md="3" lg="4" xl="3" className="footer-col">
                            <div className="logo-text-container">
                                <img src="public\images\logo-white.png" alt="Kosi Seva Sadan Logo" className="footer-logo" />
                                <div className="vertical-line"></div>
                                <div className="text-container">
                                    <h6 className="footer-title">Kosi Seva Sadan</h6>
                                    <p className="footer-text">
                                        Building resilient communities through sustainable development, women empowerment, and disaster response initiatives in Bihar since 1981.
                                    </p>
                                </div>
                            </div>
                        </MDBCol>


                        <MDBCol md="2" lg="2" xl="2" className="footer-col">
                            <h6 className="footer-title">Initiatives</h6>
                            <ul className="footer-links-list">
                                <li><a href="#" className="footer-link">Livelihood Programs</a></li>
                                <li><a href="#" className="footer-link">Disaster Management</a></li>
                                <li><a href="#" className="footer-link">Women Empowerment</a></li>
                                <li><a href="#" className="footer-link">Education & Training</a></li>
                            </ul>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="footer-col">
                            <h6 className="footer-title">Quick Links</h6>
                            <ul className="footer-links-list">
                                <li><a href="#" className="footer-link">About Us</a></li>
                                <li><a href="#" className="footer-link">Our Impact</a></li>
                                <li><a href="#" className="footer-link">Get Involved</a></li>
                                <li><a href="#" className="footer-link">Contact Us</a></li>
                            </ul>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className="footer-col">
                            <h6 className="footer-title">Contact Us</h6>
                            <p className="footer-contact"><MDBIcon icon="home" className="footer-icon" /> Bihar, India</p>
                            <p className="footer-contact"><MDBIcon icon="envelope" className="footer-icon" /> contact@kosisevasadan.org</p>
                            <p className="footer-contact"><MDBIcon icon="phone" className="footer-icon" /> +91 98765 43210</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className="footer-bottom">
                <p>© 2025 Kosi Seva Sadan. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="/copyright">Copyright</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-conditions">Terms & Conditions</a>
                </div>
            </div>
        </MDBFooter>
    );
}
