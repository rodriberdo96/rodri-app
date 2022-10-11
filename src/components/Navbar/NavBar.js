import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss' 
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import Category from '../Categorias/Category';
import {useAuth} from '../../context/AuthContext';
import React from 'react';

const NavBar= () => {
  const {user, logout} = useAuth();
  const handleMousesobre = (e) => {
    e.target.style.color = 'grey';
  }
  const handleMousefuera = (e) => {
    e.target.style.color = 'black';
  }
  
  return (
    <>
      <Navbar className='header' >
        <Container >
          <Navbar.Brand href="/" className='titulo' ><h1 className='titulo'>enter<em className="fix">fix</em></h1></Navbar.Brand>
          <Nav className="me-auto" align="end">
            <Link to="/" className="links" onMouseOver={handleMousesobre} onMouseOut={handleMousefuera}> Home </Link>
            <Category className= "links"  onMouseOver={handleMousesobre} onMouseOut={handleMousefuera}/>
            <Link to='/nosotros' className="links"  onMouseOver={handleMousesobre} onMouseOut={handleMousefuera}> Nosotros </Link>
            <Link to='/servicios' className="links"  onMouseOver={handleMousesobre} onMouseOut={handleMousefuera} > Servicios </Link>
            <Link to='/contacto' className="links"  onMouseOver={handleMousesobre} onMouseOut={handleMousefuera} > Contacto </Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
      <div className="header_user">
        <small className="header_user_name">Bienvenido: {user.email}</small>
        <button className="header_user_logout" onClick={logout}>Cerrar sesión</button>
      </div>
    </>
  );
}

export default NavBar;