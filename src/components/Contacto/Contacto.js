import React from 'react'

const Contacto = () => {
    return (
        <div className="contacto">
        <h1> Contacto </h1>
        <div className="contacto-container">
            <div className="contacto-container__info">
            <h3> Información de contacto </h3>
            <p> <strong> Dirección: </strong> Av. Corrientes 1234, CABA </p>
            <p> <strong> Teléfono: </strong> 011 1234-5678 </p>
            <p> <strong> Email: </strong>
            <a href="mailto: " target="_blank" rel="noreferrer">    </a> </p>
            </div>
            <div className="contacto-container__form">
            <h3> Formulario de contacto </h3>
            <form>
                <div className="form-group">
                <label for="nombre"> Nombre </label>
                <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
                </div>
                <div className="form-group">
                <label for="email"> Email </label>
                <input type="email" className="form-control" id="email" placeholder="Ingrese su email" />
                </div>
                <div className="form-group">
                <label for="mensaje"> Mensaje </label>
                <textarea className="form-control" id="mensaje" rows="3" placeholder="Ingrese su mensaje"></textarea>
                </div>
                <button type="submit" className="btn btn-primary"> Enviar </button>
            </form>
            </div>
        </div>
        </div>
    )
};

export default Contacto;