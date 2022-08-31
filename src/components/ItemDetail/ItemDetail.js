import React, { useState, useEffect } from 'react';
import obtenerServicios from '../../helper/helper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount';
const ItemDetail = () => {
    const [serviciosSeleccionado, setServiciosSeleccionado] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        obtenerServicios()
            .then(response => {
                setServiciosSeleccionado(response.find(servicio => servicio.id === 1))
                setLoading(false)
            })
    }, [])
    //console.log(serviciosSeleccionado);
    const agregarCarrito = (productos) => {
        console.log('Agregado al carrito', productos);
    }
    return (
        <Container fluid className='ItemDetail'>
            <Row>
                <Col xs={1}></Col>
                <Col xs={5} className='prueba'>
                    <div >
                        <h1 className='textoName'><strong>{serviciosSeleccionado.name}</strong></h1>
                        <div className='coloredLine'></div>
                        <br></br>
                        <p className='textoDescription'><strong>INFORMACIÓN</strong></p>
                        <h3 className='textoDescription'>{serviciosSeleccionado.description}</h3>
                        <h2 className='textoPrice'><strong>COSTO: ${serviciosSeleccionado.price}</strong></h2>
                        <div className='coloredLine'></div>
                        <br></br>
                    </div>
                    <div>
                        <ItemCount stock={5} initial={0} onAdd={agregarCarrito} />
                    </div>
                </Col>
                <Col xs={1}></Col>
                <Col xs={4}>
                    <div className='text-start'>
                        <img src={serviciosSeleccionado.img} alt="" className='imgServicioSelect'></img>
                    </div>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
}
export default ItemDetail;