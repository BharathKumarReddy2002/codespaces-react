import React, { useContext } from "react";
import "./product.css";
import { ShopContext } from "../../context/shopContext";


export const Product = (props) => {

    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return  <div className="products">
        <div className="product">
            <img  src={productImage} alt="" />
            <div className="description">
                <p >{productName}</p>
                <p>${price}</p>
            </div>
            <button onClick={() => addToCart(id)} className="addToCart">Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
    </div>
       
}