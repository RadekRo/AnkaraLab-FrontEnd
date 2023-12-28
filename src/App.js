import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import './App.css';
import Products from './Products/Products';

function App() {
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    let storedClientId = sessionStorage.getItem('clientId');
    if (!storedClientId) {
      storedClientId = Math.floor(Math.random() * 1000) + 1;
      sessionStorage.setItem('clientId', storedClientId.toString());
    }
    setClientId(storedClientId);
  }, []);

  useEffect(() => {
    if (clientId != null) {
      console.log("App.js[22-26] / current 'clientId' set to: " + clientId);
    }
  }, [clientId]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<Products/>} />

        </Routes>  
      </Router>
    </div>
  );
}

export default App;