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
    'eslint:recommended',
    'plugin:security/recommended'
  ],
  globals: {
    ISDEV: true
  },
  env: {
    node: true,
    browser: true,
    shared-node-browser: true,
    es6: true,
    webextensions: true,
    greasemonkey: true,
  },
  plugins: [
    'fp',
    'security'
  ],
  rules: {
    no-async-promise-executor: 'error',
  }
}
