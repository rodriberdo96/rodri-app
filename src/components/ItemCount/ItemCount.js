import { useState,useEffect } from "react";

const Contador = ({max,contador,setContador, handleAgregar}) => {
    const handleSumar = () => {
        if (contador < max) {
            setContador(contador +1)
        }
    }

    const handleRestar = () => {
        if (contador > 0)  {
            setContador(contador -1)
        }
    }

    return (
        <div>
            <button 
                className={`btn mx-2 ${contador === 0 ? "btn-outline-danger" : "btn-outline-primary"} ${contador === 0 ? 'counter-disabled' :''}`}
                onClick={handleRestar}
            >
            -
            </button>

            <span className="mx-3">{contador}</span>
            <button 
                className={contador === max ? "btn btn-danger" : "btn btn-primary"}
                onClick={handleSumar}
                disabled={contador === max}
            >
            +
            </button>
            <br/>
            <button disabled={contador === 0} onClick={handleAgregar} className="btn btn-success my-2">
            Agregar al carrito
            </button>
        </div>
    )
}

export default Contador
