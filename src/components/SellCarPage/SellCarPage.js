import React, { useState, useEffect } from 'react';
import './SellCarPage.css';
import '../Header/Header.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faGlobe, faChevronDown, faSignOutAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Login from '../LoginBlock/LoginBlock';
import logo from '../Header/logo.png';
import SelectCarBrand from '../SelectCarBrand/SelectCarBrand';

const SellCarPage = () => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSelectCarBrand, setShowSelectCarBrand] = useState(false);
  const [carNumber, setCarNumber] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Check login status from localStorage on component mount
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsLoggedIn(true);
    }

    // Retrieve the stored car number from local storage, if any
    const storedCarNumber = localStorage.getItem('carNumber');
    if (storedCarNumber) {
      setCarNumber(storedCarNumber);
    }
  }, []);

  const handleDropdownToggle = (dropdownKey) => {
    setActiveDropdown((prevKey) => (prevKey === dropdownKey ? '' : dropdownKey));
  };

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    localStorage.setItem('isAuthenticated', 'true'); // Set login status in localStorage
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isAuthenticated');
  };

  const handleSellCarClick = () => {
    if (isLoggedIn) {
      // Validate car number input
      if (!carNumber.match(/^[A-Z]{2}\d{2}-[A-Z]{2}-\d{4}$/)) {
        alert('Please enter a valid car number format (e.g., DL03-CW-3121)');
        return;
      }
      // Store car number and navigate
      localStorage.setItem('carNumber', carNumber);
      navigate('/SelectCarBrand');
    } else {
      alert('To sell your car, login first!');
      setShowLogin(true);
    }
  };

  const handleChange = (e) => {
    setCarNumber(e.target.value);
  };

  const handleSellCar = () => {
    alert('Sell My Car functionality to be implemented');
  };

  const handleCheckPrice = () => {
    alert('Check Price functionality to be implemented');
  };

  
  return (
    <div className="my-div">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Website Logo" className="website-logo" />
        </div>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search here..." />
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
          <div className="login-register-container" onClick={handleLoginClick}>
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
              <span className="login-text">Login/Register</span>
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
          textDecoration: 'none', 
          color: 'black', 
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
        <Dropdown.Item className="dropdown-item">Sell My Car</Dropdown.Item>
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
 
    <div className="sell-car-container">
      <header className="sell-car-header">
        <h1>Sell Your Car from Home for the Best Price</h1>
        <p>Get an additional amount of up to ₹25,000</p>
      </header>
      <section className="sell-car-benefits">
        <div className="benefit">
            
          <h4>Verified Car Buyers</h4>
          <p>No Unwanted Calls</p>
        </div>
        <div className="benefit">
          <h4>Zero Commission</h4>
          <p>Direct Sale to Buyers</p>
        </div>
        <div className="benefit">
          <h4>Share Your Car Details</h4>
          <p>Get Details of Interested Buyers</p>
        </div>
      </section>
      <div class="container">
  <img src="https://stimg.cardekho.com/usedcar/sellcar/thumbsUpmanDesktop.png" alt="Advertisement" class="advertisement-image" />
  
  <div class="sell-car-footer">
  <p>Start selling your car today!</p>
  </div>
</div>
    </div>
    <div className="car-registration-form">
      <h2 className="form-title">Enter your car registration</h2>
      <div className="input-group">
        <label htmlFor="car-number-input">Enter your car no. (e.g., DL03-CW-3121)</label>
        <input
          type="text"
          id="car-number-input"
          value={carNumber}
          onChange={handleChange}
          placeholder="DL03-CW-3121"
          className="car-number-input"
        />
      </div>
      <div className="button-group">
        <button className="sell-car-button" onClick={handleSellCarClick}>Sell My Car</button>
        <button className="check-price-button" onClick={handleCheckPrice}>Just here to check price? Check Price</button>
      </div>
    </div>
   
 
    </div>
  );
};

export default SellCarPage;
