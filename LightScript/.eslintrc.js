module.exports = {
  parser: '@oigroup/lightscript-eslint',
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
  plugins: [
    '@lightscript/eslint-plugin'
  ],
  globals: {
    ISDEV: true,
    storedSubs: true,
    storedFolders: true,
    Swiper: true,
  },
  env: {
    node: true,
    browser: true,
    'shared-node-browser': true,
    es6: true,
    webextensions: true,
    greasemonkey: true,
  },
  rules: {
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'callback-return': 'error',
    'class-methods-use-this': 'error',
    'complexity': ['error', 3],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'curly': ['error', 'multi-line'],
    'default-case': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': ['error', 'never'],
    'handle-callback-err': 'error',
    'indent': [
      'error',
      2,
      {
        outerIIFEBody: 0,
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
      }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-classes-per-file': ['error', 1],
    'max-depth': ['error', 3],
    'max-lines-per-function': [
      'error',
      {
        max: 20,
        skipComments: true
      }
    ],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': ['error', 8],
    'new-cap': ['error', {'capIsNew': false}],
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-console': 'off',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-extra-bind': 'error',
    'no-extend-native': 'error',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-labels': 'error',
    'no-label-var': 'error',
    'no-lonely-if': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-requires': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      }
    ],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-self-compare': 'error',
    'no-script-url': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': ['error', {'args': 'after-used'}],
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-constructor': 'error',
    'no-useless-computed-key': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
        allowTaggedTemplates: true,
        allowShortCircuit: true,
      }
    ],
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: true,
      }
    ],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        object: true,
        array: false
      }
    ],
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }
    ],
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: true,
        unnecessary: false,
      }
    ],
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-unicode-regexp': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'security/detect-object-injection': 'off',
    'semi': [
      'error',
      'never',
    ],
    'semi-spacing': 'error',
    'space-in-parens': ['error', 'never'],
    'symbol-description': 'error',
    'unicode-bom': 'error',
    'yoda': 'error',
    'wrap-iife': ['error', 'inside'],
  }
}
