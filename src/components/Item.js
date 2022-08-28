import Producto from "./data";
import Contador from "./ItemCount";
import  "./Item.scss";
const Item = ({Producto}, {Contador}) => {
    return (
        <div className="producto">
            <h1>{Producto.nombre}</h1>
            <h2>{Producto.precio}</h2>
            <h3>{Producto.stock}</h3>
            <img src={Producto.img} alt=""/>
        </div>
    )
};

export default Item;