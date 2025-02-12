import React, { useState, useEffect } from 'react';
import './Hero.css';

const Home = () => {
  const slides = [
    {
      img: '/images/img1.jpeg',
      message: 'Empowering Communities with Unity',
      description: 'Support the children and families in rural India for a brighter future.',
    },
    {
      img: '/images/img2.jpeg',
      message: 'Connecting People, Creating Change',
      description: 'Your support helps us create better lives for the villagers in need.',
    },
    {
      img: '/images/img3.jpeg',
      message: 'Data-Driven Solutions for Impactful Change',
      description: 'Help us make informed decisions to serve the communities better.',
    },
    {
      img: '/images/img4.jpeg',
      message: 'Data-Driven Solutions for Impactful Change',
      description: 'Help us make informed decisions to serve the communities better.',
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
      {}
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider ${currentSlide === index ? 'current-slide' : ''}`}
            style={{
              backgroundImage: `url(${slide.img})`,
            }}
          >
            <div className="slider-content">
              <h1>{slide.message}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {}
      <button className="slider-arrow left" onClick={handlePrev}>❮</button>
      <button className="slider-arrow right" onClick={handleNext}>❯</button>

      {}

      {}
      <section className="cta">
        <h2>Make a Lasting Impact on Rural Communities</h2>
        <p>Your donations empower change and provide hope to families in need.</p>
        <a href="#donate" className="cta-btn">Donate Now</a>
      </section>
    </div>
  );
};

export default Home;
