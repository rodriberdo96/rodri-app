import { BsFillCartFill} from "react-icons/bs";
import "./CartWidget.scss";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget= () =>{

    const {cartQuantity,cart} = useContext(CartContext);
    return(
        <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-visible' :''}`}>
            <BsFillCartFill/>
            <span>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget;