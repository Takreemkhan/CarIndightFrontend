import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';// Added Navigate
import Header from './components/Header/Header';
import { AuthProvider } from './components/AuthContext';
import SellCarPage from './components/SellCarPage/SellCarPage';
import SelectCarBrand from './components/SelectCarBrand/SelectCarBrand';
import YearSelector from './components/YearSelect/YearSelect';
import ModelSelector from './components/ModelSelector/ModelSelector';
import { BrandProvider } from './components/BrandContext';
import OwnershipSelector from './components/OwnershipSelector/OwnershipSelector';
import KmDrivenSelector from './components/KmDrivenSelector/KmDrivenSelector';
import CityStateSelector from './components/CityStateSelector/CityStateSelector';
import SellingPricePage from './components/SellingPricePage/SellingPricePage';

import UploadPage from './components/UploadPage/UploadPage';
import Congratulations from './components/Congratulations/Congratulations';

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

// ProtectedRoute Component to protect routes
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// export const api="http://localhost:3001";
   export const api="https://carinsightbackend.onrender.com";
function App() {
  return (
    <BrandProvider>
    <AuthProvider>
      <Router>
     <Container fluid className="p-3">
        <Routes>
          {/* Protect the header route */}
          {<Route 
            path="/login" 
            element={
              <ProtectedRoute>
               <SellCarPage  />

              </ProtectedRoute>
            } 
          />}
          
          {/* Public login route */}
          <Route path="/" element={<Header />} />
          <Route path="/sell-my-car" element={<SellCarPage  />} />
          <Route path="/SelectCarBrand" element={<SelectCarBrand  />} />
          <Route path="/YearSelector" element={<YearSelector  />} />
          <Route path="/ModelSelector" element={<ModelSelector  />} />
          <Route path="/OwnerShipSelector" element={<OwnershipSelector  />} />
          <Route path="/KmDrivenSelector" element={<KmDrivenSelector  />} />
          <Route path="/CityStateSelector" element={<CityStateSelector />} />
          <Route path="/SellingPricePage" element={<SellingPricePage/>} />
          <Route path="/upload"           element={<UploadPage/>}/>
          <Route path="/submit"           element={<Congratulations/>}/>
        </Routes>
  </Container>
      </Router>
    </AuthProvider>
    </BrandProvider>
  );
}

export default App;
