import { Button, ButtonTheme } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
    test("render", () => {
        render(<Button>test</Button>);
        expect(screen.getByText("test")).toBeInTheDocument();
    });

    test("clear theme", () => {
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
        expect(screen.getByText("test")).toHaveClass("clear");
    });
});
