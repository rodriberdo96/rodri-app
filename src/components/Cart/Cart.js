import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"
import React from "react";

const Cart = () => {
const { cart, cartTotal, emptyCart, removeItem } = useCartContext()



if (cart.length === 0) {
    return ( 
        <div className="container my-5">
            <h2>Tu carrito está vacío</h2>
            <hr/>
            <Link to="/" className="btn btn-primary">Ir a comprar</Link>
        </div>
    )
    }
    return (
        <div className="container my-5">
            <h2>Carrito de compras</h2>
            <hr/>
            { cart.map((item) => (
                <div className="row my-3" key={item.id}>
                    <div className="col-12 col-md-6">
                        <img src={item.img} alt={item.nombre} className="img-fluid"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3>{item.nombre}</h3>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.precio}</p>
                        <p>Total: ${item.precio * item.cantidad}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            <hr/>
            <h3>Total: ${cartTotal()}</h3>
            <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
            <hr/>
            <Link to="/" className="btn btn-primary">Seguir comprando</Link>
            <hr/>
            <Link to="/Checkout" className="btn btn-success">Finalizar compra</Link>
        </div>

    )       
}

export default Cart