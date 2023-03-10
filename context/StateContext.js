import { createContext, useContext, useState, useEffect, useSyncExternalStore } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity - 1 < 1) return 1;
            return prevQuantity - 1;
        });
    }

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                quantity,
                increaseQuantity,
                decreaseQuantity
            }}
        >

            {children}
        </Context.Provider>
    )
}