import { getLoginPassword } from "./getLoginPassword";
import { StateSchema } from "app/providers/StoreProvider";

describe("getLoginPassword", () => {
    test("should return password", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "123",
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual("123");
    });

    test("empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});
