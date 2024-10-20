import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { products } from "../assets/Asset";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});

    const Addtocart = async(itemId, size)=>{
        if(!size){
            toast.error('SELECT PRODUCT SIZE');
            return;
        }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]  += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1
        }
        setCartItems(cartData);

    }
//     useEffect(()=>{
// Addtocart();
//     },[cartItems])
const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
            totalCount += cartItems[itemId][size];
        }
    }
    return totalCount;
};


    const value = {
        currency, delivery_fee, products, search, setSearch, showSearch, setShowSearch,cartItems,Addtocart,getCartCount
    }
    return (
        <ShopContext.Provider value={value}>
         {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;