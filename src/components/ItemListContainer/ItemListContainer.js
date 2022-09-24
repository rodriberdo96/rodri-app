import React from "react";
import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs,query,where } from "firebase/firestore";
import {db} from "../../FireBase/Config";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryid} = useParams();

    useEffect(() => {
        setLoading(true);
        const productosRef = collection(db, "productos") ;
        const q= categoryid 
        ? query(productosRef, where("category", "==", categoryid))
        : productosRef;
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({id:doc.id, ...doc.data(), id: doc.id}));
                console.log (productosDB);
                setProductos(productosDB);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
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