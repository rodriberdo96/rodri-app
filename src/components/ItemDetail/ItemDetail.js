import { useState } from "react";
import Contador from "../ItemCount/ItemCount";
import "./ItemDetail.scss"
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import React from 'react'

const ItemDetail = ({item}) => {

    const {cart, addToCart, isInCart} = useCartContext();
    console.log(cart);

    const [cantidad , setCantidad] = useState(1);

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            img: item.img,
            cantidad,
        }
        console.log(itemToCart)
        addToCart(itemToCart);
    }

    return (
        
        <div className="container my-5">
            <img src = {item.img} alt = { item.nombre }/> 
            <h1>{item.nombre}</h1>
            <p> Precio: {item.precio}</p>
            <p> Stock: {item.stock}</p>
            <p> Categoria: {item.category}</p>
            <hr/>
            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <Contador 
                        max={item.stock}
                        contador={cantidad}
                        setContador={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }
            <hr/>
            <h2>Descripción:</h2> <p>{item.descripcion}</p>

        </div>
    )
}
export default ItemDetail;