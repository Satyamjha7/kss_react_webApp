import React from 'react';
import './WomenEmpowerment.css';
import teamBackground from '../assets/133.jpeg';
import empowermentImg from '../assets/women.jpg';
import { FaLightbulb, FaHandsHelping, FaChalkboardTeacher, FaUserFriends, FaAward, FaGlobe } from 'react-icons/fa';

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

            <div className="women-content split-layout">
                <img src={empowermentImg} alt="Empowerment" className="side-img" />

                <div className="content-area">
                    <h2 className="main-heading">Empowering Women, Transforming Communities</h2>
                    <p>
                        We envision a world where every woman has the resources and opportunities to achieve her fullest potential.
                        Through education, skill-building, and leadership initiatives, we foster environments where women rise as confident changemakers.
                    </p>

                    <h3 className="sub-heading"><FaLightbulb className="icon" /> What We Do</h3>
                    <ul className="points-list">
                        <li><strong>🌱 Education & Awareness:</strong> Literacy programs, health education, and rights awareness workshops.</li>
                        <li><strong>💼 Skill Development:</strong> Vocational training, entrepreneurship bootcamps, and financial literacy.</li>
                        <li><strong>🤝 Community Leadership:</strong> Mentorship, leadership training, and grassroots activism empowerment.</li>
                        <li><strong>📈 Economic Upliftment:</strong> Self-help groups, microfinance support, and digital inclusion drives.</li>
                    </ul>

                    <section className="impact-section">
                        <h3 className="sub-heading"><FaGlobe className="icon" /> Our Impact</h3>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <FaUserFriends className="stat-icon" />
                                <h4>10,000+</h4>
                                <p>Women Empowered</p>
                            </div>
                            <div className="stat-item">
                                <FaAward className="stat-icon" />
                                <h4>500+</h4>
                                <p>Skill Development Graduates</p>
                            </div>
                            <div className="stat-item">
                                <FaHandsHelping className="stat-icon" />
                                <h4>300+</h4>
                                <p>Entrepreneurs Created</p>
                            </div>
                        </div>
                    </section>

                    <section className="stories-section">
                        <h3 className="sub-heading"><FaChalkboardTeacher className="icon" /> Voices of Change</h3>
                        <blockquote>
                            “The training I received helped me open my tailoring business. Today, I support my family confidently.” <br />
                            <span>— Renu Devi, Saharsa</span>
                        </blockquote>
                        <blockquote>
                            “I never thought I could speak in front of a crowd. Now, I lead awareness sessions in my village.” <br />
                            <span>— Sunita Kumari, Mahishi</span>
                        </blockquote>
                    </section>

                    <button className="join-btn">Support Our Mission</button>
                </div>
            </div>
        </>
    );
};

export default WomenEmpowerment;
