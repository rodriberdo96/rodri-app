import {useEffect, useState} from "react"
import {pedirDatos} from "../../helpers/pedirDatos"
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
                setItem(res.find (  item => item.id === idProducto.idProducto))
            })
            .catch((err) => {console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    
    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer