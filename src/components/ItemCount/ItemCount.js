import { useState,useEffect } from "react";

const Contador = ({max,contador,setContador, handleAgregar}) => {
    const handlesumar = () => {
        if (contador < max) {
            setContador(contador +1)
        }
    }

    const handlerestar = () => {
        if (contador > 1 ) {
            setContador(contador -1)
        }
    }

    useEffect(() => {
        if (contador > 0) {
            console.log("se agrego al carrito")
        }
    }, [contador])
    useEffect(() => {
        if (contador === 0) {
            console.log("se elimino del carrito")
        }
    }, [contador])

    useEffect(() => {
        if (contador=== max) {
            console.log("se alcanzo el limite")
            setContador(false)
            return () => {
                setContador(0)
                alert("se alcanzo el limite")
            }
        }
    }, [contador])

    


    return (
        < div className="container my-5">
            <button onClick={handlerestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2 stock">{contador}</span>
            <button onClick={handlesumar} className="btn btn-outline-primary">+</button>
            <br/>
            <button onClick={handleAgregar} className="btn btn-success my-2">Agregar al carrito</button>
        </div>
    )
}

export default Contador
