import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGavel, FaBalanceScale, FaHandshake, FaChild, FaMoneyBillWave, FaUsers, FaFileAlt } from "react-icons/fa";
import { saveAs } from "file-saver";
import "./Policies.css";

const policies = [
    {
        icon: <FaGavel />,
        title: "Governance Policy",
        description: "Ensures transparency and accountability in NGO leadership.",
        file: "governance_policy.pdf"
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Financial Transparency",
        description: "Regular audits, donation tracking, and ethical fund management.",
        file: "financial_transparency.pdf"
    },
    {
        icon: <FaBalanceScale />,
        title: "Code of Conduct",
        description: "Defines ethical standards for staff, volunteers, and partners.",
        file: "code_of_conduct.pdf"
    },
    {
        icon: <FaChild />,
        title: "Child Protection Policy",
        description: "Guidelines ensuring child safety and rights in NGO activities.",
        file: "child_protection.pdf"
    },
    {
        icon: <FaHandshake />,
        title: "Volunteer & HR Policy",
        description: "Recruitment, training, and ethical guidelines for volunteers and staff.",
        file: "volunteer_hr.pdf"
    },
    {
        icon: <FaUsers />,
        title: "Diversity & Inclusion",
        description: "Promoting equal opportunities and an inclusive work culture.",
        file: "diversity_inclusion.pdf"
    },
    {
        icon: <FaFileAlt />,
        title: "Data Protection & Privacy",
        description: "Responsible handling of sensitive data and confidentiality.",
        file: "data_protection.pdf"
    },
];

const Policies = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleDownload = (fileName) => {
        saveAs(`/${fileName}`, fileName);
    };

    return (
        <motion.div
            className="policies-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h1 className="title">Policies Adopted by Kosi Seva Sadan</h1>
            <div className="policies-grid">
                {policies.map((policy, index) => (
                    <motion.div
                        key={index}
                        className="policy-card"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => toggleExpand(index)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="icon">{policy.icon}</div>
                        <h2>{policy.title}</h2>
                        <p>{expandedIndex === index ? policy.description : "Click to learn more"}</p>
                        {expandedIndex === index && (
                            <motion.button
                                className="download-btn"
                                onClick={() => handleDownload(policy.file)}
                                whileHover={{ scale: 1.1 }}
                            >
                                <FaDownload /> Download
                            </motion.button>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Policies;
