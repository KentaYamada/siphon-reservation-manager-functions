module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "google",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      "tsconfig.json",
      "tsconfig.dev.json",
      "tsconfig.build.json"
    ],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/tests/*",
    "jest.config.js"
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier"
  ],
  rules: {
    quotes: ["error", "double"],
    "import/prefer-default-export": "off"
  },
};
