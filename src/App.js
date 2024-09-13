import React from 'react';
import { countryData } from './data';
import CountryCard from './cards';
import './App.css';

const App = () => {
  return (
    
    <div className="app-container">
      <h1>Countries Information</h1>
      <div className="card-grid">
        {countryData.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default App;
