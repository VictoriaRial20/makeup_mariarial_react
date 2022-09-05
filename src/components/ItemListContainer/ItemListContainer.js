import { ItemList } from "../ItemList.js/ItemList";
import './ItemListContainer.css';
import { useEffect, useState } from 'react'
import obtenerServicios from '../../helper/helper';
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
    const {tipoServicio} = useParams();
    const [servicios, setServicios] = useState([]);
    //console.log(useParams());
    useEffect(() => {
        const funcionServicios = async () => {
            try {
                const listServicio = await obtenerServicios();
                if ( tipoServicio === undefined){
                    setServicios(listServicio)
                } else{
                    const nuevaLista = listServicio.filter(item => item.category === tipoServicio);
                    //console.log("nuevaista", nuevaLista);
                    setServicios(nuevaLista);
                }
                //console.log('ListaServicio', listServicio);
            } catch (error) {
                console.log("Error");
            }
        }
        funcionServicios();
    }, [tipoServicio])
    return (
        <div className='ItemListContainer'>
            <ItemList servicios={servicios}/>
        </div>
    )
}
export default ItemListContainer