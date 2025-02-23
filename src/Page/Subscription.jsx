import React from 'react';
import './Subscription.css';
import newsletterIcon from '../assets/198.png';

const Subscription = () => {
    return (
        <section className="subscription-section">
            <div className="subscription-container">
                <img
                    src={newsletterIcon}
                    alt="Newsletter Icon"
                    className="newsletter-icon"
                />
                <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p>Join our mailing list to stay updated on all the latest news and events from Kosi Seva Sadan.</p>
                <form className="subscription-form">
                    <input type="email" placeholder="Your email here..." required />
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </section>
    );
};

export default Subscription;
