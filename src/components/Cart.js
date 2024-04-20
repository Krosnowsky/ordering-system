import React, {useState,useEffect} from "react";


function Cart () {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        const loadCartItems = () => {
            const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
            setCartItems(storedItems);
            calculateTotalPrice(storedItems);
        };
        loadCartItems()
    }, []);
useEffect(()=>{
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));
},[totalPrice])

    const calculateTotalPrice = (items) => {
        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total)
    }
    return(
        <div>
            <h1>Podsumowanie</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.productId}>
                        Nazwa: {item.name}, cena za sztukę:{item.price} zł, ilość: {item.price * item.quantity} zł
                    </li>
                ))}
            </ul>
            <h2>całkowita cena: {totalPrice} zł</h2>
        </div>
    )
}

export default Cart;