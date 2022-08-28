import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss' 
import {CartWidget} from '../CartWidget';
export function NavBar() {
  return (
    <>
      <Navbar bg="trans" variant="dark" classname="navbar">
        <Container>
          <Navbar.Brand href="#home">The Workshop Factory</Navbar.Brand>
          <Nav className="me-auto" align="end">
            <Nav.Link classname="nav-links" href="#home">Home</Nav.Link>
            <Nav.Link classname="nav-links" href="#about us">About us</Nav.Link>
            <Nav.Link classname="nav-links" href="#services">Services</Nav.Link>
            <Nav.Link classname="nav-links" href="#contact us">Contact us</Nav.Link>
          </Nav>
        </Container>
        <CartWidget> </CartWidget>
      </Navbar> 
       
    </>
  
  );
}
