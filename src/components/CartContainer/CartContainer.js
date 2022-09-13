import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import "../CartContainer/CartContainer.css"
import Container from 'react-bootstrap/esm/Container';
export const CartContainer = () => {
  const { servicesCartList, removeService, clearService } = useContext(CartContext);
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
                      <td>${item.price*item.quantity}</td>
                      <td><Button variant="outline-dark" onClick={() => removeService(item.id)} className="botonEliminar">Eliminar</Button></td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            {servicesCartList.length > 0 &&
              <div className='text-end'>
                <Button variant="dark" onClick={() => clearService()} className="botonEliminarTodo">BORRAR TODO</Button>
              </div>}
          </div>
          : <p style={{marginTop: '100px'}}>Su carrito actualmente está vacío.</p>}
      </div >
    </Container>
  )
}