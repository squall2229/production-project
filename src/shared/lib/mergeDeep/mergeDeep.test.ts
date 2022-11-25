import { mergeDeep } from "./mergeDeep";

describe("mergeDeep", () => {
    test("merge objects", () => {
        expect(
            mergeDeep(
                { surname: "Chechulin", old: [4] },
                { name: "Vlad", old: [1, 2, 3] }
            )
        ).toEqual({
            surname: "Chechulin",
            name: "Vlad",
            old: [1, 2, 3],
        });
    });
});
