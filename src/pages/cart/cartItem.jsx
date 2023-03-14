import React, {useContext} from "react";
import { ShopContext } from "../../context/shopContext";


export const CartItem = (props) => {
    const {id, productImage, price, productName} = props.data;

    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    

    return (
        <div className="cartItem">
            <img src={productImage} alt="" />
            <div className="description">
                <p>{productName}</p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} on onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}