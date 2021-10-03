import React, {useState, useEffect, createContext, useContext, useReducer} from 'react';
import {data} from './data';
import reducer from './reducer';

const AppContext = createContext();

const AppProvider = ({children}) => {
    
    const [cart, setCart] = useState(data);

    //console.log(cart)

    return (
        <AppContext.Provider value={{cart}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}





