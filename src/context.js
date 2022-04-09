import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { data } from "./data";
import reducer from "./reducer";

const AppContext = createContext()
const initialState = {
    loading: false,
    cart: data,
    total: 0,
    amount: 0
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }

    const removeItem = (id) => {
        dispatch({type: 'REMOVE_ITEM', payload: id})
    }

    const increase = (id) => {
        dispatch({type: 'INCREASE', payload: id})
    }

    const decrease = (id) => {
        dispatch({type: 'DECREASE', payload: id})
    }

    const total = () => {
        dispatch({type: 'TOTALS'})
    }

    useEffect(()=>{
        total()
    }, [state.cart])

    return(
        <AppContext.Provider value={{
            ...state, 
            clearCart,
            removeItem,
            increase,
            decrease
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const GlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}