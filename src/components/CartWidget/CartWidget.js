import { BsFillCartFill} from "react-icons/bs";
import Item from "../Item/Item";
import "./CartWidget.scss";
export const CartWidget= (contador) =>{
    return(
        <div className="boton-carrito">
            <BsFillCartFill className="cart-icon" size={32} color="red"    onMouseOver={({target})=>target.style.color="white"}
    onMouseOut={({target})=>target.style.color="red"}/>
            <span className="cart-count">0</span>
        </div>
    )

}
