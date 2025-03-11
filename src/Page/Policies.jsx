import React from "react";
import "./Policies.css";
import headerImage from "../assets/133.jpeg";

const policies = [
    {
        title: "Privacy Policy",
        description:
            "Our Privacy Policy explains how we collect, use, and protect your personal information.",
        link: "/privacy-policy"
    },
    {
        title: "Terms of Service",
        description:
            "The Terms of Service outline the rules and guidelines for using our services.",
        link: "/terms-of-service"
    },
    {
        title: "Refund Policy",
        description:
            "Our Refund Policy describes the process for requesting a refund.",
        link: "/refund-policy"
    },
    {
        title: "Cookie Policy",
        description:
            "Our Cookie Policy explains how we use cookies and similar technologies.",
        link: "/cookie-policy"
    }
];

const Policies = () => {
    return (
        <div className="policies-container">
            {/* Header Section */}
            <div
                className="policies-header"
                style={{ backgroundImage: `url(${headerImage})` }}
            >
                <div className="policies-header-overlay">
                    <h1 className="policies-title">Our Policies</h1>
                </div>
            </div>

            {/* Description */}
            <p className="policies-intro">
                Learn more about our policies, how we handle your data, and the terms
                and conditions that govern our services.
            </p>

            {/* Policies List */}
            <div className="policies-list">
                {policies.map((policy, index) => (
                    <div key={index} className="policy-item">
                        <h3 className="policy-title">{policy.title}</h3>
                        <p className="policy-description">{policy.description}</p>
                        <a href={policy.link} className="policy-btn">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Policies;
