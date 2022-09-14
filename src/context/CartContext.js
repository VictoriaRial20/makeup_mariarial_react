import React from "react";
import { useState } from "react";
export const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
    const [servicesCartList, setServicesCartList] = useState([]);
    const addServices = (service) => {
        if (!isInCart(service.id)) {
            const newList = [...servicesCartList, service];
            setServicesCartList(newList);
            console.log("newlist", newList);
        }else{
            const serviceRepeat = servicesCartList.find(item => item.id === service.id);
            //console.log("serviceRepeat",serviceRepeat);
            const newQuantity = serviceRepeat.quantity + service.quantity; 
            if (newQuantity > 5) { 
                console.log("Supera Stock")
            }else{
                serviceRepeat.quantity = newQuantity;
                const newList = [...servicesCartList.filter(item => item.id !== serviceRepeat.id), serviceRepeat];
                setServicesCartList(newList);
                console.log("newlist", newList);
            }
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
    const totalServices=() =>{
        let totalPrice = 0;
        servicesCartList.forEach(item => {
            totalPrice= (item.price*item.quantity) + totalPrice;
        })
        return(totalPrice)
    }
    return (
        <CartContext.Provider value={{servicesCartList, addServices, removeService, clearService,isInCart,totalServices}}>
            {children}
        </CartContext.Provider>
    )
}