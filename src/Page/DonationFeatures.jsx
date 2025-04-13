import React, { useState } from "react";
import "./DonationFeatures.css";

const DonationFeature = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: "Education for Girls", goal: 5000, raised: 3500 },
        { id: 2, name: "Clean Water Initiative", goal: 8000, raised: 6200 },
        { id: 3, name: "Healthcare Support", goal: 10000, raised: 7200 },
    ]);

    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [donationAmount, setDonationAmount] = useState(100);
    const handleProjectChange = (event) => {
        const project = projects.find((p) => p.id === parseInt(event.target.value));
        setSelectedProject(project);
    };

    const handleDonationChange = (event) => {
        setDonationAmount(parseInt(event.target.value) || 0);
    };
    const handleDonate = () => {
        setProjects((prevProjects) =>
            prevProjects.map((p) =>
                p.id === selectedProject.id
                    ? { ...p, raised: p.raised + donationAmount }
                    : p
            )
        );
        alert(`Thank you for donating ₹${donationAmount} to ${selectedProject.name}!`);
    };

    return (
        <div className="donation-container">
            <h2>Make an Impact</h2>
            <p>Select a project and see how your donation contributes.</p>
            <select value={selectedProject.id} onChange={handleProjectChange}>
                {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                        {project.name}
                    </option>
                ))}
            </select>
            <div className="progress-container">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${(selectedProject.raised / selectedProject.goal) * 100}%`,
                        }}
                    ></div>
                </div>
                <p>
                    Raised: ₹{selectedProject.raised} / Goal: ₹{selectedProject.goal}
                </p>
            </div>
            <div className="donation-input">
                <label>Donation Amount: ₹</label>
                <input
                    type="number"
                    value={donationAmount}
                    onChange={handleDonationChange}
                    min="10"
                />
            </div>
            <button onClick={handleDonate} className="donate-button">
                Donate Now
            </button>
        </div>
    );
};

export default DonationFeature;
