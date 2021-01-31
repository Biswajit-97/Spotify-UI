import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext(); // this sits on the top of our App component

export const DataLayer = (
  { reducer, initialState, children } // this dataLayer has an initial State, A reducer to change State and Children
) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

//Accessing Datalayer values and dispatching actions on it
export const useDataLayerValue = () => useContext(DataLayerContext);
