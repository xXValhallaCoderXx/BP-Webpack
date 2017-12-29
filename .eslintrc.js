module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    "prettier" // Put prettier last so it doesnt conflict with others
  ],
  plugins: ["prettier"],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  rules: {
    "prettier/prettier": "error"
    // 'comma-dangle': ['error', 'always-multiline'],
    // indent: ['error', 2],
    // 'linebreak-style': ['error', 'windows'],
    // quotes: ['error', 'single'],
    // semi: ['error', 'always'],
    // 'no-unused-vars': ['warn'],
    // 'no-console': 0,
  }
};
