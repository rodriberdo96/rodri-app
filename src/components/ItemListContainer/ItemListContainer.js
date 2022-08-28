import React from "react";
import './ItemListContainer.scss';
import ItemList from "../ItemList";
import {Contador} from "../ItemCount";
export const ItemListContainer = ({greeting}) => {
    return(
        <div className="item-list-container">
            <h1 classname="Welcome"> {greeting}Welcome!</h1>
            <Contador/>
        </div>
    );
    }

