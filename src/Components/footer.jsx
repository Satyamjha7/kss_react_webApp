import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section about-section">
                    <img src="/images/logo-white.png" alt="KSS Logo" className="footer-logo" />
                    <div className="about-text">
                        <h2>Kosi Seva Sadan</h2>
                        <p>The organization is dedicated to community development and empowerment through sustainable initiatives and leadership.</p>
                    </div>
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
                        <a href="https://www.facebook.com/your-page-link" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-x-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.youtube.com/c/your-channel" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
