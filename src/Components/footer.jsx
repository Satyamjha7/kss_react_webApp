import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
    return (
        <MDBFooter className="footer">
            <section className="social-section">
                <div className="social-text">
                    <span>Connect with us on social media:</span>
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
                            <h6 className="footer-title">
                                <img src="/images/kss-logo.png" alt="Kosi Seva Sadan Logo" className="footer-icon" />
                                Kosi Seva Sadan
                            </h6>
                            <p className="footer-text">
                                Kosi Seva Sadan is a non-profit organization working towards sustainable development, disaster resilience, and women’s empowerment in Bihar. Since 1981, we have been dedicated to enhancing rural livelihoods, promoting innovative farming, and ensuring social justice for marginalized communities.
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="footer-col">
                            <h6 className="footer-title">Our Initiatives</h6>
                            <p><a href="#" className="footer-link">Livelihood Programs</a></p>
                            <p><a href="#" className="footer-link">Disaster Management</a></p>
                            <p><a href="#" className="footer-link">Women Empowerment</a></p>
                            <p><a href="#" className="footer-link">Education & Training</a></p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="footer-col">
                            <h6 className="footer-title">Quick Links</h6>
                            <p><a href="#" className="footer-link">About Us</a></p>
                            <p><a href="#" className="footer-link">Our Impact</a></p>
                            <p><a href="#" className="footer-link">Get Involved</a></p>
                            <p><a href="#" className="footer-link">Contact Us</a></p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className="footer-col">
                            <h6 className="footer-title">Contact</h6>
                            <p><MDBIcon icon="home" className="footer-icon" /> Bihar, India</p>
                            <p><MDBIcon icon="envelope" className="footer-icon" /> contact@kosisevasadan.org</p>
                            <p><MDBIcon icon="phone" className="footer-icon" /> +91 98765 43210</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className="footer-bottom">
                <p>© 2025 Kosi Seva Sadan. All rights reserved</p>
                <div className="footer-links">
                    <a href="/copyright">Copyright</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-conditions">Terms & Conditions</a>
                </div>
            </div>
        </MDBFooter>
    );
}
