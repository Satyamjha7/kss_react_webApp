import React from "react";
import "./FCRA.css";

import fcraImage from "../assets/182.jpg"; // Same background image as Annual Report
import Breadcrumb from "../Components/Breadcrumb";

const FCRA = () => {
    return (
        <div className="fcra-container">
            <div className="fcra-banner" style={{ backgroundImage: `url(${fcraImage})` }}>
                <div className="fcra-banner-overlay">
                    <h1 className="fcra-banner-title">FCRA Compliance</h1>
                </div>
            </div>

            <Breadcrumb />
            <p className="intro-text">Details about our Foreign Contribution Regulation Act (FCRA) compliance and reports.</p>

            <div className="fcra-content">
                <h2>Our FCRA Compliance</h2>
                <p>
                    We ensure transparency and accountability in our financial dealings through strict adherence to FCRA guidelines.
                    Below, you can find our FCRA-related documents and compliance reports.
                </p>

                <div className="fcra-documents">
                    <div className="fcra-item">
                        <h3>FCRA Report 2022-23</h3>
                        <a href="/path/to/fcra-2022-23.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">View</a>
                        <a href="/path/to/fcra-2022-23.pdf" download className="download-btn">Download</a>
                    </div>

                    <div className="fcra-item">
                        <h3>FCRA Report 2021-22</h3>
                        <a href="/path/to/fcra-2021-22.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">View</a>
                        <a href="/path/to/fcra-2021-22.pdf" download className="download-btn">Download</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FCRA;
