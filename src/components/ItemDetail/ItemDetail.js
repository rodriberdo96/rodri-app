import Item from "../Item/Item";
import {useParams} from "react-router-dom";
import { useState } from "react";
import Contador from "../ItemCount/ItemCount";
import Select from "../Select/Select";
import "./ItemDetail.scss"

const ItemDetail = ({item}) => {


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
            <p> <h2>Descripción:</h2> {item.descripcion}</p>
        </div>
    )
}
export default ItemDetail;