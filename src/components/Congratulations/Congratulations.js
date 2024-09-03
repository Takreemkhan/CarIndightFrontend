import React from 'react';
import './Congratulations.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Congratulations = () => {
  return (
    <div className="congrats-box">
      <CheckCircleOutlineIcon className="congrats-icon" />
      <p className="congrats-text">Congratulations!</p>
      <p className="congrats-text">You have successfully listed the car</p>
    </div>
  );
};

export default Congratulations;
