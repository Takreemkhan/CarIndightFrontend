import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { BrandContext } from '../BrandContext'; // Adjust the import path if necessary
import './OwnershipSelector.css'; // Ensure this path is correct

const OwnershipSelector = () => {
  const { setSelectedOwnership } = useContext(BrandContext); // Extract from context
  const navigate = useNavigate(); // Initialize navigate function

  const handleOwnershipClick = (ownership) => {
    setSelectedOwnership(ownership); // Use context function to set selected ownership
    localStorage.setItem('selectedOwnership', JSON.stringify(ownership)); // Save to local storage
    navigate('/KmDrivenSelector'); // Navigate to the new route, replace with your desired path
  };

  return (
    <div className="ownership-selector-container">
      <div className="shadow-box">
        <h2>Select Car Ownership</h2>
        <ul className="ownership-list">
          {['1st owner', '2nd owner', '3rd owner', '4th owner', '5th owner'].map((ownership, index) => (
            <li
              key={index}
              className="ownership-item"
              onClick={() => handleOwnershipClick(ownership)}
            >
              {ownership}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OwnershipSelector;
