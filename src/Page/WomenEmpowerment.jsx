import React from 'react';
import './WomenEmpowerment.css';
import teamBackground from '../assets/133.jpeg';
import empowermentImg from '../assets/women.jpg';
import Breadcrumb from '../Components/Breadcrumb';

const WomenEmpowerment = () => {
    return (
        <>
            <div className="background-grad">
            <div
                className="women-banner"
                style={{ backgroundImage: `url(${teamBackground})` }}
            >
                <div className="women-banner-overlay">
                        <h1 className="women-title">Women Empowerment</h1>
                    </div>
                </div>
            </div>

            <div className="women-content">
                <div className="content-section">
                    <img src={empowermentImg} alt="Empowerment" className="content-img" />
                    <div className="content-text">
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

export default WomenEmpowerment;
