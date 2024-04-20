import React,{ useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import api from "../api";
import "../App.css"
import ProductDetails from "./productDetails"
function Burgers(){
    const [burgers, setBurgers]=useState([]);
    
    useEffect(()=>{
        const fetchBurgers = async()=>{
            try{
                const response = await api.get("/api/dishes/sandwitch");
                setBurgers(response.data);
                
            }catch(error){
                console.error("błąd podczas pobierania pozycji", error)
            }
        };
        fetchBurgers();
    },[]);
    return(
        <div>
            <h2>Lista burgerów</h2>
            <div className="container-fluid">
                <div className="row  items-box">
              

                {burgers.map(burger =>(
                    
                    <div className="col-6 col-md-3   d-flex justify-content-center item-box flex-column" key={burger.id}>
                           <Link to={{ pathname: "/productdetails",  search: `?productId=${burger.productId}&type=sandwitch` }}>

                        <img src={`${process.env.PUBLIC_URL}/img/sandwitch/${burger.image}`} alt="" srcset=""  className="img-fluid"/>
                        <h4 className="text-left px-3 text-title">{burger.name}</h4>
                        <p className="text-left px-3 text-price">{burger.price} zł</p>
                        
                    </Link>
                        </div>
                ))}
                

                </div>
            </div>
        </div>
    )
}

export default Burgers;