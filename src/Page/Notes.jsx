import React from "react";
import "./Notes.css";
import secretaryImage from "../assets/secretary.jpg";

const Notes = () => {
    return (
        <div className="notes-container">
            <div className="notes-content">
                <img src={secretaryImage} alt="Secretary" className="secretary-img" />
                <div className="notes-text">
                    <h2>Message from the Secretary</h2>
                    <p>
                        Welcome to our organization's journey. Our mission is to serve and empower the community
                        through various initiatives. We believe in creating opportunities, fostering growth, and making
                        a lasting impact. Together, we can build a brighter future.
                    </p>
                    <p>
                        Thank you for your support and dedication. Let's continue working towards our shared vision
                        and create meaningful change.
                    </p>
                    <h3>- [Secretary's Name]</h3>
                </div>
            </div>
        </div>
    );
};

export default Notes;
