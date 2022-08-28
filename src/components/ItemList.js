
import Item from "./Item"


const ItemList = ( {producto = []} ) => {

    return (
        <div className="container my-5">
            <h2>Productos</h2>
            <hr/>

            { producto.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    )
}

export default ItemList