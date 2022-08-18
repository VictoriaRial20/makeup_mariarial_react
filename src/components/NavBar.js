import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src='./img/logoprincipal'></img>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">SERVICIOS</Nav.Link>
                    <Nav.Link href="#features">CONTACTO</Nav.Link>
                    <Nav.Link href="#pricing">CARRITO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar; 