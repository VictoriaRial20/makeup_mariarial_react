import './Item.css'
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom";
export const Item = ({servicio}) => {
    const {name, id , img, price,description} = servicio
    return (
        <div className="serviciosItem" key={name} as={NavLink} to={`/detalle/${id}`}>
            <img src={img} alt="" className='imagen'/>
            <p className='textoNameItem'>{name}</p>   
            <p className='textoPriceItem'> ${price}</p>   
            <p className='textoDescriptionItem'>{description}</p>
            <Button variant="outline-dark" className='buttomItem' as={NavLink} to={`/detalle/${id}`}>Ver Más</Button>
        </div>
    )
}