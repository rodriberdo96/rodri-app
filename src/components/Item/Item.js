import Producto from "../../data/data";
import Contador from "../ItemCount";
import { BsCart } from "react-icons/bs";
import  "./Item.scss";
const Item = ({producto}) => {
    return (
        <div className="producto">
            <h1>{producto.nombre}</h1>
            <h2>Precio:{producto.precio}</h2>
            <h3> Stock Disponible:{producto.stock}</h3>
            <img src={producto.img} alt=""/>
            <button className="boton-agregar" > Agregar <BsCart/></button>
        </div>
    )
};

export default Item;