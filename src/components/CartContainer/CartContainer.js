import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import "../CartContainer/CartContainer.css"
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const CartContainer = () => {
  const { servicesCartList, removeService, clearService, totalServices } = useContext(CartContext);
  console.log(servicesCartList);
  return (
    <Container fluid>
      <div>
        {servicesCartList.length > 0 ?
          <div className='tableCart'>
            <Table>
              <thead>
                <tr>
                  <th>Servicio</th>
                  <th></th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  servicesCartList.map(item => (
                    <tr>
                      <td>< img src={item.img} alt="imgServicio" className='imgService'></img></td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price * item.quantity}</td>
                      <td><Button variant="outline-dark" onClick={() => removeService(item.id)} className="botonEliminar">Eliminar</Button></td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            {servicesCartList.length > 0 &&
              <>
                <Container>
                  <Row>
                    <Col sm={10}></Col>
                    <Col><p>Total: ${totalServices()}</p></Col>
                  </Row>
                  <Row>
                    <Col sm={8}></Col>
                    <Col><Button variant="outline-dark" onClick={() => clearService()}>BORRAR TODO</Button></Col>
                    <Col><Button variant="dark" className="botonFinalizarCompra">FINALIZAR COMPRA</Button></Col>
                  </Row>
                </Container>
              </>
            }
          </div>
          :
          <>
            <p style={{ marginTop: '100px' }}>Su carrito actualmente está vacío.</p>
            <Button variant="dark" className="botonIrDeCompras" as={NavLink} to="/servicios">Ir de compras</Button>
          </>
        }
      </div >
    </Container>
  )
}