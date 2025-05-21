import React from "react";
import "./WhoWeAre.css";
import VisionImage from "../assets/114.jpeg";
import MissionImage from "../assets/women-back.jpg";
import GoalImage from "../assets/123.jpeg";
import AboutUsImage from "../assets/133.jpeg";
import AboutBanner from "./AboutBanner";


const WhoWeAre = () => {
    const cards = [
        {
            title: "Vision",
            description:
                "To create an egalitarian society where every individual, especially the poor, oppressed, and underprivileged, gets an opportunity to realize their full potential.",
            image: VisionImage
        },
        {
            title: "Mission",
            description:
                "Facilitating holistic development anchored in equity, justice, and sustainability by empowering communities to become self-sufficient and resilient.",
            image: MissionImage
        },
        {
            title: "Goal",
            description:
                "Operating in the Saharsa district of Bihar, KSS has expanded its outreach to other districts, impacting thousands through programs in education, health, livelihood, and more.",
            image: GoalImage
        },
    ];

    return (
        <div className="who-we-are">
            <div className="hero-section" style={{ backgroundImage: `url(${AboutUsImage})` }}>
                <div className="hero-overlay">
                    <h1>Who We Are</h1>
                </div>
            </div>

            <AboutBanner />

            <div className="content-section">
                <h2>About Us</h2>
                <p>
                    Kosi Seva Sadan (KSS) is more than just a Gandhian non-profit — it’s a movement deeply rooted in the ideals of equity, justice, and sustainability...
                </p>
                <p>
                    Our foundation was further strengthened by the wisdom and mentorship of Late Prem Bhai from the Sarvodaya Movement...
                </p>
                <p className="quote">
                    “The best way to find yourself is to lose yourself in the service of others.” — Mahatma Gandhi
                </p>
            </div>

            <div className="vision-mission-grid">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="vm-card"
                        style={{ backgroundImage: `url(${card.image})` }}
                    >
                        <div className="vm-overlay">
                            <h3>{card.icon} {card.title}</h3>
                        </div>
                        <div className="vm-hover-content">
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhoWeAre;
