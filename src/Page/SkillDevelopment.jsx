import React from 'react';
import './SkillDevelopment.css';
import skillBackground from '../assets/163.jpg';
import skillImg from '../assets/163.jpg';

const SkillDevelopment = () => {
    return (
        <>
            <div
                className="skill-banner"
                style={{ backgroundImage: `url(${skillBackground})` }}
            >
                <div className="skill-banner-overlay">
                    <h1 className="skill-title">Skill Development</h1>
                </div>
            </div>

            <div className="skill-content">
                <div className="skill-content-section">
                    <img src={skillImg} alt="Skill Development" className="skill-content-img" />
                    <div className="skill-content-text">
                        <h2>Empowering Through Skills</h2>
                        <p>
                            Our Skill Development initiatives aim to empower individuals with the necessary skills to enhance their employability,
                            foster entrepreneurship, and promote self-reliance.
                        </p>
                        <p>
                            Join us in bridging the skill gap. Together, we can create opportunities for growth and economic independence.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillDevelopment;
