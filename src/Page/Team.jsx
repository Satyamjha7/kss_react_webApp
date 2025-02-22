import React, { useState } from "react";
import "./Team.css";
import teamBackground from "../assets/114.jpeg";

const teamData = {
    governingBoard: [
        {
            name: "Rajendra Jha",
            role: "Secretary",
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Vidyapati Chaudhary",
            role: "Vice Chairperson",
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Laturan Das",
            role: "Vice Chairperson",
            image: "https://via.placeholder.com/300"
        },
    ],
    managementTeam: [
        {
            name: "Samol Kumar Pathak",
            role: "Executive Director",
            image: "https://via.placeholder.com/300"
        },
        {
            name: "Arvind Mukhiya",
            role: "Program Manager",
            image: "https://via.placeholder.com/300"
        }
    ]
};

const Team = () => {
    const [selectedTeam, setSelectedTeam] = useState("governingBoard");

    const handleTeamChange = (event) => {
        setSelectedTeam(event.target.value);
    };

    return (
        <div>
            {/* Our Team Background Section */}
            <div className="team-section" style={{ backgroundImage: `url(${teamBackground})` }}>
                <div className="team-overlay">
                    <h1 className="team-title">Our Team</h1>
                </div>
            </div>

            {/* KSS Team Section */}
            <div className="kss-team-section">
                <h2 className="team-heading">Our Awesome Team</h2>
                <p className="team-description">
                    Meet the dedicated members who drive our mission forward.
                </p>
                <div className="dropdown-container">
                    <select value={selectedTeam} onChange={handleTeamChange} className="team-dropdown">
                        <option value="governingBoard">Governing Board</option>
                        <option value="managementTeam">Management Team</option>
                    </select>
                </div>
                <div className="team-grid">
                    {teamData[selectedTeam].map((member, index) => (
                        <div className="team-card" key={index}>
                            <img src={member.image} alt={member.name} className="team-image" />
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
