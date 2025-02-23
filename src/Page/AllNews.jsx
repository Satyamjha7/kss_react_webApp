import React from 'react';
import './AllNews.css';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const AllNews = () => {
    const newsData = [
        {
            image: img1,
            title: "Empowering Women through Skill Development",
            description: "Kosi Seva Sadan conducts a workshop to empower women with sustainable skills.",
            fullContent: "Full details about the workshop and its impact on women."
        },
        {
            image: img2,
            title: "Educational Support for Underprivileged Children",
            description: "Continuing the mission of spreading education to every child.",
            fullContent: "Detailed information about the educational support initiative."
        },
        {
            image: img3,
            title: "Healthcare Camp in Rural Villages",
            description: "Free medical check-ups and health awareness programs organized.",
            fullContent: "Complete overview of the healthcare camp and its outreach."
        },
        {
            image: img3,
            title: "Healthcare Camp in Rural Villages",
            description: "Free medical check-ups and health awareness programs organized.",
            fullContent: "Complete overview of the healthcare camp and its outreach."
        },
        {
            image: img3,
            title: "Healthcare Camp in Rural Villages",
            description: "Free medical check-ups and health awareness programs organized.",
            fullContent: "Complete overview of the healthcare camp and its outreach."
        },
        {
            image: img3,
            title: "Healthcare Camp in Rural Villages",
            description: "Free medical check-ups and health awareness programs organized.",
            fullContent: "Complete overview of the healthcare camp and its outreach."
        },
        {
            image: img3,
            title: "Healthcare Camp in Rural Villages",
            description: "Free medical check-ups and health awareness programs organized.",
            fullContent: "Complete overview of the healthcare camp and its outreach."
        },
        {
            image: img3,
            title: "Healthcare Camp in Rural Villages",
            description: "Free medical check-ups and health awareness programs organized.",
            fullContent: "Complete overview of the healthcare camp and its outreach."
        },
        {
            image: img3,
            title: "Healthcare Camp in Rural Villages",
            description: "Free medical check-ups and health awareness programs organized.",
            fullContent: "Complete overview of the healthcare camp and its outreach."
        },
    ];

    return (
        <section className="all-news-section">
            <h2 className="news-heading">All News</h2>
            <div className="all-news-container">
                {newsData.map((news, index) => (
                    <div key={index} className="news-card">
                        <img src={news.image} alt={news.title} className="news-image" />
                        <div className="news-content">
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllNews;
