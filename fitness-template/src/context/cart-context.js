import React, {useState, createContext} from 'react';



export const cartContext = createContext();


export const CartProvider = (props) => {

    const [cartIsOpen, setCartIsOpen] = useState(false);

    return(
        <cartContext.Provider value={[cartIsOpen, setCartIsOpen]}>
            {props.children}
        </cartContext.Provider>
    )
}