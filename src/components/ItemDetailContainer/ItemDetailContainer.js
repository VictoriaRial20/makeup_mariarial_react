import React, { useState, useEffect } from 'react';
import obtenerServicios from '../../helper/helper';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom";
const ItemDetailContainer = () =>{
    const {detalleServicio} = useParams();
    const [serviciosSeleccionado, setServiciosSeleccionado] = useState({});
    useEffect(() => {
        obtenerServicios()
            .then(response => {
                setServiciosSeleccionado(response.find(servicio => servicio.id ===  detalleServicio))
            })
    }, [detalleServicio])
    return(
        <div>
            <ItemDetail serviciosSeleccionado={serviciosSeleccionado}/>
        </div>
    )
}
export default ItemDetailContainer