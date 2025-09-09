module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: "off",
    indent: ["error", 2], // Indent with 2 spaces
    "react/jsx-indent": ["error", 2], // Indent JSX with 2 spaces
    "react/jsx-indent-props": ["error", 2], // Indent props with 2 spaces
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  }
};
