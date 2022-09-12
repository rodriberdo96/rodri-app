import React from "react";
import './ItemListContainer.scss';
import Contador from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import { pedirDatos } from "../../helpers/pedirdatos";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

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
        <div >
            {loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />}
        </div>
    );
    }

