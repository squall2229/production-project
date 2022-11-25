import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    {
        rejectValue: string;
    }
>("login/loginByUsernmae", async (autData, thunkApi) => {
    try {
        const response = await axios.post<User>(
            "http://localhost:8000/login",
            autData
        );

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data)
        );

        thunkApi.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return thunkApi.rejectWithValue("Error");
    }
});