import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from '../../utils/firebase';
const ItemDetailContainer = () => {
    const { serviceId } = useParams();
    const [serviceSelect, setServiceSelect] = useState({});
    useEffect(() => {
        const query = doc(dataBase, "items", serviceId);
        getDoc(query).then(
            response => {
                const newDoc = {
                    ...response.data(),
                    id: response.id
                }
            setServiceSelect(newDoc);
            }
        ).catch(error=>console.log("error"));
    }, [serviceId])
    return (
        <div>
            <ItemDetail serviceSelect={serviceSelect} />
        </div>
    )
}
export default ItemDetailContainer