import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Burgers from "./components/burgers";
import Drinks from "./components/drinks";
import Home from "./components/home";
import Nav from "./components/nav";
import ProductDetails from "./components/productDetails";
import Cart from './components/Cart';
import api from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    api.interceptors.request.use(config => {
      console.log('Nawiązano połączenie z Api', config.baseURL);
      return config;
    }, error => {
      console.error('błąd podczas nawiązywania połączenia z API', error);
      return Promise.reject(error);
    });
    const storedTotalPrice = localStorage.getItem('totalPrice');
    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice)); 
    }
  }, []);

  return (
    <Router>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-2 d-flex mx-3 scroll">
            <Nav />
          </div>
          <div className="col-9 h-100 scroll">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sandwitch" element={<Burgers />} />
              <Route path="/drink" element={<Drinks />} />
              <Route path="/productdetails" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
        <div className="row reusme-bar d-flex align-items-center px-4">
          <div className="col-6"><Link to="/cart" className="primary-btn">Podsumowanie</Link></div>
          <div className="col-6 d-flex justify-content-end"><p>cena: <b className="primary-text">{totalPrice.toFixed(2)} zł</b></p></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
