import React from "react";
import "./StorytellingVideos.css";
import playIcon from "../assets/play-icon.svg"; // Play button SVG
import sideDecoration from "../assets/decoration.svg"; // Side decoration SVG

const StorytellingVideos = () => {
    return (
        <div className="video-container">
            {/* Title and Subtitle */}
            <div className="video-header">
                <h2 className="video-title">
                    <span className="highlight">Our</span> Videos
                </h2>
                <p className="video-subtitle">Helping Communities</p>
                <p className="video-description">
                    The organisation is committed to promoting sustainable community development by repositioning women as change makers and fostering collective leadership.
                </p>
            </div>

            {/* Video Section */}
            <div className="video-wrapper">
                {/* Left Decorative SVG */}
                <img src={sideDecoration} alt="Decoration" className="left-svg" />

                {/* Video Thumbnail with Play Button */}
                <div className="video-thumbnail">
                    <img
                        src="https://img.youtube.com/vi/1uLGCUgqDUE/maxresdefault.jpg"
                        alt="Story Video Thumbnail"
                        className="thumbnail-image"
                    />
                    <a
                        href="https://www.youtube.com/watch?v=1uLGCUgqDUE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="play-button"
                    >
                        <img src={playIcon} alt="Play" />
                    </a>
                    <div className="video-text">
                        <h3>Our Story</h3>
                        <p>Against All Odds</p>
                    </div>
                </div>

                {/* Right Decorative SVG */}
                <img src={sideDecoration} alt="Decoration" className="right-svg" />
            </div>
        </div>
    );
};

export default StorytellingVideos;
