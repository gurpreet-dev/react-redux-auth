import { createSlice } from "@reduxjs/toolkit";
import conf from "../../conf";

const initialState = {
    loggedIn: false,
    userData: null
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.loggedIn = true;
            state.userData = action.payload.data;
        },
        login: (state, action) => {
            state.loggedIn = true;
            state.userData = action.payload.data.user;
            localStorage.setItem(conf.authTokenKey, action.payload.data.token);
        },
        logout: (state, action) => {
            state.loggedIn = false;
            state.userData = null;
            localStorage.removeItem(conf.authTokenKey);
        }
    }
})

export const {login, logout, setCurrentUser} = AuthSlice.actions;

export default AuthSlice.reducer;