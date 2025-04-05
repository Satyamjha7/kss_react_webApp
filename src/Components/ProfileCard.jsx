import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Styles.css";

const ProfileCard = ({ member }) => {
    return (
        <div className="profile-card">
            <div className="profile-image">
                <img src={member.image} alt={member.name} />
            </div>
            <div className="profile-info">
                <h3 className="profile-name">{member.name}</h3>
                <div className="divider"></div>
                <p className="profile-role">{member.role}</p>
                <p className="profile-description">{member.description}</p>

                {/* ✅ Social Icons */}
                <div className="social-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaInstagram /></a>
                </div>

                {/* ✅ Read More Button */}
                <button className="read-more-btn">Read More</button>
            </div>
        </div>
    );
};

export default ProfileCard;
