import React from "react";
import "./ThematicAreas.css";

const ThematicAreas = () => {
    return (
        <section className="thematic-section">
            <h2><span>What</span> We Do</h2>
            <p className="subtitle">Our Key Thematic Areas</p>
            <div className="image-wrapper">
                <img
                    src="src\assets\Key.png"
                    alt="Thematic Areas in Red Theme"
                    className="thematic-image"
                />
            </div>
        </section>
    );
};

export default ThematicAreas;
