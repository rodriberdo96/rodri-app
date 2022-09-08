import {useEffect, useState} from "react"
import {pedirDatos} from "../../helpers/pedirdatos"
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = (idProducto) => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemid} = useParams()

    console.log(itemid)
    console.log(item)

    useEffect(() => {

        setLoading(true)    

        pedirDatos()
            .then((res) => {
                setItem(res.find ( (prod) => prod.id === Number(itemid)))
            })
            .catch((err) => {console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    
    return (
        <div>
            {loading ? <h2>Cargando...</h2> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer