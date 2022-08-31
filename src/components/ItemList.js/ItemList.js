import { useEffect, useState } from 'react'
import { Item } from '../Item/Item';
import obtenerServicios from '../../helper/helper';
import './ItemList.css';
export const ItemList = () => {
    const [servicios, setServicios] = useState([]);
    useEffect(() => {
        //Función asincrona, hago una promesa para resolver y traer el arreglo a partir de la función obtenerServicios sino muestra en pantalla error 
        const funcionServicios = async() => {
            try{
                const listServicio = await obtenerServicios();
                setServicios(listServicio);
                console.log('ListaServicio' , listServicio);
            } catch(error){
                console.log("Error");
            }
        }
        funcionServicios();
    },[])
    return (
        <div className='itemList'>
            {
                servicios.map((servicio) => {
                    return (
                        <Item key={servicio.name} servicio={servicio}/>
                    )
                })
            }
        </div>
    )
}