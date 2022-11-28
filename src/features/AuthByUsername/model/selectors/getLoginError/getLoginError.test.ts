import { getLoginError } from "./getLoginError";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

describe("get login error", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: "error",
            },
        };

        expect(getLoginError(state as StateSchema)).toEqual("error");
    });

    test("should return empty", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual("");
    });
});
