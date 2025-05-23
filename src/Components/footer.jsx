import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
    return (
        <MDBFooter className="footer">
            <section className="social-section">
                <p className="social-text">Follow us</p>
                <div className="social-icons">
                    <a href="#"><MDBIcon fab icon="facebook-f" /></a>
                    <a href="#"><MDBIcon fab icon="twitter" /></a>
                    <a href="#"><MDBIcon fab icon="instagram" /></a>
                </div>
            </section>

            <MDBContainer className="footer-container">
                <MDBRow className="footer-row">
                    <MDBCol md="4" className="footer-col">
                        <div className="logo-text-container">
                            <img src="/images/logo-white.png" alt="KSS Logo" className="footer-logo" />
                            <div>
                                <h6 className="footer-title">Kosi Seva Sadan</h6>
                                <p className="footer-text">Empowering Bihar since 1981 through sustainable development and humanitarian initiatives.</p>
                            </div>
                        </div>
                        <div className="credibility-tag">
                            <img src="src\assets\ca.png" alt="Credibility Verified" className="credibility-img" />
                        </div>
                    </MDBCol>

                    <MDBCol md="4" className="footer-col">
                        <h6 className="footer-title">Quick Links</h6>
                        <ul className="footer-links-list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Work</a></li>
                            <li><a href="#">Get Involved</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </MDBCol>

                    <MDBCol md="4" className="footer-col">
                        <h6 className="footer-title">Contact</h6>
                        <p><MDBIcon icon="envelope" /> kosisevasadan@gmail.com</p>
                        <p><MDBIcon icon="phone" /> +91 9934797023, 9113124943</p>
                        <p><MDBIcon icon="map-marker-alt" /> Acharyavan Mahishi, Bihar, India</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className="footer-bottom">
                <p>© 2025 Kosi Seva Sadan. All rights reserved.</p>
            </div>
        </MDBFooter>
    );
}
