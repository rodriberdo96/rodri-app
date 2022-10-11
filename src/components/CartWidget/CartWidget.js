import "./CartWidget.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartWidget= () =>{

    const {cartQuantity,cart} = useContext(CartContext);
    return(
        <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-visible' :''}`}>
            <ShoppingCartIcon  color="black"/>
            <span >{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget;