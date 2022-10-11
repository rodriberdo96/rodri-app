import {useState} from 'react'
import { useCartContext } from "../../context/CartContext";
import { Navigate } from 'react-router-dom'
import {addDoc, collection, writeBatch, query, where, documentId, getDocs} from 'firebase/firestore'
import {db} from '../../FireBase/Config'
import React from 'react'
import { useForm } from '../../hooks/useForm';


const Checkout = () => {
    const {cart, cartTotal, clear} = useCartContext()
    const [  ,setOrderId] = useState(null)
    const {values, handleInputChange} = useForm({
        nombre: '',
        email: '',
        direccion: '',
    })


    const handleSubmit =  async (e) => {
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

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')

        const q= query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos= await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then (() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            console.log(doc.id);
                            setOrderId(doc.id);
                            clear(doc.id);
                    })
                })
        } else {
            alert("No hay stock suficiente")
            console.log (outOfStock);
        }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }
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