import { createContext, ReactNode, useContext, useState } from "react";

export interface Product {
    id: string
    name: string
    imgURL: string
    price: string
}[]

interface CyclesContextProviderProps {
    children: ReactNode
}

interface CartContextType {
    cartItems: Product[] | null 
    setCartItemsMOCK: (product: Product) => void
}

export const CartContext = createContext({} as CartContextType)

export default function CartContextProvider({children}: CyclesContextProviderProps ) {
    const [cartItems, setCartItems] = useState([])

    function setCartItemsMOCK(product: Product) {
        setCartItems(prevState => [...prevState, product])
        console.log(cartItems)
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItemsMOCK
        }}>
            {children}
        </CartContext.Provider> 
    )
}