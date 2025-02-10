import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHandHolding, FaUsers, FaLightbulb, FaHandsHelping } from "react-icons/fa";
import "./Values.css";

const coreValues = [
    { icon: <FaShieldAlt />, title: "Integrity", description: "We conduct all our work with honesty, transparency, and accountability, maintaining the highest ethical standards." },
    { icon: <FaHandHolding />, title: "Empowerment", description: "We believe in empowering individuals and communities to become self-sufficient and lead their own development." },
    { icon: <FaUsers />, title: "Collaboration", description: "We value partnerships, as we know that by working together, we can achieve greater impact." },
    { icon: <FaLightbulb />, title: "Innovation", description: "We continuously seek creative and innovative solutions to address complex challenges effectively." },
    { icon: <FaHandsHelping />, title: "Inclusivity", description: "We respect diversity, ensuring that everyone's voice is heard and valued." },
];

const CoreValues = () => {
    return (
        <motion.div
            className="core-values-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h1 className="title">Our Core Values</h1>
            <div className="values-tree">
                {coreValues.map((value, index) => (
                    <motion.div
                        key={index}
                        className="value-card"
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="icon">{value.icon}</div>
                        <h2>{value.title}</h2>
                        <p>{value.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default CoreValues;
