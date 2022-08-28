import React from "react";
import './ItemListContainer.scss';

export const ItemListContainer = ({greeting}) => {
    return(
        <div className="item-list-container">
            <h1 classname="Welcome"> {greeting}Welcome!</h1>
        </div>
    );
    }

