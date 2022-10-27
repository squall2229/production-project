import path from "path";

export default {
    modulePaths: ["<rootDir>src"],
    setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
    moduleNameMapper: {
        "\\.(s?css)$": "identity-obj-proxy",
        "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
    },
    clearMocks: true,
    coveragePathIgnorePatterns: ["/node_modules/"],
    moduleDirectories: ["node_modules", "src"],
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node",
    ],
    rootDir: "../../",
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
    testPathIgnorePatterns: ["/node_modules/"],
};
