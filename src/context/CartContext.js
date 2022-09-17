import { createContext, useContext,useState} from "react";
import { useEffect } from "react";


export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeItem = (Id) => {
        setCart(cart.filter((item) => item.id !== Id));
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0);
    };

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    };

    const emptyCart = () => {
        setCart([])
    };

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart));
    }, [cart]);
    

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            removeItem,
            emptyCart
        }}>
            {children}
        </CartContext.Provider> 
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}