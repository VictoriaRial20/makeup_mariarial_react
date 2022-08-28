import React, { useEffect, useState } from 'react'
import { Item } from '../Item/Item';
import { arregloServicios } from '../Item/Item';
import './ItemList.css';

export const ItemList = () => {
    const [servicios, setServicios] = useState([]);

    const obtenerServicios = () =>{
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                resolve(arregloServicios)
            },2000);
        })
    }
    useEffect(() => {
        const funcionServicios = async() => {
            try{
                const listServicio = await obtenerServicios();
                setServicios(listServicio);
                console.log('ListaServicios' , listServicio);
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
                        <Item servicio={servicio}/>
                    )
                })
            }
        </div>
    )
}