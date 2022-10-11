import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../FireBase/Config";

export const useProductos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();
    
    useEffect(() => {
        setLoading(true);
        const productosRef = collection(db, "productos") ;
        const q= categoryId 
        ? query(productosRef, where("category", "==", categoryId))
        : productosRef;
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({id:doc.id, ...doc.data(), id: doc.id}));
                console.log (productosDB);
                setProductos(productosDB);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [categoryId]);
    return(
        {productos, loading}
    )
}

