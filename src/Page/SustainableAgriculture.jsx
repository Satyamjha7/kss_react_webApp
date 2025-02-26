import React from 'react';
import './SustainableAgriculture.css';
import agricultureBackground from '../assets/163.jpg';
import agricultureImg from '../assets/163.jpg';

const SustainableAgriculture = () => {
    return (
        <>
            <div
                className="agriculture-banner"
                style={{ backgroundImage: `url(${agricultureBackground})` }}
            >
                <div className="agriculture-banner-overlay">
                    <h1 className="agriculture-title">Sustainable Agriculture</h1>
                </div>
            </div>

            <div className="agriculture-content">
                <div className="agriculture-content-section">
                    <img src={agricultureImg} alt="Sustainable Agriculture" className="agriculture-content-img" />
                    <div className="agriculture-content-text">
                        <h2>Nurturing Nature, Feeding Future</h2>
                        <p>
                            Our initiatives in Sustainable Agriculture aim to promote eco-friendly farming practices that enhance productivity while preserving natural resources.
                            We empower farmers with knowledge, tools, and resources to adopt sustainable techniques that ensure food security and environmental conservation.
                        </p>
                        <p>
                            Join us in fostering sustainable agriculture and contributing to a greener, more resilient food system.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SustainableAgriculture;
