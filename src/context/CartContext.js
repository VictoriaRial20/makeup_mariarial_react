import React from "react";
import { useState } from "react";
export const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
    const [servicesCartList, setServicesCartList] = useState([]);
    const addServices = (service) => {
        if (!isInCart(service.id)) {
            const newList = [...servicesCartList, service];
            setServicesCartList(newList);
        } else {
            const serviceRepeat = servicesCartList.find(item => item.id === service.id);
            const newQuantity = serviceRepeat.quantity + service.quantity;
            {
                newQuantity > 5 ? console.log("Supera Stock") :
                serviceRepeat.quantity = newQuantity;
                const newList = [...servicesCartList.filter(item => item.id !== serviceRepeat.id), serviceRepeat];
                setServicesCartList(newList);
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
            servicesCartList.some(item => item.id === serviceId)
        )
    }
    const totalServices = () => {
        let totalPrice = 0;
        servicesCartList.forEach(item => {
            totalPrice = (item.price * item.quantity) + totalPrice;
        })
        return (totalPrice)
    }
    const getTotalItem = () =>{
        const totalItem = servicesCartList.reduce((acc,item)=> acc=acc+item.quantity, 0);
        return totalItem;
    }
    return (
        <CartContext.Provider value={{ servicesCartList, addServices, removeService, clearService, isInCart, totalServices, getTotalItem}}>
            {children}
        </CartContext.Provider>
    )
}