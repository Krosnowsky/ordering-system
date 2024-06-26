import React,{ useState, useEffect} from "react";
import api from "../api";
import { Link } from "react-router-dom";
function Drinks(){
    const [drinks, setDrinks]=useState([]);
    
    useEffect(()=>{
        const fetchDrinks = async()=>{
            try{
                const response = await api.get("/api/dishes/drink");
                setDrinks(response.data);
            }catch(error){
                console.error("błąd podczas pobierania pozycji", error)
            }
        };
        fetchDrinks();
    },[]);
    return(
        <div className="mb-5 pb-5">
        <h2>Lista napojów</h2>
        <div className="container-fluid">
            <div className="row  items-box">
            {drinks.map(drink => {
          // Sprawdź, czy napój ma rozmiar "s"
          if (drink.size === "s") {
            return (
            <div className="col-4 col-md-3 d-flex justify-content-center item-box flex-column" key={drink.id}>
                 <Link to={{ pathname: "/productdetails",  search: `?productId=${drink.productId}&type=drink` }}>
                <img src={`${process.env.PUBLIC_URL}/img/drink/${drink.image}`} alt="" srcset=""  className="img-fluid"/>
                <h4 className="text-left px-5 text-title">{drink.name}</h4>
                        <p className="text-left px-3 mr-5 text-price">{drink.price} zł</p>
                </Link>
            </div>    
                )
          }
          return null; // Jeśli napój nie ma rozmiaru "s", zwróć null, aby go pominąć
        })}
          
        
          </div>
            </div>
        </div>
    )
}

export default Drinks;