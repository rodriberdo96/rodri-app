
const ItemDetail = ({item}) => {
    return (
        <div className="container my-5">
            <img src={item.img} alt={item.nombre} />
            <h1>{item.nombre}</h1>
            <p> Precio:{item.precio}</p>
            <p> Stock:{item.stock}</p>
        </div>
    )
}
export default ItemDetail;