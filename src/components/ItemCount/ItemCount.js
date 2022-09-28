import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import { NavLink } from "react-router-dom";
import Col from 'react-bootstrap/Col';
export const ItemCount = ({ stock, initial, onAdd }) => {
    const [itemcount, setItemcount] = useState(initial);
    const incrementar = () => {
        if (itemcount < stock) {
            setItemcount(itemcount + 1)
        }
    }
    const decrementar = () => {
        if (itemcount > 0) {
            setItemcount(itemcount - 1)
        }
    }
    const [esconderCount, setEsconderCount] = useState(false);
    return (
        <Container>
            <div>
                {!esconderCount ?
                    <>
                        <Row className='justify-content-sm-center'>
                            <Col></Col>
                            <Col sm={2}>
                                <Button variant="outline-dark" onClick={decrementar} className="boton">-</Button>
                            </Col>
                            <Col sm={2}>
                                <p className='texto'>{itemcount}</p>
                            </Col>
                            <Col sm={2}>
                                <Button variant="outline-dark" onClick={incrementar} className="boton">+</Button>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-grid gap-2">
                                    <Button className='botonAgregarCarrito' variant="outline-dark" onClick={() => {
                                        if (itemcount > 0) {
                                            onAdd(itemcount)
                                            setEsconderCount(true)
                                        }
                                    }}>
                                        AGREGAR AL CARRITO
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </>
                    :
                    <div className="d-grid gap-2">
                        <Button className='botonComprar' variant="dark" as={NavLink} to="/cart">
                            FINALIZAR COMPRA
                        </Button>
                    </div>
                }
            </div>
        </Container>
    )
}