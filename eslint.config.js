module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true, // Allows Jest globals such as describe, it, expect, etc.
    },
    extends: [
        'eslint:recommended',
        // Add any other ESLint plugins or configurations you need
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "warn",
        "jest/expect-expect": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    },
};