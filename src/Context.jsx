import React, { createContext } from "react";
import AllProdData from "./JsonData/allProd";

export const ShopContext  = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {AllProdData};
        
    return (

        <ShopContext.Provider value={contextValue}>

            {props.children}
                
        </ShopContext.Provider>
        
    )
    
}

export default ShopContextProvider 