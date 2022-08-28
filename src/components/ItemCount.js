import { useState,useEffect } from "react";
import "../App.css";
 export const Contador = () => {
    const [contador, setcontador] = useState(0)
    

    const sumar = () => {
            setcontador(contador +1)
        
    }

    const restar = () => {
        if (contador > 0) {
            setcontador(contador -1)
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
        if (contador=== 10) {
            console.log("se alcanzo el limite")
            setcontador(false)
            return () => {
                setcontador(0)
                alert("se alcanzo el limite")
            }
        }
    }, [contador])

    


    return (
        < div className="container my-5">
            <h1 className="stock">Laptop</h1>
            <h2 className="stock"> stock:10</h2>
            <button onClick={restar} className="btn btn-outline-primary">-</button>
            <span className="mx-2 stock">{contador}</span>
            <button onClick={sumar} className="btn btn-outline-primary">+</button>
        </div>
    )
}
