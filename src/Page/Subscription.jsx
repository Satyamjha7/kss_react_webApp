import React, { useState } from 'react';
import axios from 'axios';
import './Subscription.css';

const Subscription = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/subscriptions', { email });
            setMessage(res.data.message);
            setEmail('');
        } catch (error) {
            setMessage('Subscription failed. Please try again.');
        }
    };

    return (
        <div className="subscription-container">
            <h2>Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Subscription;
