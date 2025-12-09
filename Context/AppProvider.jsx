import React from 'react'
// import{UserProvider} from './UserContext'
import { CartProvider } from './CartProvider'

export const AppProvider = ({children}) => {
  return (
    
        <CartProvider>
            {children}
        </CartProvider>
   
  )
}

export default AppProvider