import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemDetail.css'
import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
const ItemDetail = ({ serviciosSeleccionado}) => {
    //console.log(serviciosSeleccionado);
    const onAdd =(itemcount) =>{
        console.log("Cantidad:", itemcount);
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
                        <ItemCount stock={5} initial={0} onAdd={onAdd}/>
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