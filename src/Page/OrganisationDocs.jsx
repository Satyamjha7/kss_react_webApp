import React from "react";
import "./OrganisationDocs.css";

import docImage from "../assets/182.jpg";
import Breadcrumb from "../Components/Breadcrumb";

import pancard from "../assets/PAN.pdf";
import tan from "../assets/TAN.pdf"
import registrationCertificate from "../assets/Society Registration Certificate_KSS.pdf"
import XIIA from "../assets/12A_KSS.pdf"
import EightyG from "../assets/80G_KSS.pdf"
import FCRA from "../assets/FCRA.pdf"
import FCRA_renewal from "../assets/FCRA Renewal-Certificate.pdf"
import icon1 from "../assets/doc.png"


const documents = [
    { name: "PAN", pdf: pancard },
    { name: "TAN", pdf: tan },
    { name: "Registration Certificate", pdf: registrationCertificate },
    { name: "12A Certificate", pdf: XIIA },
    { name: "80G Certificate", pdf: EightyG },
    { name: "FCRA Certificate", pdf: FCRA },
    { name: "FCRA Renewal", pdf: FCRA_renewal },
    { name: "CSR-1", pdf: FCRA_renewal },
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
            <h2 className="org-title">Documents</h2>
            <p className="intro-text">Here you can access important documents related to our organization.</p>

            <div className="docs-display">
                {documents.map((doc, index) => (
                    <div className="doc-item" key={index}>
                        <img src={icon1} alt="Organization Logo" className="org-logo" />
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
