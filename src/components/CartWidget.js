import { BsFillCartFill} from "react-icons/bs";

export const CartWidget= () =>{
    return(
        <div className="cart-widget">
            <BsFillCartFill className="cart-icon"/>
            <span className="cart-count">0</span>
        </div>
    )

}
