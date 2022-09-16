import { createContext, useState} from "react"

export const CartContext = createContext();

export const ProductProvider = ({defaultValue = [], children}) => {
    const [items, setItems] = useState(defaultValue);



    return(
        <CartContext.Provider value={[items, setItems]}>
            {children}
        </CartContext.Provider>
    )
};




