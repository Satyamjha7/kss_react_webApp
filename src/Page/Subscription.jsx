import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Subscription.css';

const Subscription = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
        }
    };

    return (
        <div className="newsletter-container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Card className="newsletter-card">
                    <CardContent>
                        {!submitted ? (
                            <div className="newsletter-content">
                                <h1 className="newsletter-title">Stay Connected with Us!</h1>
                                <p className="newsletter-message">Subscribe to our newsletter and never miss an update. Get the latest news, articles, and resources delivered straight to your inbox.</p>
                                <form onSubmit={handleSubmit} className="newsletter-form">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="newsletter-input"
                                        required
                                    />
                                    <Button type="submit" className="newsletter-button">Subscribe</Button>
                                </form>
                            </div>
                        ) : (
                            <div className="newsletter-thankyou">
                                <h2>Thank You for Subscribing!</h2>
                                <p>We're excited to share amazing content with you. Stay tuned for updates!</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default Subscription;
