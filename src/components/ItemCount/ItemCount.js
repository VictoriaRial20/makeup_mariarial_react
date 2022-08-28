import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import './ItemCount.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ItemCount =({stock, initial, onAdd}) => {
    const [itemcount, setItemcount] = useState(initial);

    const incrementar =()=>{
        if (itemcount < stock){
            setItemcount(itemcount + 1)
        }
    }

    const decrementar =()=>{
        if (itemcount > 0){
            setItemcount(itemcount - 1)
        }
    }

    return(
        <Container>
            <Row>
                <Col sm={4} className='text-end' ><Button variant="outline-dark" onClick={incrementar} className="boton"> + </Button></Col>
                <Col sm={4}><p className='texto'>{itemcount} </p></Col>
                <Col sm={4} className='text-start'><Button variant="outline-dark" onClick={decrementar} className="boton"> - </Button></Col>
            </Row>
            <Row>
                <Col sm><Button className='botonAgregarCarrito' variant="outline-dark" onClick={()=>{if (itemcount>0) {onAdd (itemcount)}}}>AGREGAR AL CARRITO</Button></Col>
            </Row>
        </Container>
    )
}

//<p>MAQUILLAJE SOCIAL</p>
//<img src={foto1} alt='' className='foto1'/>