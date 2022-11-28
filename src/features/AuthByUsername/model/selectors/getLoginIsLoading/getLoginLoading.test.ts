import { getLoginIsLoading } from "./getLoginIsLoading";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

describe("getLoginIsLoading", () => {
    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test("should return false", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });

    test("empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
