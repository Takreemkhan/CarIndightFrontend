// src/components/SellingPricePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellingPricePage.css'; // Import CSS module

const SellingPricePage = () => {
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleConfirm = () => {
    // Store the price for future use
    localStorage.setItem('sellingPrice', price);
    // Navigate to another page (replace '/next-page' with the actual path)
    navigate('/upload');
  };

  return (
    <div className="sellingPriceContainer">
      <div className="shadowBox">
        <h2>Enter Your Selling Price</h2>
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="Enter price"
          className="priceInput"
        />
        <button onClick={handleConfirm} className="confirmButton">
          Confirm
        </button>
        <img 
          src="https://www.shutterstock.com/image-photo/portrait-successful-cheerful-young-man-260nw-2172957807.jpg" 
          alt="Success"
          className="successImage"
        />
      </div>
    </div>
  );
};

export default SellingPricePage;
