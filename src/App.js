import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import HomePage from './HomePage/HomePage';
import NotFound from './Shared/NotFound/NotFound';
import Baskets from './Baskets/Baskets';
import Products from './Products/Products';
import Faqs from './Faqs/Faqs';
import './App.css';

function App() {
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    
    const generateRandomClientId = () => {
      return Math.floor(Math.random() * 1000) + 1;
    };
    
    setClientId(generateRandomClientId());
  }, []); 

  console.log(clientId)
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<Baskets />} />
          <Route path="/basket/:id" element={<Baskets />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/faq/:id" element={<Faqs />} />
          <Route path="/products/:categoryId" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
