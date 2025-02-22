import React, { useState } from "react";
import "./Team.css";
import Breadcrumb from "../Components/Breadcrumb";
import teamBackground from "../assets/114.jpeg";

const teamData = {
    governingBoard: [
        {
            name: "Rajendra Jha",
            role: "Secretary",
            image: "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg"
        },
        {
            name: "Vidyapati Chaudhary",
            role: "Vice Chairperson",
            image: "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg"
        },
        {
            name: "Laturan Das",
            role: "Vice Chairperson",
            image: "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg"
        },
        {
            name: "Laturan Das",
            role: "Vice Chairperson",
            image: "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg"
        },
        {
            name: "Laturan Das",
            role: "Vice Chairperson",
            image: "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg"
        },
        {
            name: "Laturan Das",
            role: "Vice Chairperson",
            image: "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg"
        },
    ],
    managementTeam: [
        {
            name: "Samol Kumar Pathak",
            role: "Executive Director",
            image: "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg"
        },
        {
            name: "Arvind Mukhiya",
            role: "Program Manager",
            image: "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg"
        },
        {
            name: "Arvind Mukhiya",
            role: "Program Manager",
            image: "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg"
        }
    ]
};

const Team = () => {
    const [selectedTeam, setSelectedTeam] = useState("governingBoard");

    const handleTeamChange = (team) => {
        setSelectedTeam(team);
    };

    return (
        <div>
            {/* Our Team Background Section */}
            <div className="team-section" style={{ backgroundImage: `url(${teamBackground})` }}>
                <div className="team-overlay">
                    <h1 className="team-title">Our Team</h1>
                </div>
            </div>
            <Breadcrumb/>
            {/* KSS Team Section */}
            <div className="kss-team-section">
                <h2 className="team-heading">Behind the Scenes</h2>
                <p className="team-description">
                    Meet the passionate and dedicated group of individuals committed to driving positive change and transforming the lives of the underprivileged communities in North Bihar, India. Led by experienced and visionary leaders, the team is driven by the organization's mission and strives to make a significant impact in the regions where we operate.

                </p>
                <div className="team-headings">
                    <h3
                        className={`team-option ${selectedTeam === "governingBoard" ? "active" : ""}`}
                        onClick={() => handleTeamChange("governingBoard")}
                    >
                        Governing Board
                    </h3>
                    <h3
                        className={`team-option ${selectedTeam === "managementTeam" ? "active" : ""}`}
                        onClick={() => handleTeamChange("managementTeam")}
                    >
                        Management Team
                    </h3>
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