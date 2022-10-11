
import Container from 'react-bootstrap/esm/Container';
import Item from '../Item/Item';
import React from 'react'

const ItemList = ( {productos = []} ) => {

    return (
        <div className="container my-5">
            <h2>Productos</h2>
            <hr/>
            <Container>
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>
            )}
            </Container>
        </div>
    )
}

export default ItemList