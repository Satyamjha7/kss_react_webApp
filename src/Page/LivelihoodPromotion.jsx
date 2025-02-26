import React from 'react';
import './LivelihoodPromotion.css';
import livelihoodBackground from '../assets/163.jpg';
import livelihoodImg from '../assets/163.jpg';

const LivelihoodPromotion = () => {
    return (
        <>
            <div
                className="livelihood-banner"
                style={{ backgroundImage: `url(${livelihoodBackground})` }}
            >
                <div className="livelihood-banner-overlay">
                    <h1 className="livelihood-title">Livelihood Promotion</h1>
                </div>
            </div>

            <div className="livelihood-content">
                <div className="livelihood-content-section">
                    <img src={livelihoodImg} alt="Livelihood Promotion" className="livelihood-content-img" />
                    <div className="livelihood-content-text">
                        <h2>Empowering Communities, Building Futures</h2>
                        <p>
                            Our Livelihood Promotion initiatives focus on enhancing the economic capabilities of individuals and communities through skill development, entrepreneurship, and sustainable income opportunities.
                            We strive to provide resources, training, and mentorship to help people achieve financial independence and improve their quality of life.
                        </p>
                        <p>
                            Join us in empowering communities and promoting sustainable livelihoods for a better tomorrow.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LivelihoodPromotion;
