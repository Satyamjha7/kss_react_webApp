import React, { useState, useEffect } from "react";
import "./Home.css";
import Mission from "./Mission";
import ImpactSection from "./ImpactSection";
import Subscription from './Subscription';
import LatestNews from './LatestNews';
import TestimonialCarousel from "./TestimonialCarousel";
import StorytellingVideos from "./StoryTellingVideos";
import DonateButton from "../Components/DonateButton";
import Notes from "./Notes";
import PartnersCarousel from "./PartnersCarousel";

const Home = () => {
  const slides = [
    {
      img: "/images/img1.jpeg",
      heading: "HELP US TO SAVE THE",
      highlight: "HOMELESS PEOPLE",
      description:
        "Your support helps us create better lives for the villagers in need.",
    },
    {
      img: "/images/img2.jpeg",
      heading: "TOGETHER, WE CAN",
      highlight: "MAKE A DIFFERENCE",
      description: "Join our mission to uplift underprivileged communities.",
    },
    {
      img: "/images/img3.jpeg",
      heading: "PROVIDING HOPE FOR",
      highlight: "A BRIGHTER FUTURE",
      description: "Empowering children and families through education.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="home-container">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider ${currentSlide === index ? "current-slide" : ""}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="overlay"></div>
            <div className="slider-content">
              <h1>
                {slide.heading} <span>{slide.highlight}</span>
              </h1>
              <p>{slide.description}</p>
              <div className="slider-buttons">
                <a href="#learn-more" className="btn learn-more">Learn More</a>
                <a href="#join-us" className="btn join-us">Join Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-arrow left" onClick={handlePrev}>❮</button>
      <button className="slider-arrow right" onClick={handleNext}>❯</button>
      <Notes />
      <Mission />
      <ImpactSection />
      <DonateButton />
      <StorytellingVideos />
      <LatestNews />
      <Subscription />
      <TestimonialCarousel />
      <PartnersCarousel />
    </div>
  );
};

export default Home;
