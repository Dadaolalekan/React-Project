import { useState } from "react"
import{CartContext} from "./context"
import { invalidDataWithUndefined } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);

    const addToCart= (item)=>{
    


        setCart((prev)=> {
          const productExist = prev.find((exist) => exist.id == item.id) 
        if (productExist) {
          return alert("product already exist!")
        } else {
          return[...prev,item]
        }
        } )

        const clearCart = ()=>{
            setCart([])
        }
    }
  return (
    <CartContext.Provider value={{cart, addToCart}}>{children}</CartContext.Provider>
  )
}

