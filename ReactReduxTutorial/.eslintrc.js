module.exports = {
    extends: [
        "airbnb",
        "plugin:react/recommended",
        "plugin:import/warnings",
        "plugin:import/errors"
    ],
    plugins: ["react", "import"],
    parser: "babel-eslint",
    rules: {
        "arrow-parens": [2, "as-needed", { requireForBlockBody: false }],
        "linebreak-style": 0,
        "function-paren-newline": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": 0,
        "class-methods-use-this": 0,
        "max-len": [0, 120, 4], // [2, 120, 4],
        "react/forbid-prop-types": ["error", { forbid: ["any"] }],
        "react/no-array-index-key": ["off"], //["warn"],
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "indent": 0,
        "react/jsx-indent": 0,
        "no-debugger": 0,
        "no-restricted-syntax": 0,
        "no-tabs": 0,
        "no-mixed-operators": [2, { "allowSamePrecedence": true }],
        "no-unused-expressions": [2, { allowShortCircuit: true, allowTernary: true }],
        "react/jsx-uses-vars": 1,
        "react/jsx-uses-react": 1,
        "react/no-multi-comp": 0,
        "no-return-assign": [2, "except-parens"],
        "no-param-reassign": [0, { props: false }],
        "quotes": [0, "double"], //[2, "double"],
        "comma-dangle": 0,
        "no-plusplus": 0,
        "no-bitwise": 0,
        "radix": 0,
        "padded-blocks": 0,
        "react/prop-types": 0,
        "jsx-a11y/label-has-for": 0
    },
    env: {
        browser: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true
        }
    }
};
