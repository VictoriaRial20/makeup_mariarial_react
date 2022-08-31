import './Item.css'
import React from 'react';
export const Item = ({servicio}) => {
    return (
        <div className="servicios" key={servicio.name}>
            <img src={servicio.img} alt="" className='imagen'/>
            <p className='textoNombre'>{servicio.name}</p>   
            <p className='textoPrecio'> ${servicio.price}</p>   
            <p className='textoDescripcion'>{servicio.description}</p>
        </div>
    )
}