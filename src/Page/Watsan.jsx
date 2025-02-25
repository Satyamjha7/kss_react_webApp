import React from 'react';
import './Watsan.css';
import teamBackground from '../assets/163.jpg';
import watsanImg from '../assets/163.jpg';

const WATSAN = () => {
    return (
        <>
            <div
                className="watsan-banner"
                style={{ backgroundImage: `url(${teamBackground})` }}
            >
                <div className="watsan-banner-overlay">
                    <h1 className="watsan-title">Water and Sanitation (WATSAN)</h1>
                </div>
            </div>

            <div className="watsan-content">
                <div className="content-section">
                    <img src={watsanImg} alt="WATSAN" className="content-img" />
                    <div className="content-text">
                        <h2>Ensuring Clean Water and Proper Sanitation</h2>
                        <p>
                            Our WATSAN initiatives aim to provide clean water and sanitation facilities to underserved communities.
                            We focus on sustainable solutions that improve hygiene, health, and overall well-being.
                        </p>
                        <p>
                            Join our mission to create healthier communities by supporting water and sanitation projects.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WATSAN;
