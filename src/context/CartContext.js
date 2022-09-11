import React from "react";
import { useState } from "react";
export const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
    const [servicesCartList, setServicesCartList] = useState([]);
    const addServices = (service) => {
        if (!isInCart(service.id)) {
            const newList = [...servicesCartList, service];
            setServicesCartList(newList);
        }
    }
    const removeService = (serviceId) => {
        const arrayCopy = [...servicesCartList];
        const arrayNew = arrayCopy.filter(item => item.id !== serviceId);
        setServicesCartList(arrayNew);
    }
    const clearService = () => {
        setServicesCartList([]);
    }
    const isInCart = (serviceId) => {
        return (
            servicesCartList.some(item => item.id===serviceId)
            )
    }
    return (
        <CartContext.Provider value={{servicesCartList, addServices, removeService, clearService,isInCart}}>
            {children}
        </CartContext.Provider>
    )
}