// BrandContext.js

import React, { createContext, useState } from 'react';

export const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedOwnership, setSelectedOwnership] = useState(null);

  return (
    <BrandContext.Provider value={{ selectedBrand, setSelectedBrand, selectedModel, setSelectedModel, selectedOwnership, setSelectedOwnership }}>
      {children}
    </BrandContext.Provider>
  );
};
