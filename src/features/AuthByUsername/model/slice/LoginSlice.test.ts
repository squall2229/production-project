import { loginActions, loginReducer } from "./LoginSlice";
import { LoginSchema } from "../types/LoginSchema";

describe("LoginSlice", () => {
    test("set username", () => {
        const state: DeepPartial<LoginSchema> = { username: "11111" };

        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername("123"))
        ).toEqual({ username: "123" });
    });

    test("set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "dwdklfjkjs" };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword("password")
            )
        ).toEqual({ password: "password" });
    });
});
