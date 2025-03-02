import { useState } from "react";
import "./Gallery.css";
import Breadcrumb from "../Components/Breadcrumb";
import galleryBackground from "../assets/163.jpg";

const galleryImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/6.jpg",
    "/images/6.jpg",
    "/images/6.jpg",
    "/images/6.jpg",
    "/images/6.jpg",
    "/images/6.jpg",
    
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <>
            {/* Background Banner Section */}
            <div className="background-grad">
                <div
                    className="gallery-banner"
                    style={{ backgroundImage: `url(${galleryBackground})` }}
                >
                    <div className="gallery-banner-overlay">
                        <h1 className="gallery-title">Gallery</h1>
                    </div>
                </div>
            </div>

            <Breadcrumb />

            {/* Gallery Section */}
            <div className="gallery-container">
                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="gallery-card"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
                        </div>
                    ))}
                </div>

                {selectedIndex !== null && (
                    <div className="fullscreen-overlay">
                        <button
                            className="prev-button"
                            onClick={() => setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)}
                        >
                            &#10094;
                        </button>
                        <button className="close-button" onClick={() => setSelectedIndex(null)}>
                            &times;
                        </button>
                        <img src={galleryImages[selectedIndex]} alt="Full Screen" className="fullscreen-image" />
                        <button
                            className="next-button"
                            onClick={() => setSelectedIndex((selectedIndex + 1) % galleryImages.length)}
                        >
                            &#10095;
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
