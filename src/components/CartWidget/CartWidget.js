//import { useState } from 'react';
//import { CartContext } from '../../context/CartContext';
import iconCart from '../../img/iconCart.png'
import './CartWidget.css'
function CartWidget() {
    /*const [itemsQuantity, setItemQuantity] = useState(0);
    const finaly = servicesCartList.reduce((a,v)=> a=a+v.quantity, 0)
    console.log("resulado", finaly)
    setItemQuantity(finaly)*/
    return (
        <div>
            <img src={iconCart} alt='' className='iconCart' />
            <p></p>
        </div>
    )
}
export default CartWidget