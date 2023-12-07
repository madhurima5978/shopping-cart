import React, { createContext } from 'react';
import { useState } from 'react';
import {PRODUCTS} from '../products';
export const shopContext = createContext(null);

const getDefaultCart = () => {
    let cart ={}
    for(let i=1;i< PRODUCTS.length+1;i++) {
        cart[i]=0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const UpdateItemCount = (newAmount, itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]: newAmount}));
    }

    const getTotalCartAmount = () => {
        let totAmt = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product)=>product.id ===Number(item));
                totAmt+=cartItems[item]*itemInfo.price
            }
        }
        return totAmt;
    };

    const contextValue = {cartItems, addToCart, removeFromCart, UpdateItemCount,getTotalCartAmount};
    console.log(cartItems);
  return (
    <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
  );
};
