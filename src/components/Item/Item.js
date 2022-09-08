
import Contador from "../ItemCount";
import { BsCart } from "react-icons/bs";
import  "./Item.scss";
import bootstrap from "bootstrap";
import { Link } from "react-router-dom";
const Item = ({producto}) => {
    return (
        <div id="contenedor-productos">
            <div className="producto">
                <img src={producto.img} alt={producto.nombre}/>
                <h1>{producto.nombre}</h1>
                <h2>Precio:{producto.precio}</h2>
                <h3> Stock Disponible:{producto.stock}</h3>
                <Link to={ `/Item/${producto.id}`} className="boton-agregar" > Ver más</Link>
            </div>
        </div>
    )
};

export default Item;