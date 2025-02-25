import React from 'react';
import './Education.css';
import eduBackground from '../assets/163.jpg';
import eduImg from '../assets/163.jpg';

const Education = () => {
    return (
        <>
            <div
                className="edu-banner"
                style={{ backgroundImage: `url(${eduBackground})` }}
            >
                <div className="edu-banner-overlay">
                    <h1 className="edu-title">Education & Awareness</h1>
                </div>
            </div>

            <div className="edu-content">
                <div className="edu-content-section">
                    <img src={eduImg} alt="Education" className="edu-content-img" />
                    <div className="edu-content-text">
                        <h2>Empowering Minds, Inspiring Change</h2>
                        <p>
                            Our mission is to educate and raise awareness on critical issues, ensuring informed and responsible communities.
                            We believe in the power of knowledge to transform societies and uplift individuals.
                        </p>
                        <p>
                            Join us in spreading awareness and creating a brighter future for everyone. Your support can make a world of difference.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;
