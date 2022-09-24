import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
import {doc, getDoc} from "firebase/firestore"
import {db} from "../../FireBase/Config"
const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    console.log(itemId)

    useEffect(() => {

        setLoading(true)    
        const docRef = doc(db, "productos", itemId);
        getDoc(docRef)
            .then((resp) => {
                setItem({id: resp.id, ...resp.data()})
            })
            .finally(() => setLoading(false))
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