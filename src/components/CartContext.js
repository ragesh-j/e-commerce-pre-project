import React, { createContext, useState } from "react"

const CartContext=createContext()
function CartProvider({children}){
    const [cartData,setCartData]=useState([])
    
    const addCartData=(data)=>{
        
        setCartData([...cartData,data])
    }
    const removeCartData=(data)=>{
        const updatedData=cartData.filter(obj=>obj.title!==data.title)
        return setCartData(updatedData)
    }
    return <>
    <CartContext.Provider value={{cartData , addCartData, removeCartData}}>
        {children}
    </CartContext.Provider>
    </>
}

export{CartContext,CartProvider}