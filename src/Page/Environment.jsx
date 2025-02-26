import React from 'react';
import './Environment.css';
import environmentBackground from '../assets/163.jpg';
import environmentImg from '../assets/163.jpg';

const Environment = () => {
    return (
        <>
            <div
                className="environment-banner"
                style={{ backgroundImage: `url(${environmentBackground})` }}
            >
                <div className="environment-banner-overlay">
                    <h1 className="environment-title">Environment</h1>
                </div>
            </div>

            <div className="environment-content">
                <div className="environment-content-section">
                    <img src={environmentImg} alt="Environment" className="environment-content-img" />
                    <div className="environment-content-text">
                        <h2>Preserving Nature, Securing Future</h2>
                        <p>
                            Our Environmental initiatives focus on sustainable practices, conservation, and creating awareness about the importance of protecting our planet.
                            We aim to inspire communities to take action towards a cleaner and greener future.
                        </p>
                        <p>
                            Join us in our mission to protect the environment. Together, we can make a difference and leave a positive impact on future generations.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Environment;
