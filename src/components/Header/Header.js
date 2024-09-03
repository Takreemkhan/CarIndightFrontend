
import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faGlobe, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css';
import Slider from '../Slider/Slider';
import CarSearchForm from '../carSearchBlock/CarSearchForm';
import Login from '../LoginBlock/LoginBlock';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';


const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate(); 
  useEffect(() => {
    // Check login status from localStorage on component mount
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDropdownToggle = (dropdownKey) => {
    setActiveDropdown((prevKey) => (prevKey === dropdownKey ? '' : dropdownKey));
  };

  const handleLoginClick = () => {
    setShowLogin(!showLogin); // Toggle login form visibility
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set the login state to true on successful login
    setShowLogin(false); // Close the login form after successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    // Add logic to handle logout (e.g., clearing tokens, etc.)
  };
  const handleSellCarClick = () => {
    navigate('/sell-my-car');
  };


  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img
            src={logo}
            alt="Website Logo"
            className="website-logo"
          />
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search here..."
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="language-login-container">
          <div className="language-selector">
            <FontAwesomeIcon icon={faGlobe} />
            <select className="language-dropdown">
              <option value="en">EN</option>
              <option value="hi">HI</option>
            </select>
          </div>
          <div className="login-register-container">
            <FontAwesomeIcon icon={faUser} />
            {isLoggedIn ? (
              <Dropdown>
                <Dropdown.Toggle variant="link" className="dropdown-toggle">
                  Hello User
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <Dropdown.Item className="dropdown-item">View Profile</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <span className="login-text" onClick={handleLoginClick}>Login/Register</span>
            )}
          </div>
        </div>
      </div>

      <div className="dropdowns-container">
        {/* New Cars Dropdown */}
        <Dropdown className="dropdown">
          <Dropdown.Toggle
            variant="link"
            className={`dropdown-toggle ${activeDropdown === 'newCars' ? 'active' : ''}`}
            onClick={() => handleDropdownToggle('newCars')}
            style={{
              textDecoration: 'none', // Remove underline
              color: 'black', // Set text color to black
            }}
          >
            New Car
          </Dropdown.Toggle>
          <Dropdown.Menu
            show={activeDropdown === 'newCars'}
            className="dropdown-menu"
          >
            <Dropdown.Item className="dropdown-item">Explore New Cars</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Electric Cars</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Upcoming Cars</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">New Launches</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Car Insurance</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Compare To Buy The Right Cars</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">New Car Offers & Discounts</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Popular Brands</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Popular Cars</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Find Car Dealers</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Find EV Charging Stations</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Find Fuel Stations</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Check Fuel Prices</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">New Car Loan</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Buy & Sell Used Cars Dropdown */}
        <Dropdown className="dropdown">
          <Dropdown.Toggle
            variant="link"
            className={`dropdown-toggle ${activeDropdown === 'usedCars' ? 'active' : ''}`}
            onClick={() => handleDropdownToggle('usedCars')}
            style={{
              textDecoration: 'none', // Remove underline
              color: 'black', // Set text color to black
            }}
          >
            Buy & Sell Used Cars
          </Dropdown.Toggle>
          <Dropdown.Menu
            show={activeDropdown === 'usedCars'}
            className="dropdown-menu"
          >
            <Dropdown.Item className="dropdown-item">Buy Used Cars</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Used Cars In Your City</Dropdown.Item>
            <Dropdown.Item className="dropdown-item" onClick={handleSellCarClick}>Sell My Car</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Used Car Valuation</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Dealership Near Me</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Loan Against Car</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Used Car Loan</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Car Insurance</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Car Selling Tips</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* News, Reviews & Videos Dropdown */}
        <Dropdown className="dropdown">
          <Dropdown.Toggle
            variant="link"
            className={`dropdown-toggle ${activeDropdown === 'news' ? 'active' : ''}`}
            onClick={() => handleDropdownToggle('news')}
            style={{
              textDecoration: 'none', // Remove underline
              color: 'black', // Set text color to black
            }}
          >
            News, Reviews & Videos
          </Dropdown.Toggle>
          <Dropdown.Menu
            show={activeDropdown === 'news'}
            className="dropdown-menu"
          >
            <Dropdown.Item className="dropdown-item">News & Top stories</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Car Expert Reviews</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Video Reviews</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Visual Stories</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">User Reviews</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Car Collection</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Tips & Advice</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Car Services Dropdown */}
        <Dropdown className="dropdown">
          <Dropdown.Toggle
            variant="link"
            className={`dropdown-toggle ${activeDropdown === 'services' ? 'active' : ''}`}
            onClick={() => handleDropdownToggle('services')}
            style={{
              textDecoration: 'none', // Remove underline
              color: 'black', // Set text color to black
            }}
          >
            Car Services
          </Dropdown.Toggle>
          <Dropdown.Menu
            show={activeDropdown === 'services'}
            className="dropdown-menu"
          >
            <Dropdown.Item className="dropdown-item">Challan Check</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Car Service History</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">RTO Records Info</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Allianz Assistance RSA</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">SmartCar Connected Device</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">Revv Car Subscription</Dropdown.Item>
            <Dropdown.Item className="dropdown-item">View All Services</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {showLogin && <Login onLoginSuccess={handleLoginSuccess} />}
      <CarSearchForm />
      <Slider />
    </>
  );
};

export default Header;

