import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import "./App.css";
import Products from "./Products/Products";
import Login from "./Login/Login";
import Header from "./Shared/Header";
import Basket from "./Basket/Basket";

function App() {
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    let storedClientId = sessionStorage.getItem("clientId");
    if (!storedClientId) {
      storedClientId = Math.floor(Math.random() * 1000) + 1;
      sessionStorage.setItem("clientId", storedClientId.toString());
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
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
