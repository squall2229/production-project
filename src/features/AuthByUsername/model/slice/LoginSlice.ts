import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";
import { LoginSchema } from "../types/LoginSchema";

const initialState: LoginSchema = {
    username: "",
    password: "",
    error: "",
    isLoading: false,
};

export const loginSlice = createSlice({
    name: "loginForm",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
