// src/components/CityStateSelector.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Updated import
import './CityStateSelector.css'; // Ensure this path is correct
import { api } from '../../App';
const CityStateSelector = () => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Updated hook

  useEffect(() => {
    // Fetch cities from the API
    axios.get(`${api}/api/cities`)
      .then(response => {
        const data = response.data;
        console.log('API Response:', data); // Debugging line
        if (Array.isArray(data) && data.every(item => item.city)) {
          setCities(data);
          setFilteredCities(data); // Initialize filteredCities with all cities
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Filter cities based on search term
    const filtered = cities.filter(city =>
      city.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [searchTerm, cities]);

  const handleCityClick = (city) => {
    localStorage.setItem('selectedCity', city.city);
    navigate('/SellingPricePage'); // Updated to use navigate
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="city-state-selector-container">
      <div className="shadow-box">
        <h2>Select City</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search cities..."
          className="search_bar"
        />
        <div className='city-list-container'>
        <div className="city-list">
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <div
                key={index}
                className="city-item"
                onClick={() => handleCityClick(city)}
              >
                {city.city}
              </div>
            ))
          ) : (
            <p>No cities available</p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CityStateSelector;
