import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.css'
import logo from '../../img/logoprincipal.png';

import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <Navbar fixed="top" bg="light" variant="light" className='navBar'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='' className='logo' />
                </Navbar.Brand>
                <div className='justify-content-end'>
                    <Nav className="me-auto menu ">
                        <Nav.Link href="#home">SERVICIOS</Nav.Link>
                        <Nav.Link href="#features">CONTACTO</Nav.Link>
                        <Nav.Link href="#pricing" >
                            <CartWidget></CartWidget>
                        </Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar; 