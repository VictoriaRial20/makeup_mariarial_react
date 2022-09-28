import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import "../CartContainer/CartContainer.css"
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormCart } from '../FormCart/FormCart';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { dataBase } from '../../utils/firebase';
import swal from 'sweetalert';
export const CartContainer = () => {
  const { servicesCartList, removeService, clearService, totalServices } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");
  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value
      },
      items: servicesCartList,
      total: totalServices(),
      data: Timestamp.fromDate(new Date())
    }
    const queryRef = collection(dataBase, "orders");
    addDoc(queryRef, order).then(respuesta => {
      setIdOrder(respuesta.id);
      swal({
        title: "Orden Enviada Correctamente",
        text: "Identificador: " + respuesta.id,
        icon: 'success',
        button: 'Aceptar',
      });
      clearService();
    });
    console.log(idOrder);
  }
  return (
    <Container fluid>
      <div>
        {servicesCartList.length > 0 ?
          <div className='tableCart'>
            <Row>
              <Col sm={7}>
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
                        <tr key={item.id}>
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
                <Row>
                  <Col className='text-start'><Button variant="dark" className="botonBorrar" onClick={() => clearService()}>Borrar todo</Button></Col>
                  <Col className='text-end'><strong>Total: ${totalServices()}</strong></Col>
                </Row>
              </Col>
              <Col sm={5} >
                {servicesCartList.length > 0 &&
                  <>
                    <Container className="form justify-content-center">
                      <Row><Col><br /><hr /></Col></Row>
                      <Row>
                        <Col><FormCart sendOrder={sendOrder} /></Col>
                      </Row>
                      <Row><Col><br /><hr /><br /></Col></Row>
                    </Container>
                  </>
                }
              </Col>
            </Row>
          </div>
          :
          <>
            <p style={{ marginTop: '100px' }}>Su carrito actualmente está vacío.</p>
            <Button variant="dark" className="botonIrDeCompras" as={NavLink} to="/services">Ir de compras</Button>
          </>
        }
      </div >
    </Container>
  )
}