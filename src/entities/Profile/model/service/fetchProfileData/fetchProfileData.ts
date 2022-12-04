import { Profile } from "./../../types/profile";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>("profile/fetchProfileData", async (_, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<Profile>("/profile");

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return rejectWithValue("Error");
    }
});
