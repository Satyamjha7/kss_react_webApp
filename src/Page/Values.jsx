import React from "react";
import "./Values.css";
import valueBackground from "../assets/133.jpeg";

const Values = () => {
    const values = [
        {
            icon: "fas fa-shield-alt",
            title: "Integrity",
            description:
                "We conduct all our work with the utmost honesty, transparency, and accountability, maintaining the highest ethical standards in everything we do."
        },
        {
            icon: "fas fa-hand-holding",
            title: "Empowerment",
            description:
                "We believe in empowering individuals and communities to become self-sufficient and lead their own development."
        },
        {
            icon: "fas fa-users",
            title: "Collaboration",
            description:
                "We value collaboration and partnerships, as we know that by working together, we can achieve greater impact."
        },
        {
            icon: "fas fa-lightbulb",
            title: "Innovation",
            description:
                "We continuously seek creative and innovative solutions to address complex challenges effectively."
        },
        {
            icon: "fas fa-hands-helping",
            title: "Inclusivity",
            description:
                "We are committed to inclusivity, respecting diversity, and ensuring that everyone's voice is heard and valued."
        }
    ];

    return (
        <div>
            <div className="values-section" style={{ backgroundImage: `url(${valueBackground})` }}>
                <h1 className="values-title">Our Core Values</h1>
            </div>
            <div className="values-content">
                <ul className="values-list">
                    {values.map((value, index) => (
                        <li key={index} className="value-item">
                            <i className={`${value.icon} value-icon`}></i>
                            <h2>{value.title}</h2>
                            <p>{value.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Values;
