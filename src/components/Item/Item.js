import React from 'react'
import foto1 from '../../img/foto1.jpg';
import foto2 from '../../img/foto2.jpg';
import foto3 from '../../img/foto3.jpg';
import foto4 from '../../img/foto4.jpg';
import foto5 from '../../img/foto5.jpg';
import foto6 from '../../img/foto6.jpg';
import './Item.css'
import { ItemCount } from '../ItemCount/ItemCount';

export const arregloServicios = [ 
    {
        nombre: "CURSO AUTOMAQUILLAJE",
        imagen: foto1,
        precio: "1200",
        id: 1,
        descripcion: "La duración del curso de Automaquillaje es de 2 clases de 120 minutos cada una.Verán todo lo necesario para una rutina de skincare, piel perfecta, boca impecable, y dos looks de ojos en base a los gustos de la clienta."
    },
    {
        nombre: "CURSO TÉCNICAS",
        imagen: foto2,
        precio: "1200",
        id: 2,
        descripcion: "La duración del curso de Técnicas es de 1 clase de 120 minutos. Verán todo lo necesario para una aprender como maquillar una novia, destacar los rasgos y lograr lo que su clienta desea."
    },
    {
        nombre: "CURSO NOVIAS",
        imagen: foto3,
        precio: "1200",
        id: 3,
        descripcion: "La duración del curso de novia es de 1 clase de 120 minutos. Verán todo lo necesario para una aprender como maquillar una novia, destacar los rasgos y lograr lo que su clienta desea."
    },
    {
        nombre: "MAQUILLAJE SOCIAL",
        imagen: foto4,
        precio: "1200",
        id: 4,
        descripcion: "La duración del maquillaje social es 60 minutos aproximadamente. En domicilio o en nuestro estudio.Para un buen funcionamiento de la agenda somos super puntuales con los horarios."
    },
    {
        nombre: "MAQUILLAJE NOVIAS",
        imagen: foto5,
        precio: "1200",
        id: 5,
        descripcion: "La duración del maquillaje de novia es 90 minutos aproximadamente. En el caso de que desees la exclusividad de la maquilladora durante tu gran día, no dudes en consultarnos el costo."
    },
    {
        nombre: "MAQUILLAJE 15",
        imagen: foto6,
        precio: "1200",
        id: 6,
        descripcion: "La duración del maquillaje de 15 años es 90 minutos aproximadamente. En el caso de que desees la exclusividad de la maquilladora durante tu gran día, no dudes en consultarnos el costo."
    },
]
const agregarCarrito = (productos)=>{
    console.log('Agregado al carrito', productos);
  }
export const Item = ({servicio}) => {
    return (
        <div className='servicios'>
            <img src={servicio.imagen} alt="" className='imagen'/>
            <p className='textoNombre'>{servicio.nombre}</p>   
            <p className='textoPrecio'> ${servicio.precio}</p>   
            <p className='textoDescripcion'>{servicio.descripcion}</p>
            <ItemCount stock={5} initial={0} onAdd={agregarCarrito}/>
        </div>
    )
}