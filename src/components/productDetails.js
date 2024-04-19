import React, { useEffect, useState } from "react";
import api from "../api";

function ProductDetails(props) {
    const { product, type } = props;
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/api/dishes/${type}`);
                setProductDetails(response.data);
                console.log(response.data);
                console.log(product);
            } catch (error) {
                console.error("błąd podczas pobierania pozycji", error);
            }
        };
        fetchProduct();
    }, [type]); 

    return (
        <div>
            <h3>Szczegóły produktu</h3>
            <div>
                <h3>{product.name}</h3>
                {/* Wyświetl inne szczegóły produktu */}
            </div>
        </div>
    );
}

export default ProductDetails;
