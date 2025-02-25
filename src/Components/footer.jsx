import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section logo-section">
                    <img src="src\assets\logo-white.png" alt="KSS Logo" className="footer-logo" />
                    <h2>Kosi Seva Sadan</h2>
                    <p>The organization is dedicated to community development and empowerment through sustainable initiatives and leadership.</p>
                </div>

                <div className="footer-section contact-section">
                    <h3>Contact</h3>
                    <p><i className="fas fa-map-marker-alt"></i> Address Line, City, State, PIN</p>
                    <p><i className="fas fa-envelope"></i> kss.email@example.com</p>
                    <p><i className="fas fa-phone"></i> +91 XXXXXXXXXX</p>
                </div>

                <div className="footer-section social-section">
                    <h3>Stay Connected</h3>
                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
