import React, { useEffect } from 'react';
import './Watsan.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import teamBackground from '../assets/163.jpg';

const watsanProgrammes = [
    {
        id: 1,
        title: 'Community Water Systems',
        description: 'Solar-powered water pumps, filtration units, and rainwater harvesting systems ensure clean, year-round drinking water.',
        icon: waterIcon,
        gradient: 'linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%)'
    },
    {
        id: 2,
        title: 'Hygienic Sanitation Facilities',
        description: 'Eco-friendly toilets and handwashing stations improve sanitation access, especially for women and marginalized groups.',
        icon: toiletIcon,
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
        id: 3,
        title: 'Hygiene Awareness Campaigns',
        description: 'Workshops on menstrual hygiene, sanitation, and handwashing reduce waterborne diseases and promote healthy habits.',
        icon: hygieneIcon,
        gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)'
    }
];

const WATSAN = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <div className="watsan-banner" style={{ backgroundImage: `url(${teamBackground})` }}>
                <div className="watsan-banner-overlay">
                    <h1 className="watsan-title">Water and Sanitation (WATSAN)</h1>
                </div>
            </div>

            <section className="watsan-section">
                <div className="container">
                    <h2 className="section-heading">
                        <span className="highlight-blue">Our</span> <span className="highlight-green">Programmes</span>
                    </h2>
                    <p className="section-subtext">
                        Through sustainable solutions in water, sanitation and hygiene (WASH), we empower vulnerable communities to live healthier, dignified lives.
                    </p>

                    <div className="programme-grid">
                        {watsanProgrammes.map(prog => (
                            <div className="programme-card" key={prog.id} style={{ background: prog.gradient }} data-aos="fade-up">
                                <div className="icon-wrapper">
                                    <img src={prog.icon} alt={prog.title} className="programme-icon" />
                                </div>
                                <h3 className="card-title">{prog.title}</h3>
                                <p className="card-description">{prog.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WATSAN;
