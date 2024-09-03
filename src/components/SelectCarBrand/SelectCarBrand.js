import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SelectCarBrand.css'; // Ensure this path is correct
import { BrandContext } from '../BrandContext';
import { api } from '../../App';
const SelectCarBrand = () => {
  const [carBrands, setCarBrands] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function
  const { setSelectedBrand } = useContext(BrandContext); 

  useEffect(() => {
    // Fetch car brands from the backend
    axios.get(`${api}/api/car-brands/car-brands`)
      .then(response => {
        console.log('API Response:', response.data); // Log API response
        setCarBrands(response.data); // Update state with fetched data
        setFilteredBrands(response.data); // Set filtered brands to all initially
      })
      .catch(error => console.error('Error fetching car brands:', error)); // Handle errors
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    // Filter brands based on the search term
    const results = carBrands.filter(brand =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBrands(results);
  }, [searchTerm, carBrands]); // Update filtered brands when search term or car brands change

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term on input change
  };

  const handleBrandSelect = (brand) => {
    // Store selected brand in localStorage
    console.log('Selected brand:', brand); // Log the brand object
    console.log('Brand name:', brand.name); 
    localStorage.setItem('selectedBrand', brand.name); // Store the brand name in localStorage
 
    // Set the selected brand in context
    setSelectedBrand(brand);

    // Navigate to YearSelector with selected brand information
    navigate('/YearSelector');
  };

  return (
    <div className="car-brand-container">
      <div className="shadow-box">
        <h2>Select Your Car Brand</h2>
        <div className="searchcontainer">
          <input
            type="text"
            placeholder="Search car brands..."
            className="searchbar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="car-brand-wrapper">
          {filteredBrands.length > 0 ? (
            filteredBrands.map(brand => (
              <div 
                key={brand._id} 
                className="car-brand-item" 
                onClick={() => handleBrandSelect(brand)} // Call handleBrandSelect on click
              >
                <img src={brand.logo_link} alt={brand.name} className="car-brand-logo" />
                <p className="car-brand-name">{brand.name}</p>
              </div>
            ))
          ) : (
            <p>No car brands found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCarBrand;
