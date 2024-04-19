import React,{useEffect}from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Burgers from "./components/burgers";
import Drinks from "./components/drinks";
import Home from "./components/home";
import Nav from "./components/nav";
import ProductDetails from "./components/productDetails";
import api from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App(){
  useEffect(()=>{
    api.interceptors.request.use(config => {
      console.log('Nawiązano połączenie z Api', config.baseURL);
      return config;
  }, error =>{
      console.error('bład podczas nawiązaywania połaczenia z API', error);
      return Promise.reject(error);
  })
  },[])
  return(
    <Router>
      <div className="container-fluid">
        <div className="row justify-content-between">
        <div className="col-2 d-flex mx-3 scroll">
        <Nav/>
        </div>
        <div className="col-9 h-100 scroll">

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/burgers" element={<Burgers/>}/>
          <Route path="/drinks" element={<Drinks/>}/>
          <Route path="/productdetails" element={<ProductDetails/>}/>
        </Routes>
        </div>
        </div>
        <div className="row reusme-bar d-flex align-items-center px-4">

        <div className="col-6"><a href="#" className="primary-btn">Podsumowanie</a></div>
        <div className="col-6 d-flex justify-content-end "><p>cena:<b className="primary-text"> 0,00 zł</b></p> </div>
        </div>
      </div>
    </Router>
  )

}

export default App