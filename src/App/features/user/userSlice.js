// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    currentUser: {}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userIn: (state, action) => {
          
            state.currentUser = action.payload;
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        },
        userOut: (state) => {
            state.currentUser = {};
            localStorage.removeItem("currentUser");
            alert("המשתמש יצא")
        },
    }
});

export const { userIn, userOut } = userSlice.actions;
export default userSlice.reducer;
