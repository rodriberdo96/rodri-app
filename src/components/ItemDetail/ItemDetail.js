import Item from "../Item/Item";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import Contador from "../ItemCount/ItemCount";
import Select from "../Select/Select";
import "./ItemDetail.scss"
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {

    const {cart, addToCart, isInCart} = useCartContext();
    console.log(cart);

    const [cantidad , setCantidad] = useState(1);
    const [memoria, setMemoria] = useState(item.options[0].value);

    const handleAgregar = () => {
        const itemAgregado = {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad,
            memoria,
        }
        console.log(itemAgregado)
        addToCart(itemAgregado);
    }

    return (
        
        <div className="container my-5">
            <img src = {item.img} alt = { item.nombre }/> 
            <h1>{item.nombre}</h1>
            <p> Precio: {item.precio}</p>
            <p> Stock: {item.stock}</p>
            <p> Categoria: {item.category}</p>
            <p> Memoria RAM: <Select options={item.options}/> </p>
            <Contador max={item.stock}  contador={cantidad} setContador={setCantidad} handleAgregar={handleAgregar} />
            <hr/>
            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <Contador 
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }
            <hr/>
            <p> <h2>Descripción:</h2> {item.descripcion}</p>

        </div>
    )
}
export default ItemDetail;