import React from 'react';
import './ClimateChange.css';
import climateChangeBackground from '../assets/163.jpg';
import climateChangeImg from '../assets/163.jpg';

const ClimateChange = () => {
    return (
        <>
            <div
                className="climate-banner"
                style={{ backgroundImage: `url(${climateChangeBackground})` }}
            >
                <div className="climate-banner-overlay">
                    <h1 className="climate-title">Climate Change</h1>
                </div>
            </div>

            <div className="climate-content">
                <div className="climate-content-section">
                    <img src={climateChangeImg} alt="Climate Change" className="climate-content-img" />
                    <div className="climate-content-text">
                        <h2>Acting Today for a Greener Tomorrow</h2>
                        <p>
                            Climate change is a global challenge that demands immediate action. We are committed to raising awareness,
                            promoting sustainable practices, and supporting initiatives to combat environmental degradation.
                        </p>
                        <p>
                            Join us in our mission to protect the planet. Together, we can reduce our carbon footprint and build a sustainable future.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClimateChange;
