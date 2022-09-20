import {useEffect, useState} from "react"
import {pedirDatos} from "../../helpers/pedirdatos"
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    console.log(itemId)

    useEffect(() => {

        setLoading(true)    

        pedirDatos()
            .then((res) => {
                setItem(res.find ( (prod) => prod.id === Number(itemId)))
            })
            .catch((err) => {console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    },[])
    
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