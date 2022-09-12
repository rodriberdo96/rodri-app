import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss' 
import {CartWidget} from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import Category from '../Categorias/Category';

export function NavBar() {
  return (
    <>
      <Navbar className='header' >
        <Container>
          <Navbar.Brand href="#home"> <Link to="/" className='titulo'> <h1 className='titulo'>enter<em className="fix">fix</em></h1></Link></Navbar.Brand>
          <Nav className="me-auto" align="end">
            <Link to="/" className="links"> Home </Link>
            <Link to='/nosotros' className="links"> Nosotros </Link>
            <Link to='/servicios' className="links" > Servicios </Link>
            <Link to='/contacto' className="links" > Contacto </Link>
          </Nav>
        </Container>
        <Category/>
        <CartWidget> </CartWidget>
      </Navbar> 
    </>
  );
}

