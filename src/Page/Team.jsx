import React from "react";
import "./Team.css";
import { FaMale, FaFemale } from "react-icons/fa";

const teamMembers = [
    { name: "Amit Kumar", role: "Project Manager", gender: "male" },
    { name: "Neha Sharma", role: "Field Coordinator", gender: "female" },
    { name: "Rajesh Verma", role: "Finance Officer", gender: "male" },
    { name: "Pooja Singh", role: "Community Organizer", gender: "female" },
    { name: "Suresh Patel", role: "Program Director", gender: "male" },
    { name: "Anita Devi", role: "Education Specialist", gender: "female" },
    { name: "Vikram Mehta", role: "Health & Nutrition Expert", gender: "male" },
    { name: "Ritu Yadav", role: "Livelihood Coordinator", gender: "female" },
    { name: "Alok Tiwari", role: "Environmental Expert", gender: "male" },
];

const Team = () => {
    return (
        <div className="team-container">
            <h2 className="team-title">Meet Our Team</h2>
            <p className="team-subtitle">
                Dedicated professionals working towards a better future.
            </p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="icon-container">
                            {member.gender === "male" ? (
                                <FaMale className="team-icon male" />
                            ) : (
                                <FaFemale className="team-icon female" />
                            )}
                        </div>
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
