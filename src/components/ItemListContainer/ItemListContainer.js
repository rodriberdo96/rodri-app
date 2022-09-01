import React from "react";
import './ItemListContainer.scss';
import {Contador} from "../ItemCount";
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import { pedirDatos } from "../../helpers/pedirdatos";


export const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return(
        <div >
            <ItemList productos={productos} />
        </div>
    );
    }

