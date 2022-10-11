import React from "react";
import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList";
import {useProductos} from '../../hooks/useProductos';  

const ItemListContainer = () => {

    const {productos, loading} = useProductos();
    return(
        <div>
            {loading ?(
            <div className="loader-container">
                <div className="spinner"></div>
            </div>) 
            : <ItemList productos={productos} />}
        </div>
    );
    }


export default ItemListContainer;