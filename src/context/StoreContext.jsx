import { createContext } from "react";
import { food_list } from "../assets/assets";

export let StoreContext = createContext(null);

let StoreContextProvider = (props) => {
    
    

    let contextValue = {
        // add your state or functions here
        food_list
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
