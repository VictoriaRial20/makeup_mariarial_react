import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../FormCart/FormCart.css'
export const FormCart = ({ sendOrder }) => {
    return (
            <Form onSubmit={sendOrder} >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre Completo:</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Telefono:</Form.Label>
                        <Form.Control type="number" placeholder="" required />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@gmail.com" required />
                </Form.Group>
                <Button variant="dark" className="botonFinalizarCompra" type="submit">
                    Finalizar Compra
                </Button>
            </Form>
    )
}