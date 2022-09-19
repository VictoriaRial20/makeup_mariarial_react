import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { baseDeDatos } from '../../utils/firebase';
const ItemDetailContainer = () => {
    const { servicioId } = useParams();
    const [serviciosSeleccionado, setServiciosSeleccionado] = useState({});
    useEffect(() => {
        const query = doc(baseDeDatos, "items", servicioId);
        getDoc(query).then(
            response => {
                const newDoc = {
                    ...response.data(),
                    id: response.id
                }
            setServiciosSeleccionado(newDoc);
            }
        ).catch(error=>console.log("error"));
    }, [servicioId])
    return (
        <div>
            <ItemDetail serviciosSeleccionado={serviciosSeleccionado} />
        </div>
    )
}
export default ItemDetailContainer