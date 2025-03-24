import React from 'react';
import './Contact.css';
import bannerImage from "../assets/178.jpg";
import Breadcrumb from '../Components/Breadcrumb';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="contact-banner-overlay">
                    <h1 className="contact-banner-title">Contact Us</h1>
                </div>
            </div>
            <Breadcrumb/>
            <div className="contact-info">
                <div className="contact-card">
                    <i className="fas fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>kosisevasadan@gmail.com</p>
                    <p>info@kosisevasadan.org</p>
                </div>
                <div className="contact-card">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Our Location</h3>
                    <p>Acharyavan Mahishi, Saharsa</p>
                    <p>Bihar, INDIA</p>
                </div>
                <div className="contact-card">
                    <i className="fas fa-phone"></i>
                    <h3>Call Us</h3>
                    <p>+91 9113124943</p>
                    <p>+91 9934797023</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <div className="contact-form-left">
                    <h2>Love to hear from you</h2>
                    <p>Feel free to reach out to us for any inquiries or feedback. We're here to help!</p>
                    <div className="social-icons">
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
                <div className="contact-form-right">
                    <form>
                        <input type="text" placeholder="Your name" required />
                        <input type="email" placeholder="Email address" required />
                        <textarea placeholder="Write a message" required></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>

            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.1569103491424!2d86.46869819999999!3d25.864312599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee1104c881b3cb%3A0x99415d3b042353ae!2sKosi%20Seva%20Sadan!5e0!3m2!1sen!2sin!4v1702834583992!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Location Map"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
