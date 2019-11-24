module.exports = {
  parserOptions: {
    ecmaVersion: 10,
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
    es2020: true,
    webextensions: true,
    greasemonkey: true,
  },
  plugins: [
  ],
  rules: {

  }
}
