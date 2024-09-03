import React, { useState } from 'react';
import './CarSearchForm.css';

const CarSearchForm = () => {
  const [carType, setCarType] = useState('new');
  const [searchBy, setSearchBy] = useState('budget');
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const handleAdvancedSearchToggle = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  return (
    <div className="filter-form-container">
        <h4 className="heading">Find your right car</h4>
      <div className="choice-button-group">
        <button
          className={`choice-type-button ${carType === 'new' ? 'active' : ''}`}
          onClick={() => setCarType('new')}
        >
          New Car
        </button>
        <button
          className={`choice-type-button ${carType === 'used' ? 'active' : ''}`}
          onClick={() => setCarType('used')}
        >
          Used Car
        </button>
      </div>
      <div className="filter-radio-group">
        <label>
          <input
            type="radio"
            value="budget"
            checked={searchBy === 'budget'}
            onChange={() => setSearchBy('budget')}
          />
          By Budget
        </label>
        <label>
          <input
            type="radio"
            value="brand"
            checked={searchBy === 'brand'}
            onChange={() => setSearchBy('brand')}
          />
          By Brand
        </label>
      </div>
      <div className="filter-dropdown-group">
        {searchBy === 'budget' ? (
          <>
            {carType === 'new' ? (
              <select className="filter-dropdown">
                <option value="">Select Budget</option>
                <option value="1-5 Lakh">1 - 5 Lakh</option>
                <option value="5-10 Lakh">5 - 10 Lakh</option>
                <option value="10-15 Lakh">10 - 15 Lakh</option>
                <option value="15-20 Lakh">15 - 20 Lakh</option>
                <option value="20-35 Lakh">20 - 35 Lakh</option>
                <option value="35-50 Lakh">35 - 50 Lakh</option>
                <option value="50 Lakh - 1 Crore">50 Lakh - 1 Crore</option>
                <option value="Above 1 Crore">Above 1 Crore</option>
              </select>
            ) : (
              <select className="filter-dropdown">
                <option value="">Select Budget</option>
                <option value="0-2 Lakh">0 - 2 Lakh</option>
                <option value="2-4 Lakh">2 - 4 Lakh</option>
                <option value="4-6 Lakh">4 - 6 Lakh</option>
                <option value="6-8 Lakh">6 - 8 Lakh</option>
                <option value="8-10 Lakh">8 - 10 Lakh</option>
                <option value="10+ Lakh">10+ Lakh</option>
              </select>
            )}
            {carType === 'new' ? (
              <select className="filter-dropdown">
                <option value="">All Vehicle Types</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="MUV">MUV</option>
                <option value="Luxury">Luxury</option>
                <option value="Super Luxury">Super Luxury</option>
                <option value="Convertible">Convertible</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Coupe">Coupe</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Minivan">Minivan</option>
              </select>
            ) : (
              <select className="filter-dropdown">
                <option value="">Select City</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                {/* Add more cities alphabetically */}
              </select>
            )}
          </>
        ) : (
          <>
            <select className="filter-dropdown">
              <option value="">Select Brand</option>
              <option value="Maruti">Maruti</option>
              <option value="Tata">Tata</option>
              <option value="Kia">Kia</option>
              <option value="Toyota">Toyota</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Mahindra">Mahindra</option>
              <option value="Honda">Honda</option>
              <option value="MG">MG</option>
              <option value="Skoda">Skoda</option>
              <option value="Jeep">Jeep</option>
              <option value="Renault">Renault</option>
              <option value="Nissan">Nissan</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Citroen">Citroen</option>
              <option value="Aston Martin">Aston Martin</option>
              <option value="Audi">Audi</option>
              <option value="Bentley">Bentley</option>
              <option value="BMW">BMW</option>
              <option value="Ferrari">Ferrari</option>
              <option value="Jaguar">Jaguar</option>
              <option value="Lamborghini">Lamborghini</option>
              <option value="Land Rover">Land Rover</option>
              <option value="Lexus">Lexus</option>
              <option value="Maserati">Maserati</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Mini">Mini</option>
              <option value="Porsche">Porsche</option>
              <option value="Rolls-Royce">Rolls-Royce</option>
              <option value="Volvo">Volvo</option>
              {/* Add more brands */}
            </select>
            {carType === 'new' ? (
              <select className="filter-dropdown">
                <option value="">Select Model</option>
                {/* Add model options here */}
              </select>
            ) : (
              <select className="filter-dropdown">
                <option value="">Select City</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                {/* Add more cities alphabetically */}
              </select>
            )}
          </>
        )}
      </div>
      <button className="filter-search-button">Search</button>

      {/* Advanced Search Button */}
      <div className="advanced-search-container">
        <button 
          className="advanced-search-button" 
          onClick={handleAdvancedSearchToggle}
        >
          Advanced Search
          <svg
            className={`arrow ${showAdvancedSearch ? 'open' : ''}`}
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 5.5a.5.5 0 0 1 .7-.7L8 9.293l5.8-5.8a.5.5 0 0 1 .7.7l-6 6a.5.5 0 0 1-.7 0l-6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarSearchForm;
