import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    "login/loginByUsername",
    async (autData, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>("/login", autData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(response.data)
            );

            dispatch(userActions.setAuthData(response.data));

            extra.navigate("/about");

            return response.data;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            return rejectWithValue("Error");
        }
    }
);
