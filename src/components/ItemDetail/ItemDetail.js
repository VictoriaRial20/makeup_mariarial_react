import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemDetail.css'
import React, { useContext, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from "react-router-dom";
const ItemDetail = ({ serviceSelect }) => {
    const { addServices } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    console.log(quantity);
    const onAdd = (itemcount) => {
        const newService = { ...serviceSelect, quantity: itemcount };
        addServices(newService);
        setQuantity(itemcount);
    }
    return (
        <Container fluid className='ItemDetail'>
            <Row>
                <Col xs={2}></Col>
                <Col xs={4}>
                    <div className='text-end'>
                        <img src={serviceSelect.img} alt="" className='imgServicioSelect'></img>
                    </div>
                </Col>
                <Col xs={4} className='prueba'>
                    <div >
                        <div className='text-end'>
                            <Button className='botonAtras' as={NavLink} to="/services">Seguir Comprando</Button>
                        </div>
                        <h1 className='textoName text-start'><strong>{serviceSelect.name}</strong></h1>
                        <div className='coloredLine'></div>
                        <br></br>
                        <p className='textoDescription text-start'>INFORMACIÓN</p>
                        <h3 className='textoDescription text-start'>{serviceSelect.description}</h3>
                        <h2 className='textoPrice text-start'>${serviceSelect.price}</h2>
                        <div className='coloredLine'></div>
                        <br></br>
                    </div>
                    <div>
                        <ItemCount stock={serviceSelect.stock} initial={0} onAdd={onAdd} />
                    </div>
                    <div>
                        <br></br>
                        <div className='coloredLine'></div>
                    </div>
                </Col>
                <Col xs={2}></Col>
            </Row>
        </Container>
    )
}
export default ItemDetail;