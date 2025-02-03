import React from 'react';
import './Values.css'; // Updated styling for user-friendly design

const CoreValuesPage = () => {
    return (
        <div className="core-values">
            <h1 className="page-title">Our Core Values</h1>
            <p className="intro-text">At Kosi Seva Sadan, our core values drive everything we do. These values are at the heart of our commitment to creating a better future for all.</p>

            <div className="values-container">
                <div className="value-item integrity">
                    <i className="fas fa-shield-alt"></i>
                    <h2>Integrity</h2>
                    <p>We conduct all our work with the utmost honesty, transparency, and accountability, maintaining the highest ethical standards in everything we do.</p>
                </div>

                <div className="value-item empowerment">
                    <i className="fas fa-hand-holding-heart"></i>
                    <h2>Empowerment</h2>
                    <p>We believe in empowering individuals and communities to become self-sufficient and lead their own development.</p>
                </div>

                <div className="value-item collaboration">
                    <i className="fas fa-users"></i>
                    <h2>Collaboration</h2>
                    <p>We value collaboration and partnerships, as we know that by working together, we can achieve greater impact.</p>
                </div>

                <div className="value-item innovation">
                    <i className="fas fa-lightbulb"></i>
                    <h2>Innovation</h2>
                    <p>We continuously seek creative and innovative solutions to address complex challenges effectively.</p>
                </div>

                <div className="value-item inclusivity">
                    <i className="fas fa-hands-helping"></i>
                    <h2>Inclusivity</h2>
                    <p>We are committed to inclusivity, respecting diversity, and ensuring that everyone's voice is heard and valued.</p>
                </div>
            </div>
        </div>
    );
};

export default CoreValuesPage;
