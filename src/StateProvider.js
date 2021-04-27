import { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// wrap our app and provide data layer to every component
export const StateProvider = ({reducer, initialState, children}) => {
    return(
        <StateContext.Provider
            value={useReducer(reducer, initialState)}
        >
            {children}
        </StateContext.Provider>
    )
}
 
// pull information from the data layer
export const useStateValue = () => useContext(StateContext);