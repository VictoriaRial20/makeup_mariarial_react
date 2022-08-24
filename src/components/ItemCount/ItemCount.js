import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import foto1 from '../../img/foto1.jpg';
import './ItemCount.css'

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
        <div>
            <p>MAQUILLAJE SOCIAL</p>
            <img src={foto1} alt='' className='foto1'/>
            <p>Cantidad: {itemcount} </p>
            <Button variant="outline-light" onClick={incrementar} className="boton"> + </Button>
            {' '}
            <Button variant="outline-light" onClick={decrementar} className="boton"> - </Button> <br/>
            <Button variant="outline-light" onClick={()=>{if (itemcount>0) {onAdd (itemcount)}}}>Agregar al Carrito</Button>
        </div>
    )
}