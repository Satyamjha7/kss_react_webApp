import React from "react";
import "./OrganisationDocs.css";

import docImage from "../assets/182.jpg"; // Background banner image
import Breadcrumb from "../Components/Breadcrumb";

import pancard from "../assets/PAN.pdf";
import registrationCertificate from "../assets/Society Registration Certificate_KSS.pdf"
import XIIA from "../assets/12A_KSS.pdf"
import EightyG from "../assets/80G_KSS.pdf"
import FCRA from "../assets/FCRA.pdf"
const documents = [
    { name: "PAN CARD", pdf: pancard },
    { name: "Registration Certificate", pdf: registrationCertificate },
    { name: "12A Certificate", pdf: XIIA },
    { name: "80G Certificate", pdf: EightyG },
    { name: "FCRA Certificate", pdf: FCRA },
];

const OrganisationDocs = () => {
    return (
        <div className="organisation-docs-container">
            <div className="docs-banner" style={{ backgroundImage: `url(${docImage})` }}>
                <div className="docs-banner-overlay">
                    <h1 className="docs-banner-title">Organisation Documents</h1>
                </div>
            </div>

            <Breadcrumb />
            <p className="intro-text">Here you can access important documents related to our organization.</p>

            <div className="docs-display">
                {documents.map((doc, index) => (
                    <div className="doc-item" key={index}>
                        <h3 className="doc-title">{doc.name}</h3>
                        <div className="buttons">
                            <a href={doc.pdf} target="_blank" rel="noopener noreferrer" className="view-btn">View</a>
                            <a href={doc.pdf} download className="download-btn">Download</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrganisationDocs;
