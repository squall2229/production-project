import { TestAsyncThunk } from "./../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { userActions } from "entities/User";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("login by username thunk", () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test("success", async () => {
        const userValue = { username: "123", id: "1" };

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: "123",
            password: "123",
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue)
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("fail", async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: "123",
            password: "123",
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("Error");
    });
});
