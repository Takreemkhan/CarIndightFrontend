import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KmDrivenSelector.css'; // Ensure this path is correct

const KmDrivenSelector = () => {
  const [selectedKm, setSelectedKm] = useState(null); // Define the state with useState
  const navigate = useNavigate();

  const kmRanges = [
    '0 Km - 10,000 Km',
    '10,000 Km - 20,000 Km',
    '20,000 Km - 30,000 Km',
    '30,000 Km - 40,000 Km',
    '40,000 Km - 50,000 Km',
    '50,000 Km - 60,000 Km',
    '60,000 Km - 70,000 Km',
    '70,000 Km - 80,000 Km',
    '80,000 Km - 90,000 Km',
    '90,000 Km - 1,00,000 Km',
    '1,00,000 Km - 1,20,000 Km',
    '1,20,000 Km - 1,50,000 Km',
    '1,50,000 Km or more'
  ];

  const handleKmClick = (kmRange) => {
    setSelectedKm(kmRange);
    localStorage.setItem('selectedKm', JSON.stringify(kmRange)); // Save to local storage
    navigate('/CityStateSelector'); // Replace with the actual path
  };

  return (
    <div className="km-driven-selector-container">
      <div className="shadow-box">
        <h2>Select KM Driven</h2>
        <div className='km-list-container'>
          <ul className="km-list">
            {kmRanges.map((kmRange, index) => (
              <li
                key={index}
                className={`km-item ${selectedKm === kmRange ? 'selected' : ''}`} // Add selected class if necessary
                onClick={() => handleKmClick(kmRange)}
              >
                {kmRange}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KmDrivenSelector;
