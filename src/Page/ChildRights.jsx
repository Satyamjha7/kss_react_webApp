import React from 'react';
import './ChildRights.css';
import childRightsBackground from '../assets/163.jpg';
import childRightsImg from '../assets/163.jpg';

const ChildRights = () => {
    return (
        <>
            <div
                className="child-banner"
                style={{ backgroundImage: `url(${childRightsBackground})` }}
            >
                <div className="child-banner-overlay">
                    <h1 className="child-title">Child Rights</h1>
                </div>
            </div>

            <div className="child-content">
                <div className="child-content-section">
                    <img src={childRightsImg} alt="Child Rights" className="child-content-img" />
                    <div className="child-content-text">
                        <h2>Protecting Futures, Ensuring Rights</h2>
                        <p>
                            Every child deserves a safe, nurturing environment to grow and thrive. We are dedicated to protecting children's rights,
                            ensuring access to education, healthcare, and a life free from exploitation.
                        </p>
                        <p>
                            Join us in advocating for child rights. Together, we can create a world where every child is respected, protected, and empowered.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChildRights;
