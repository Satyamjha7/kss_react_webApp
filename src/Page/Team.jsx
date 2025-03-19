import React, { useState } from "react";
import "./Team.css";
import Breadcrumb from "../Components/Breadcrumb";
import teamBackground from "../assets/114.jpeg";

const teamData = {
    governingBoard: [
        {
            name: "Rajendra Jha",
            role: "Secretary",
            bio: "Rajendra Jha has 10 years of experience in leadership and development. He has worked with multiple NGOs and government bodies to create sustainable impact in rural communities.",
            image:
                "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg",
        },
        {
            name: "Vidyapati Chaudhary",
            role: "Vice Chairperson",
            bio: "Vidyapati Chaudhary is an expert in public administration and social services. He has led several community-based programs across North Bihar.",
            image:
                "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg",
        },
        {
            name: "Laturan Das",
            role: "Vice Chairperson",
            bio: "Laturan Das brings over 15 years of experience in social work, focusing on improving healthcare access in rural areas.",
            image:
                "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg",
        },
    ],
    managementTeam: [
        {
            name: "Samol Kumar Pathak",
            role: "Executive Director",
            bio: "Samol Kumar Pathak has played a pivotal role in strategizing and implementing NGO policies to achieve significant social impact.",
            image:
                "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg",
        },
        {
            name: "Arvind Mukhiya",
            role: "Program Manager",
            bio: "Arvind Mukhiya has extensive experience in managing development projects, with a focus on community participation and engagement.",
            image:
                "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg",
        },
    ],
};

const Team = () => {
    const [selectedTeam, setSelectedTeam] = useState("governingBoard");

    const handleTeamChange = (team) => {
        setSelectedTeam(team);
    };

    return (
        <div>
            {/* ✅ Our Team Background Section */}
            <div
                className="team-section"
                style={{ backgroundImage: `url(${teamBackground})` }}
            >
                <div className="team-overlay">
                    <h1 className="team-title">Our Board</h1>
                </div>
            </div>

            <Breadcrumb />

            {/* ✅ KSS Team Section */}
            <div className="kss-team-section">
                <h2 className="team-heading">Meet Our Leaders</h2>
                <p className="team-description">
                    Our board members are dedicated professionals who bring expertise,
                    experience, and leadership to our mission of improving lives.
                </p>

                {/* ✅ Team Switcher */}
                <div className="team-headings">
                    <h3
                        className={`team-option ${selectedTeam === "governingBoard" ? "active" : ""
                            }`}
                        onClick={() => handleTeamChange("governingBoard")}
                    >
                        Governing Board
                    </h3>
                    <h3
                        className={`team-option ${selectedTeam === "managementTeam" ? "active" : ""
                            }`}
                        onClick={() => handleTeamChange("managementTeam")}
                    >
                        Management Team
                    </h3>
                </div>

                {/* ✅ Team Grid */}
                <div className="team-grid">
                    {teamData[selectedTeam].map((member, index) => (
                        <div className="team-card" key={index}>
                            <img src={member.image} alt={member.name} className="team-image" />
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <p className="team-bio">{member.bio}</p>
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
