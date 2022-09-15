import { BsFillCartFill} from "react-icons/bs";
import "./CartWidget.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget= () =>{

    const {cartQuantity,cart} = useContext(CartContext);
    return(
        <Link to="./Cart/cart" className="cart">
        
            <BsFillCartFill className="cart-icon" size={32} color="red"    onMouseOver={({target})=>target.style.color="white"}
    onMouseOut={({target})=>target.style.color="red"}/>
            {cart.length=== 0?"":<span className="cart-count">{cartQuantity()}</span>}
        
        </Link>
    )

}

export default CartWidget;