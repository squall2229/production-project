import { Counter } from "./Counter";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe("Counter", () => {
    test("render", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });

    test("increpement", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId("increment-button"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });

    test("decrepement", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId("decrement-button"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
});
