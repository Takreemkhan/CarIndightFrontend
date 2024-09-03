// Slider.js
import React, { useState } from 'react';
import './Slider.css'; // Import custom CSS for styling

import slider1 from './Images/slider1.jpg';
import slider2 from './Images/slider2.jpg';
import slider3 from './Images/slider3.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
   slider1
  ];

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slider-image" />
      </div>
      <div className="slider-controls">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`slider-control ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
