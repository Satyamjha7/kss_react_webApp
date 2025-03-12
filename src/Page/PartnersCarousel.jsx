import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartnersCarousel.css";

// Sample partner data
const partners = [
    {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        link: "https://www.google.com"
    },
    {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        link: "https://www.microsoft.com"
    },
    {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        link: "https://www.amazon.com"
    },
    {
        name: "Facebook",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        link: "https://www.facebook.com"
    },
    {
        name: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        link: "https://www.apple.com"
    }
];

const PartnersCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of logos to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="partners-carousel-container">
            <h2 className="carousel-title">Our Partners</h2>
            <Slider {...settings}>
                {partners.map((partner, index) => (
                    <div key={index} className="partner-item">
                        <a href={partner.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="partner-logo"
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PartnersCarousel;
