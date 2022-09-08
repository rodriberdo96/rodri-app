import Item from "../Item/Item";
const ItemDetail = ({item}) => {
    return (
        <div className="container my-5">
            <image src = { item && item.img ? item.img : "https://sometestimage.com/test.jpg" } /> 
            <h1>{item.nombre}</h1>
            <p> Precio:{item.precio}</p>
            <p> Stock:{item.stock}</p>
            <p> Categoria:{item.category}</p>
        </div>
    )
}
export default ItemDetail;