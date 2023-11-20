import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import HomePage from './HomePage/HomePage';
import NotFound from './Shared/NotFound/NotFound';
import Basket from './Basket/Basket';
import Products from './Products/Products';
import Faqs from './Faqs/Faqs';
import './App.css';

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
      console.log("App.js[22-26] / clientId: " + clientId)
    }
  }, [clientId])
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<Basket clientId={clientId} />} />
          <Route path="/faq" element={<Faqs clientId={clientId} />} />
          <Route path="/faq/:id" element={<Faqs />} />
          <Route path="/products/:categoryId" element={<Products clientId={clientId} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
