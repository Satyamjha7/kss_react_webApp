import React from "react";
import "./AnnualReport.css";

import report2018 from "../assets/ANNUAL REPORT 2017-2018-thumbnail.jpg";
import report2019 from "../assets/ANNUAL REPORT 2018-2019-thumbnail.jpg";
import report2020 from "../assets/ANNUAL REPORT 2019-2020-thumbnail.jpg";

import pdf2018 from "../assets/ANNUAL REPORT 2017-2018.pdf";
import pdf2019 from "../assets/ANNUAL REPORT 2018-2019.pdf";
import pdf2020 from "../assets/ANNUAL REPORT 2019-2020.pdf";

import annualImage from "../assets/182.jpg";

import Breadcrumb from "../Components/Breadcrumb";

const reports = [
    { year: "2017-18", image: report2018, pdf: pdf2018 },
    { year: "2018-19", image: report2019, pdf: pdf2019 },
    { year: "2019-20", image: report2020, pdf: pdf2020 },
];

const AnnualReport = () => {
    return (
        <div className="annual-report-container">
            <div className="annual-banner" style={{ backgroundImage: `url(${annualImage})` }}>
                <div className="annual-banner-overlay">
                    <h1 className="annual-banner-title">Annual Reports</h1>
                </div>
            </div>
            <Breadcrumb />
            <p className="intro-text">
                Explore our journey, impact, and progress over the years.
            </p>
            <div className="annual-report-display">
                {reports.map((report, index) => (
                    <div className="report-item" key={index}>
                        <img src={report.image} alt={`Annual Report ${report.year}`} className="report-thumbnail" />
                        <h3 className="report-title">Annual Report {report.year}</h3>
                        <div className="buttons">
                            <a href={report.pdf} target="_blank" rel="noopener noreferrer" className="view-btn">View</a>
                            <a href={report.pdf} download className="download-btn">Download</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnnualReport;
