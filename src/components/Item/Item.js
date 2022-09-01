import Producto from "../../data/data";
import Contador from "../ItemCount";
import { BsCart } from "react-icons/bs";
import  "./Item.scss";
import bootstrap from "bootstrap";
const Item = ({producto}) => {
    return (
        <div id="contenedor-productos">
            <div className="producto">
                <img src={producto.img} alt=""/>
                <h1>{producto.nombre}</h1>
                <h2>Precio:{producto.precio}</h2>
                <h3> Stock Disponible:{producto.stock}</h3>
                <button className="boton-agregar" > Agregar <BsCart/></button>
            </div>
        </div>
    )
};

export default Item;