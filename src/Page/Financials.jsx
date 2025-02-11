import React, { useState } from "react";
import { FaFilePdf, FaDownload, FaUpload, FaEye } from "react-icons/fa";
import "./Financials.css";

const initialDocs = [
    { title: "Annual Report 2023", file: "annual_report_2023.pdf" },
    { title: "Audit Statement 2023", file: "audit_statement_2023.pdf" },
    { title: "Income & Expense Report", file: "income_expense_2023.pdf" },
];

const Financials = () => {
    const [documents, setDocuments] = useState(initialDocs);

    const handleDownload = (fileName) => {
        const link = document.createElement("a");
        link.href = `/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePreview = (fileName) => {
        window.open(`/${fileName}`, "_blank");
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setDocuments([...documents, { title: file.name, file: file.name }]);
        }
    };

    return (
        <div className="financials-container">
            <h1 className="financial-title">Financials & Accounts</h1>
            <p className="financial-subtitle">Ensuring transparency and accountability in our financials.</p>
            <div className="documents-list">
                {documents.map((doc, index) => (
                    <div key={index} className="doc-card">
                        <FaFilePdf className="doc-icon" />
                        <h3>{doc.title}</h3>
                        <div className="buttons">
                            <button className="preview-btn" onClick={() => handlePreview(doc.file)}>
                                <FaEye /> Preview
                            </button>
                            <button className="download-btn" onClick={() => handleDownload(doc.file)}>
                                <FaDownload /> Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Financials;
