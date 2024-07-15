import { createSlice} from "@reduxjs/toolkit"

const initialState ={
/*try adding {username : "john"} into user input rather than null – spur profile page
will make you sign in because it first verifies to see if the user is an object 
(they have an account made) */
    user: null,
    isLoading: true,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const {loginUser, logoutUser, setLoading} = userSlice.actions;