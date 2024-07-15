import { combineReducers } from "redux"; /* Importing combineReducers from Redux */
import { userSlice } from "../features/userSlice"; /* Importing userSlice from the userSlice file */

/* Combining the reducers to create a rootReducer */
export const rootReducer = combineReducers({
    /* Adding the user slice reducer to the rootReducer */
    user: userSlice.reducer, 
});
