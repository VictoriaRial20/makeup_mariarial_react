import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css';
export const ItemList = ({services}) => {
    return (
        <div className='itemList'>
            {
                services.map((services) => {
                    return (
                        <Item key={services.name} services={services}/>
                    )
                })
            }
        </div>
    )
}