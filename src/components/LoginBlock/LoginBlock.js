import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PinInput } from '@mantine/core';
import './loginBlock.css';
import { api } from '../../App';
const LoginBlock = ({ onLoginSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('request');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showForm, setShowForm] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve phone number from localStorage if exists
    const storedPhoneNumber = localStorage.getItem('phoneNumber');
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);

  const requestOtp = async () => {
    try {
      const response = await axios.post(  `${api}/api/request-otp`, { phoneNumber });
      setStep('verify');
      setSuccess(response.data.message);
      setError('');
      // Store phone number in localStorage
      localStorage.setItem('phoneNumber', phoneNumber);
    } catch (err) {
      setError(err.response.data.message);
      setSuccess('');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(`${api}/api/verify-otp`, { phoneNumber, otp });
      setSuccess(response.data.message);
      setError('');
      onLoginSuccess(); // Notify the parent component of successful login
      setShowForm(false);
      navigate('/login');
      localStorage.setItem('isAuthenticated', 'true'); // Store authentication status in localStorage
    } catch (err) {
      setError(err.response.data.message);
      setSuccess('');
    }
  };

  const closeForm = () => {
    setShowForm(false);
    setPhoneNumber('');
    setOtp('');
    setStep('request');
    setError('');
    setSuccess('');
    localStorage.removeItem('phoneNumber'); // Clear phone number from localStorage
  };

  return (
    showForm && (
      <div className="overlay">
        <div className="modal-form">
          <div className="login-form">
            <span className="close-btn" onClick={closeForm}>×</span>
            {step === 'request' ? (
              <div>
                <h1 className='Lheading'>Login</h1>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter mobile number"
                />
                <button onClick={requestOtp}>Request OTP</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
              </div>
            ) : (
              <div>
                <h1 className='Lheading'>Verify OTP</h1>
                <div className="otp-block">
                  <PinInput
                    size="md"
                    length={6}
                    type="number"
                    placeholder="-"
                    value={otp}
                    onChange={setOtp}
                  />
                </div>
                <button onClick={verifyOtp}>Verify OTP</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default LoginBlock;
