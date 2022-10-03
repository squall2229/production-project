import { classNames } from "./classNames";

describe("classNames", () => {
    test("with one param", () => {
        expect(classNames("someclass")).toBe("someclass");
    });

    test("with with additionals", () => {
        expect(classNames("someclass", {}, ["class1", "class2"])).toBe(
            "someclass class1 class2"
        );
    });

    test("with mods", () => {
        expect(
            classNames(
                "someclass",
                {
                    hovered: true,
                    scrollable: true,
                },
                ["class1", "class2"]
            )
        ).toBe("someclass class1 class2 hovered scrollable");
    });

    test("with mods false", () => {
        expect(
            classNames(
                "someclass",
                {
                    hovered: true,
                    scrollable: false,
                },
                ["class1", "class2"]
            )
        ).toBe("someclass class1 class2 hovered");
    });

    test("with mods undefined", () => {
        expect(
            classNames(
                "someclass",
                {
                    hovered: undefined,
                    scrollable: true,
                },
                ["class1", "class2"]
            )
        ).toBe("someclass class1 class2 scrollable");
    });
});
