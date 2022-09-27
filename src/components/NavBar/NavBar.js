import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import logo from '../../img/logoprincipal.png';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from "react-router-dom";
export const NavBar = () =>{
    return (
        <Navbar fixed="top" bg="light" variant="light" className='navBar'>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src={logo} alt='LogoPage' className='logo' />
                </Navbar.Brand>
                <div className='justify-content-end'>
                    <Nav className="me-auto menu ">
                        <Nav.Link as={NavLink} to="/servicios">SERVICIOS</Nav.Link>
                        <Nav.Link as={NavLink} to="/categoria/cursos">CURSOS</Nav.Link>
                        <Nav.Link as={NavLink} to="/categoria/maquillajes">MAQUILLAJES</Nav.Link>
                        <Nav.Link as={NavLink} to="/cart" >
                            <CartWidget></CartWidget>
                        </Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    )
}