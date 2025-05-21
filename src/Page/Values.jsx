import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Values.css";
import Breadcrumb from "../Components/Breadcrumb";
import valueBackground from "../assets/133.jpeg";

const Values = () => {
    const values = [
        {
            icon: "fas fa-shield-alt",
            title: "Integrity",
            description:
                "We conduct all our work with the utmost honesty, transparency, and accountability, maintaining the highest ethical standards."
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
                "We value collaboration and partnerships, knowing that by working together, we can achieve greater impact."
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

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div>
            <div
                className="values-section"
                style={{ backgroundImage: `url(${valueBackground})` }}
            >
                <h1 className="values-title">Our Core Values</h1>
            </div>

            <Breadcrumb />

            <div className="values-content">
                <div className="hover-grid">
                    {values.map((item, idx) => (
                        <div
                            key={idx}
                            className="hover-card"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="hover-bg"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { duration: 0.2 } }}
                                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                    />
                                )}
                            </AnimatePresence>

                            <div className="card-container">
                                <div className="card-content">
                                    <i className={`${item.icon} value-icon`}></i>
                                    <h2 className="card-title">{item.title}</h2>
                                    <p className="card-description">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Values;
