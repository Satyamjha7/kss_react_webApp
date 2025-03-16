import React from "react";
import "./WhoWeAre.css";
import VisionImage from "../assets/114.jpeg";
import MissionImage from "../assets/182.jpg";
import ImpactImage from "../assets/178.jpg";
import AboutUsImage from "../assets/133.jpeg";

const WhoWeAre = () => {
    return (
        <div className="who-we-are">
            <div className="hero-section" style={{ backgroundImage: `url(${AboutUsImage})` }}>
                <div className="hero-overlay">
                    <h1>Who We Are</h1>
                </div>
            </div>

            <div className="content-section">
                <h2>About Us</h2>
                <p>
                    Kosi Seva Sadan (KSS) is a Gandhian non-profit organization rooted in the values of equity, justice, and sustainability. Established in 1981 by the inspiration of the esteemed social reformer Late Jay Prakash Narayan, KSS was born out of the Jayaprakash Movement during the Bhoodan Andolan, which sought to bring about societal change through non-violence and self-sufficiency.
                </p>
                <p>
                    Our journey was further strengthened by the mentorship of Late Prem Bhai of the Sarvodaya Movement, who guided a group of passionate youth to create impactful, need-based programs aimed at uplifting vulnerable communities.
                </p>
            </div>

            <div className="grid-section">
                <div className="grid-item">
                    <img src={VisionImage} alt="Vision" />
                    <h3>Our Vision</h3>
                    <p>To create an egalitarian society where every individual, especially the poor, oppressed, and underprivileged, gets an opportunity to realize their full potential.</p>
                </div>
                <div className="grid-item">
                    <img src={MissionImage} alt="Mission" />
                    <h3>Our Mission</h3>
                    <p>Facilitating holistic development anchored in equity, justice, and sustainability by empowering communities to become self-sufficient and resilient.</p>
                </div>
                <div className="grid-item">
                    <img src={ImpactImage} alt="Impact" />
                    <h3>Our Impact</h3>
                    <p>Operating in the Saharsa district of Bihar, KSS has expanded its outreach to other districts, impacting thousands through programs in education, health, livelihood, and more.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
