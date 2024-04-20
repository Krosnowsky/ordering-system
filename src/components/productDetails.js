import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import api from "../api";

function ProductDetails() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get("productId");
    const type = searchParams.get("type");

    const [productDetails, setProductDetails] = useState({});
    const [quantity, setQuantity]= useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (!productId || !type) return; // Sprawdź, czy productId i type zostały przekazane

                const response = await api.get(`/api/dishes/${type}`);
                const product = response.data.find(product => product.productId === productId);
                console.log(productId);
                // Znajdź produkt o podanym productId
                if (product) {
                    setProductDetails(product); // Ustaw szczegóły produktu
                } else {
                    console.error("Nie znaleziono produktu o podanym ID");
                }
            } catch (error) {
                console.error("Błąd podczas pobierania pozycji", error);
            }
        };
        fetchProduct();
    }, [productId, type]);

    const handleIncreaseQuantity = () =>{
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const handleDecreaseQuantity =()=>{
        if(quantity>1){
            setQuantity(prevQuantity => prevQuantity - 1);
    }
        }

    const handleAddToCart = () =>{
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const productData = {
            productId: productId,
            name: productDetails.name,
            price: productDetails.price,
            quantity: quantity
        };
        cartItems.push(productData)
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }    
 

    return (
        <div className="items-box pb-5 mb-5">
            <h3>Szczegóły produktu</h3>
            <Link to={{pathname: `/${type}`}}>powrót</Link>
            <div className="col-12 d-flex  justify-content-center flex-column">
                <div className="col-12 d-flex  justify-content-center">
                    <div className="col-6">

                <img src={`${process.env.PUBLIC_URL}/img/${type}/${productDetails.image}`} alt="" srcset="" className="img-fluid" />
                    </div>
                </div>
                <h2 className="text-center">{productDetails.name}</h2>
                <h5 className="text-center">{productDetails.price} zł</h5>
                <p className="text-center">Podaj ilosć</p>
                <div className="text-center">
                    <button className="quantityBtn" onClick={handleDecreaseQuantity}>-</button>
                    <span className="quantityBox">{quantity}</span>
                    <button className="quantityBtn" onClick={handleIncreaseQuantity}>+</button>
                </div >
                <div className="col-12 d-flex justify-content-center">
                

                <a href="# "className="primary-btn text-center my-5 " onClick={handleAddToCart}>Dodaj do koszyka</a>
                
                </div>
                {/* Wyświetl inne szczegóły produktu */}
            </div>
        </div>
    );
}

export default ProductDetails;
