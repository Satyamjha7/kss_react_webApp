import React from "react";
import "./UnderMaintenance.css";
import maintenanceImage from "../assets/maintenance.png";

const UnderMaintenance = () => {
    return (
        <div className="maintenance-container">
            <img src={maintenanceImage} alt="Under Maintenance" className="maintenance-img" />
            <h1>We are Under Maintenance</h1>
            <p>We’ll be back soon with exciting updates!</p>
            <a href="/" className="home-btn">Go Back to Home</a>
        </div>
    );
};

export default UnderMaintenance;
