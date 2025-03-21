import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
    return (
        <MDBFooter className="footer">
            <section className="social-section">
                <div className="social-text">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div className="social-icons">
                    <a href="#" className="social-link">
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href="#" className="social-link">
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href="#" className="social-link">
                        <MDBIcon fab icon="google" />
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
                                <MDBIcon src="public\images\logo-white.png" className="footer-icon" />
                                Kosi Seva Sadan
                            </h6>
                            <p className="footer-text">
                                Kosi Seva Sadan is a non-profit organization dedicated to empowering marginalized communities in Bihar through sustainable livelihood initiatives, disaster resilience, women’s empowerment, and social justice. Established in 1981, we focus on transforming lives by promoting innovative farming techniques, community-based development, and access to essential resources for rural development.
                            </p>
                        </MDBCol>


                        
                        <MDBCol md="2" lg="2" xl="2" className="footer-col">
                            <h6 className="footer-title">Products</h6>
                            <p><a href="#" className="footer-link">Angular</a></p>
                            <p><a href="#" className="footer-link">React</a></p>
                            <p><a href="#" className="footer-link">Vue</a></p>
                            <p><a href="#" className="footer-link">Laravel</a></p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="footer-col">
                            <h6 className="footer-title">Useful links</h6>
                            <p><a href="#" className="footer-link">Pricing</a></p>
                            <p><a href="#" className="footer-link">Settings</a></p>
                            <p><a href="#" className="footer-link">Orders</a></p>
                            <p><a href="#" className="footer-link">Help</a></p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className="footer-col">
                            <h6 className="footer-title">Contact</h6>
                            <p><MDBIcon icon="home" className="footer-icon" /> New York, NY 10012, US</p>
                            <p><MDBIcon icon="envelope" className="footer-icon" /> info@example.com</p>
                            <p><MDBIcon icon="phone" className="footer-icon" /> +01 234 567 88</p>
                            <p><MDBIcon icon="print" className="footer-icon" /> +01 234 567 89</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className="footer-bottom">
                    <p>© 2025 Kosi Seva Sadan. All rights reserved</p>
                    <div className="footer-links">
                        <a href="/copyright">Copyright</a>
                        <a href="/privacy-policy">Privacy Policy and Cookie Notice</a>
                        <a href="/terms-conditions">Terms and Conditions</a>
                </div>
            </div>
        </MDBFooter>
    );
}
