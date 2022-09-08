import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss' 
import {CartWidget} from '../CartWidget/CartWidget';
export function NavBar() {
  return (
    <>
      <Navbar className='header' >
        <Container>
          <Navbar.Brand href="#home"> <h1 className='titulo'>enter<em className="fix">fix</em></h1></Navbar.Brand>
          <Nav className="me-auto" align="end">
            <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-links" href="#about us">Nosotros</Nav.Link>
            <Nav.Link className="nav-links" href="#services">Servicios</Nav.Link>
            <Nav.Link className="nav-links" href="#contact us">Contacto</Nav.Link>
          </Nav>
        </Container>
        <CartWidget> </CartWidget>
      </Navbar> 
       
    </>
  
  );
}

