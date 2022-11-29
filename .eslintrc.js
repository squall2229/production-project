module.exports = {
    root: true,
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    globals: {
        __IS_DEV: true,
        __API__: true,
    },
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            arrowFunctions: true,
        },
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
        "i18next",
        "react-hooks",
    ],
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                paths: ["./src"],
            },
        },
    },
    rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
            },
        ],
        "react/jsx-indent": [2, 4],
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: ["data-testid"],
            },
        ],
        indent: [2, 4],
        "no-unused-vars": "off",
        "react/jsx-uses-react": "error",
        "comma-dangle": "off",
        "function-paren-newline": "off",
        "global-require": 0,
        "import/no-dynamic-require": "off",
        "no-inner-declarations": "off",
        "class-methods-use-this": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        "react/display-name": "off",
        "no-console": [
            "error",
            {
                allow: ["warn", "error"],
            },
        ],
    },
    overrides: [
        {
            files: ["**/src/**/*.test.{ts, tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
    ],
};
