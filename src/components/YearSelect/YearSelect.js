import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './YearSelect.css';
import ModelSelector from '../ModelSelector/ModelSelector';

const YearSelector = ({ onYearSelect = () => {} }) => { // Default to a no-op function
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const navigate = useNavigate();

  const years = Array.from({ length: 2024 - 1985 + 1 }, (_, i) => 2024 - i);

  const filteredYears = years.filter(year => year.toString().includes(searchTerm));

  const handleYearClick = (year) => {
    setSelectedYear(year);
    localStorage.setItem('selectedYear', year); // Store selected year in localStorage
    onYearSelect(year); // Call the function if provided
    navigate(`/ModelSelector`); // Navigate to the new page with the selected year as a query parameter
  };

  return (
    <div className="year-selector">
      <h2>Select Your Car Year</h2>
      <div className="searchcontainer">
        <input
          type="text"
          placeholder="Search year..."
          value={searchTerm}
          className="Searchbar"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="year-list-container">
        <div className="year-list">
          {filteredYears.length ? (
            filteredYears.map(year => (
              <div
                key={year}
                className={`year-item ${year === selectedYear ? 'selected' : ''}`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
            ))
          ) : (
            <div className="no-results">No results found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YearSelector;
