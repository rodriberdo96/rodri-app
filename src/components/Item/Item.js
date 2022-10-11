import  "./Item.scss";
import React from 'react'
import { Link } from "react-router-dom";

const Item = ({producto}) => {
    const handleMouseOver = (e) => {
        e.target.style.color = "black";
    }
    const handleMouseOut = (e) => {
        e.target.style.color = "white";
    }
    return (
        <div id="contenedor-productos">
            <div className="producto">
                <img src={producto.img} alt={producto.nombre}/>
                <div className="info-producto">
                    <h1>{producto.nombre}</h1>
                    <h2>Precio:${producto.precio}</h2>
                    <h3> Stock Disponible:{producto.stock}</h3>
                </div>
                <div className="boton">
                    <Link to={ `/item/${producto.id}`} className="boton-agregar" onMouseOver={ handleMouseOver} onMouseOut={ handleMouseOut}>  Ver más</Link>
                </div>
            </div>
        </div>
    )
};

export default Item;