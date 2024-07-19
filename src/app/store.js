import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore from Redux Toolkit

import { rootReducer } from "./reducers"; // Importing the combined rootReducer

// Configuring the Redux store
export const store = configureStore({
    // Setting the rootReducer under the key 'data'
    reducer: { data: rootReducer },
});
