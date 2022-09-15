import React from "react";
import './ItemListContainer.scss';
import Contador from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import { pedirDatos } from "../../helpers/pedirdatos";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryid} = useParams();

    useEffect(() => {
        setLoading(true);

        pedirDatos()
            .then( (res) => {
                if (!categoryid) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((prod) => prod.category === categoryid));
                }
            })
            .catch( (err) => {
                console.log(err);
            })
            .finally(() => { setLoading(false); });
    }, [categoryid]);
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