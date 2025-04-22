import React from 'react';
import './Health.css';
import healthBackground from '../assets/133.jpeg';
import healthImg from '../assets/163.jpg';
/*Contents to be edited*/
const Health = () => {
    return (
        <>
            <div
                className="health-banner"
                style={{ backgroundImage: `url(${healthBackground})` }}
            >
                <div className="health-banner-overlay">
                    <h1 className="health-title">Health & Nutrition</h1>
                </div>
            </div>

            <div className="health-content">
                <div className="health-content-section">
                    <img src={healthImg} alt="Health" className="health-content-img" />
                    <div className="health-content-text">
                        <h2>Empowering Women, Transforming Lives</h2>
                        <p>
                            Our mission is to empower women through education, skill development, and leadership initiatives.
                            We strive to create a supportive environment where women can grow, learn, and become leaders in their communities.
                        </p>
                        <p>
                            Join us in making a difference! Your support can help transform lives and promote gender equality.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Health;
