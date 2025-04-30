import React from "react";
import "./WhoWeAre.css";
import VisionImage from "../assets/114.jpeg";
import MissionImage from "../assets/182.jpg";
import ImpactImage from "../assets/178.jpg";
import AboutUsImage from "../assets/133.jpeg";

// Icons
import { FaEye, FaBullseye, FaHandsHelping } from "react-icons/fa";

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
                    Kosi Seva Sadan (KSS) is more than just a Gandhian non-profit — it’s a movement deeply rooted in the ideals of equity, justice, and sustainability. Born in 1981 from the powerful wave of the Jayaprakash Movement during the Bhoodan Andolan, KSS carries forward the legacy of non-violence and self-reliance envisioned by the legendary social reformer Late Jay Prakash Narayan.
                </p>
                <p>
                    Our foundation was further strengthened by the wisdom and mentorship of Late Prem Bhai from the Sarvodaya Movement, who inspired a dedicated group of young changemakers to take action. Today, KSS stands as a beacon of hope — delivering impact-driven, community-focused programs that uplift the most vulnerable with compassion, integrity, and purpose.
                </p>
                <p className="quote">
                    “The best way to find yourself is to lose yourself in the service of others.” — Mahatma Gandhi
                </p>
            </div>

            <div className="grid-section">
                <div className="grid-item">
                    <img src={VisionImage} alt="Vision" />
                    <div>
                        <h3><FaEye style={{ color: "#0077b6", marginRight: "10px" }} /> Our Vision</h3>
                        <p>To create an egalitarian society where every individual, especially the poor, oppressed, and underprivileged, gets an opportunity to realize their full potential.</p>
                    </div>
                </div>

                <div className="grid-item">
                    <img src={MissionImage} alt="Mission" />
                    <div>
                        <h3><FaBullseye style={{ color: "#f57c00", marginRight: "10px" }} /> Our Mission</h3>
                        <p>Facilitating holistic development anchored in equity, justice, and sustainability by empowering communities to become self-sufficient and resilient.</p>
                    </div>
                </div>

                <div className="grid-item">
                    <img src={ImpactImage} alt="Impact" />
                    <div>
                        <h3><FaHandsHelping style={{ color: "#2e7d32", marginRight: "10px" }} /> Our Impact</h3>
                        <p>Operating in the Saharsa district of Bihar, KSS has expanded its outreach to other districts, impacting thousands through programs in education, health, livelihood, and more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
