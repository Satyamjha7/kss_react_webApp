import React from "react";
import "./Team.css";
import teamBackground from "../assets/114.jpeg";

const Team = () => {
    return (
        <div className="team-section" style={{ backgroundImage: `url(${teamBackground})` }}>
            <div className="team-overlay">
                <h1 className="team-title">Our Team</h1>
            </div>
        </div>
    );
};

export default Team;
