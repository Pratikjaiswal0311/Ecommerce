import { createContext, useContext, useState } from "react";
import { products } from "../assets/Asset";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const value = {
        currency, delivery_fee, products, search, setSearch, showSearch, setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>

            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;