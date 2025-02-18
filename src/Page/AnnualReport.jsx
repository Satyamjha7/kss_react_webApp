import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './AnnualReport.css';

const AnnualReport = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // URL or path to the PDF file
    const pdfUrl = '/path/to/annual-report.pdf';

    return (
        <div className="annual-report">
            <h1>Annual Report</h1>
            <div className="pdf-viewer">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
                </Worker>
            </div>
            <div className="download-link">
                <a href={pdfUrl} download="annual-report.pdf">
                    Download Annual Report
                </a>
            </div>
        </div>
    );
};

export default AnnualReport;