import React from "react";
import {Link} from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';
import "./navbar.css"

export const Navbar = () => {
    return <div className="navbar">
    <div className="link">
        <Link to="/" >Shop</Link>
    </div>
    <div className="link">
        <Link to="/cart" className="cart" ><FaShoppingCart size={32} color="#CAD5E2" id="cart" /></Link>
    </div>
    </div>
}