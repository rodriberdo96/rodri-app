import { useCartContext } from "../../context/CartContext";


const Cart = () => {

    const {cart, removeItem, cartTotal, emptyCart} = useCartContext;
    

    return(
        <div className="container">
            <h2>Carrito</h2>
            {cart.length === 0 ? <h3>No hay productos en el carrito</h3> :
            <div>
                <button onClick={emptyCart}>Vaciar carrito</button>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <div className="cart-item">
                                <img src={item.img} alt={item.nombre} />
                                <div className="cart-item-info">
                                    <h3>{item.nombre}</h3>
                                    <p>{item.precio}</p>
                                    <p>{item.cantidad}</p>
                                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <h3>Total: ${cartTotal()}</h3>
            </div>
            }
        </div>
    )
}

export default Cart