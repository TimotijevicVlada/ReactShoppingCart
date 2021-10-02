import React, {useState, useEffect, useContext, useReducer} from 'react';
import {data} from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    
    const [cart, setCart] = useState(data);

    return (
        <AppContext.Provider valuer={{cart}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}





