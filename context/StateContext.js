import { createContext, useContext, useState, useEffect, useSyncExternalStore } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    let foundProduct; 

    const addToCart = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item.product.name === product.name);

        setTotalPrice((prevTotalPrice) => {
                if (product.isOnSale) {
                    return prevTotalPrice + product.salePrice * quantity;
                } else {
                    return prevTotalPrice + product.price * quantity;
                }
            });

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct.product.name === product.name) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, {product: product, quantity: quantity}])
        }
    }

    const removeFromCart = (product) => {
        foundProduct = cartItems.find((item) => item.product.name === product.product.name);
        const newCartItems = cartItems.filter((item) => item.product.name !== product.product.name);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.product.price * foundProduct.quantity);
        setCartItems(newCartItems);
    }    

    const toggleCartItemQuantity = (name, value) => {
        foundProduct = cartItems.find((item) => item.product.name === name); 

        if (value === 'inc') {
            const updatedData = cartItems.map(item => (item.product.name === name ? { ...item, quantity: item.quantity + 1 } : item));
            setCartItems(updatedData);
            setTotalPrice((prevTotalPrice) => {
                if (foundProduct.product.isOnSale) {
                    return prevTotalPrice + foundProduct.product.salePrice;
                } else {
                    return prevTotalPrice + foundProduct.product.price;
                }
            });
        } else if (value === 'dec'&& foundProduct.quantity > 1) {
            const updatedData = cartItems.map(item => (item.product.name === name ? { ...item, quantity: item.quantity - 1 } : item));
            setCartItems(updatedData);
            setTotalPrice((prevTotalPrice) => {
                if (foundProduct.product.isOnSale) {
                    return prevTotalPrice - foundProduct.product.salePrice;
                } else {
                    return prevTotalPrice + foundProduct.product.price;
                }
            });
        }
    }

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                addToCart,
                removeFromCart,
                toggleCartItemQuantity
            }}
        >

            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);