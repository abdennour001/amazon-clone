// setup data layer

import React, { createContext, useContext, useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

// how to use data inside of a component
export const useStateValue = () => {
    return useContext(StateContext);
};
