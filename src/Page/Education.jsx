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

                {/* New Section: Community-Based Learning */}
                <div className="edu-content-section">
                    <img src="https://source.unsplash.com/800x600/?community,training" alt="Community Training" className="edu-content-img" />
                    <div className="edu-content-text">
                        <h2>Community-Based Learning</h2>
                        <p>
                            We conduct grassroots-level educational drives, engaging local communities to spread knowledge on healthcare, sustainability, and social rights.
                        </p>
                        <p>
                            These initiatives ensure that even the most marginalized groups gain access to critical information and lifelong learning opportunities.
                        </p>
                    </div>
                </div>

                {/* New Section: Education for the Next Generation */}
                <div className="edu-content-section">
                    <img src="https://source.unsplash.com/800x600/?children,learning" alt="Youth Education" className="edu-content-img" />
                    <div className="edu-content-text">
                        <h2>Education for the Next Generation</h2>
                        <p>
                            Our youth programs aim to build curiosity, creativity, and confidence among children by integrating modern tools and interactive teaching methods.
                        </p>
                        <p>
                            Through digital classrooms, reading clubs, and scholarship opportunities, we nurture the leaders of tomorrow from an early age.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;
