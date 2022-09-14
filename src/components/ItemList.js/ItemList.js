import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css';
export const ItemList = ({servicios}) => {
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