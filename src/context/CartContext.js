import { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import React from 'react'
export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)


    const addToCart = (item) => {
        setCart([...cart, item])
    }



    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: 'Estás Seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si,Borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
        })
    }

    const clear = (id) => {
        Swal.fire({
            title: "Tu compra ha sido realizada con éxito",
            text: `Tu número de pedido es: ${id}`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Genial!'
        })
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}