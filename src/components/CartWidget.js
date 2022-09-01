import { BsFillCartFill} from "react-icons/bs";

export const CartWidget= () =>{
    return(
        <div>
            <BsFillCartFill className="cart-icon " size={40} color="red" />
            <span className="cart-count">0</span>
        </div>
    )

}
