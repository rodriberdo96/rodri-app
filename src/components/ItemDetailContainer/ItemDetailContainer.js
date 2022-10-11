import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
import {doc, getDoc} from "firebase/firestore"
import {db} from "../../FireBase/Config"
import React from 'react'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()



    useEffect(() => {

        setLoading(true)    
        const docRef = doc(db, "productos",itemId);
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => setLoading(false))
             // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            {loading ? (
            <div className="loader-container">
                <div className="spinner"></div>
            </div>)  : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer