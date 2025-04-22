import React, { useState } from "react";
import axios from "axios";
import "./Careers.css";
import careersBanner from "../assets/133.jpeg";
/*Openings for Job Roles to display*/
const jobOpenings = [
    {
        title: "Frontend Developer",
        description: "Build and optimize responsive web applications using React and modern JavaScript frameworks.",
        location: "Remote",
        type: "Full-time"
    },
    {
        title: "Backend Developer",
        description: "Design scalable APIs and database architectures with Node.js, Express, and MongoDB.",
        location: "Bangalore, India",
        type: "Full-time"
    },
    {
        title: "UI/UX Designer",
        description: "Create seamless and aesthetically pleasing user experiences for our digital products.",
        location: "Remote",
        type: "Part-time"
    },
    {
        title: "Project Manager",
        description: "Manage agile teams, plan sprints, and ensure project milestones are met.",
        location: "Mumbai, India",
        type: "Full-time"
    },
];

const Careers = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        resume: null
    });

    const [message, setMessage] = useState("");

    const handleApplyClick = (jobTitle) => {
        setSelectedJob(jobTitle);
        setShowForm(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("jobRole", selectedJob);
        formDataToSend.append("resume", formData.resume);

        try {
            await axios.post("http://localhost:5000/api/apply", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            setMessage("Application submitted successfully!");
            setFormData({ name: "", email: "", phone: "", resume: null });
            setShowForm(false);
        } catch (error) {
            setMessage("Submission failed. Please try again.");
        }
    };

    return (
        <div className="careers-container">
            {/* Banner Section */}
            <div className="careers-banner" style={{ backgroundImage: `url(${careersBanner})` }}>
                <div className="careers-banner-overlay">
                    <h1 className="careers-banner-title">Join Our Team</h1>
                </div>
            </div>

            <p className="intro-text">Explore exciting job opportunities and be part of our dynamic team.</p>

            {/* Job Listings */}
            <div className="job-listings">
                {jobOpenings.map((job, index) => (
                    <div className="job-item" key={index}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        <span className="job-details">{job.location} | {job.type}</span>
                        <button className="apply-btn" onClick={() => handleApplyClick(job.title)}>Apply Now</button>
                    </div>
                ))}
            </div>

            {/* Application Form (Shown on Apply Button Click) */}
            {showForm && (
                <div className="application-form">
                    <h2>Apply for {selectedJob}</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                        <button type="submit">Submit Application</button>
                    </form>
                    {message && <p className="message">{message}</p>}
                </div>
            )}
        </div>
    );
};

export default Careers;
