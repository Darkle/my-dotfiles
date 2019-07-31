module.exports = {
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true
    }
  },
  extends: [
    'eslint:recommended'
  ],
  globals: {

  },
  env: {
    node: true,
    browser: true,
    'shared-node-browser': true,
    es6: true,
    webextensions: true,
    greasemonkey: true,
  },
  plugins: [
  ],
  rules: {

  }
}
