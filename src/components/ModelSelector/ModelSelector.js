// ModelSelector.js

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { BrandContext } from '../BrandContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ModelSelector.css'; // Ensure this path is correct
import { api } from '../../App';

const ModelSelector = () => {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedBrand, setSelectedModel } = useContext(BrandContext);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (selectedBrand && selectedBrand.name) {
      axios.get(`${api}/api/models/${selectedBrand.name}`)
        .then(response => {
          console.log('API Response:', response.data);
          if (Array.isArray(response.data)) {
            setModels(response.data);
            setFilteredModels(response.data);
            setError('');
          } else {
            setError('Invalid data format');
            console.error('Invalid data format:', response.data);
          }
        })
        .catch(error => {
          setError('Failed to fetch models');
          console.error('Error fetching models:', error);
        });
    }
  }, [selectedBrand]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterModels(e.target.value);
  };

  const filterModels = (term) => {
    if (!term) {
      setFilteredModels(models);
    } else {
      const filtered = models.filter((model) =>
        model.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredModels(filtered);
    }
  };

  const handleModelClick = (model) => {
    setSelectedModel(model);
    localStorage.setItem('selectedModel', JSON.stringify(model)); // Save to local storage
    navigate('/OwnerShipSelector'); // Navigate to the new route, replace '/NextPage' with your desired path
  };

  return (
    <div className='Model'>
    <div className="model-selector-container">
      <div className="shadow-box">
        <h2>Select Your Car Model</h2>
        {error && <div className="error">{error}</div>}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search car models..."
          className="searchBar"
        />
        <div className='model-list-container '>
        <ul className="model-list">
          {filteredModels.length > 0 ? (
            filteredModels.map((model, index) => (
              <li
                key={index}
                className="model-item"
                onClick={() => handleModelClick(model)}
              >
                {model}
              </li>
            ))
          ) : (
            <p>No models available</p>
          )}
        </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ModelSelector;
