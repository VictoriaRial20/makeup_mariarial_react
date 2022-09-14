import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import iconCart from '../../img/iconCart.png';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './CartWidget.css';
function CartWidget() {
    const {getTotalItem,servicesCartList} = useContext(CartContext);
    return (
        <div>
            {
                servicesCartList.length>0 && 
                <>
                <Container>
                <Row>
                    <Col><img src={iconCart} alt='' className='iconCart' /></Col>
                    <Col><p>{getTotalItem()}</p></Col>
                </Row>
                </Container>
                </>     
            }
        </div>
    )
}
export default CartWidget