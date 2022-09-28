import { ItemList } from "../ItemList.js/ItemList";
import './ItemListContainer.css';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import { dataBase } from '../../utils/firebase';
const ItemListContainer = () => {
    const { TypeService } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                let queryRef = TypeService === undefined ? collection(dataBase, "items") : query(collection(dataBase,"items"), where("category","==", TypeService));
                const response = await getDocs(queryRef);
                const docs = response.docs;
                const data = docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                setServices(data);
            } catch (error) {
                console.log("Error");
            }
        }
        getData();
    }, [TypeService])
    return (
        <div className='ItemListContainer'>
            <ItemList services={services} />
        </div>
    )
}
export default ItemListContainer