import { useState } from "react";
import "./Gallery.css";
import Breadcrumb from "../Components/Breadcrumb";
import galleryBackground from "../assets/gallery.jpg";

const galleryImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpeg",
    "/images/8.JPG",
    "/images/9.jpeg",
    "/images/10.JPG",
    "/images/11.jpeg",
    "/images/12.JPG",
    "/images/13.JPG",
    "/images/14.JPG",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/18.jpg",
    "/images/19.jpg",
    "/images/20.jpg",
    "/images/21.jpg",
    "/images/22.jpg",
    "/images/23.jpeg",
    "/images/24.jpeg",
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [visibleImages, setVisibleImages] = useState(12);

    const handleViewMore = () => {
        setVisibleImages((prev) => prev + 12);
    };

    return (
        <>
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
            <div className="gallery-container">
                <h1 className="photos-title">Photos</h1>
                <div className="gallery-grid">
                    {galleryImages.slice(0, visibleImages).map((image, index) => (
                        <div
                            key={index}
                            className="gallery-card"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                {visibleImages < galleryImages.length && (
                    <button className="view-more-btn" onClick={handleViewMore}>
                        View More
                    </button>
                )}

                {selectedIndex !== null && (
                    <div className="fullscreen-overlay">
                        <button
                            className="prev-button"
                            onClick={() =>
                                setSelectedIndex(
                                    (selectedIndex - 1 + galleryImages.length) % galleryImages.length
                                )
                            }
                        >
                            &#10094;
                        </button>
                        <button className="close-button" onClick={() => setSelectedIndex(null)}>
                            &times;
                        </button>
                        <img
                            src={galleryImages[selectedIndex]}
                            alt="Full Screen"
                            className="fullscreen-image"
                        />
                        <button
                            className="next-button"
                            onClick={() =>
                                setSelectedIndex(
                                    (selectedIndex + 1) % galleryImages.length
                                )
                            }
                        >
                            &#10095;
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
