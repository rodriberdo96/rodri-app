import {useState} from 'react'
import { useCartContext } from "../../context/CartContext";
import { Navigate } from 'react-router-dom'
import {addDoc, collection, updateDoc, getDoc } from 'firebase/firestore'
import {db} from '../../FireBase/Config'

const Checkout = () => {
    const {cart, cartTotal, clear} = useCartContext()
    const[values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal(),
            fecha: new Date()
        }
    
        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }
        if (values.email.length < 2) { 
            alert("Email incorrecto")
            return 
        }
        const ordenes = collection(db, 'ordenes')

        cart.forEach((item) => {
            
            const docRef = addDoc(ordenes,'productos',item.id)
            getDoc(docRef)
                .then((doc) => {
                    const stock = doc.data().stock
                    if (stock >= item.cantidad) {
                        
                        updateDoc(docRef, {stock: stock - item.cantidad})
                    }   else {
                        alert("No hay suficiente stock")
                    }
                })
            addDoc(ordenes, orden)
                .then((doc) => {
                    console.log( doc.id);
                    clear(doc.id)
                })
        })
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }

    return (
        <div className='container my-5'>
            <h1>Checkout</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                    name = "nombre"
                    value={values.nombre} 
                    onChange={handleInputChange}
                    type="text" 
                    className="my-3 form-control" 
                    placeholder="Nombre y Apellido"
                    />
                    <input 
                    name = "email"
                    value={values.email}
                    onChange={handleInputChange}
                    type="email" 
                    className=" my-3 form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Email"
                    />
                    <input
                    name = "direccion"
                    value={values.direccion}
                    onChange={handleInputChange}
                    type="text" 
                    className=" my-3 form-control" 
                    placeholder="Dirección"
                    />
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout