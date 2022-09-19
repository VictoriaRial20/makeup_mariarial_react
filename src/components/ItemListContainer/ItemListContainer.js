import React from 'react';
import { ItemList } from "../ItemList.js/ItemList";
import './ItemListContainer.css';
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import { baseDeDatos } from '../../utils/firebase';
const ItemListContainer = () => {
    const { tipoServicio } = useParams();
    const [servicios, setServicios] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                let queryRef = tipoServicio === undefined ? collection(baseDeDatos, "items") : query(collection(baseDeDatos,"items"), where("category","==", tipoServicio));
                const response = await getDocs(queryRef);
                const docs = response.docs;
                const data = docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                setServicios(data);
            } catch (error) {
                console.log("Error");
            }
        }
        getData();
    }, [tipoServicio])
    return (
        <div className='ItemListContainer'>
            <ItemList servicios={servicios} />
        </div>
    )
}
export default ItemListContainer