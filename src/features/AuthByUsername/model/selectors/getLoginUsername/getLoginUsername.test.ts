import { getLoginUsername } from "./getLoginUsername";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

describe("getLoginUsername", () => {
    test("should return username", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "123",
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual("123");
    });

    test("empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
