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
    'shared-node-browser': true,
    es6: true,
    webextensions: true,
    greasemonkey: true,
  },
  plugins: [
    'fp',
    'security'
  ],
  rules: {
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'complexity': ['error', 2],
    'consistent-return': 'error',
    'curly': ['error', 'multi-line'],
    'default-case': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'radix': 'error',
    'yoda': 'error',
    'symbol-description': 'error',
    'prefer-template': 'error',
    'prefer-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error', 
      {
        object: true, 
        array: false
      }
    ],
    'object-shorthand': 'error',
    'no-var': 'error',
    'no-useless-rename': [
      'error', 
      {
        ignoreDestructuring: true,
      }
    ],
    'no-useless-constructor': 'error',
    'no-useless-computed-key': 'error',
    'no-duplicate-imports': 'error',
    'unicode-bom': 'error',
    'space-infix-ops': 'error',
    'semi-spacing': 'error',
    'arrow-spacing': [
      'error', 
      { 
        before: true,
        after: true,
      }
    ],    
    'quotes': [
      'error', 
      'double', 
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
    'prefer-object-spread': 'error',
    'semi': [
      'error', 
      'never',
      { 
        beforeStatementContinuationChars: 'always'
      }
    ],
    'rest-spread-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'operator-assignment': ['error', 'never'],
    'object-property-newline': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'no-whitespace-before-property': 'error',
    'no-unneeded-ternary': 'error',
    'no-trailing-spaces': 'error',
    'no-plusplus': 'error',
    'no-nested-ternary': 'error',
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': [
      'error', 
      { 
        max: 1,
      }
    ],
    'no-lonely-if': 'error',
    'no-bitwise': 'error',
    'no-array-constructor': 'error',
    'new-cap': 'error',
    'new-parens': 'error',
    'max-nested-callbacks': ['error', 3],
    'max-depth': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': ['error', 8],
    'max-statements-per-line': [
      'error', 
      { 
        max: 1 
      }
    ],
    'max-lines-per-function': [
      'error', 
      {
        max: 20, 
        skipComments: true
      }
    ],
    'key-spacing': [
      'error', 
      { 
        beforeColon: false, 
        afterColon: true,
        mode: 'strict'
      }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'indent': [
      'error', 
      2, 
      { 
        outerIIFEBody: 0,
        ArrayExpression: 1
        ObjectExpression: 1
        ImportDeclaration: 1
      }
    ],
    'func-call-spacing': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }]
    'no-path-concat': 'error',
    'no-new-require': 'error',
    'no-mixed-requires': 'error',
    'no-buffer-constructor': 'error',
    'handle-callback-err': 'error',
    'callback-return': 'error',
    'no-use-before-define': 'error',
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-label-var': 'error',
    'wrap-iife': ['error', 'inside'],
    'require-unicode-regexp': 'error',
    'require-await': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-named-capture-group': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-return': 'error',
    'no-useless-catch': 'error',
    'no-useless-call': 'error',
    'no-unused-expressions': [
      'error', 
      { 
        allowTernary: true, 
        allowTaggedTemplates: true,
        allowShortCircuit: true,
      }
    ],
    'no-throw-literal': 'error',
    'no-self-compare': 'error',
    'no-script-url': 'error',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-proto': 'error',
    'no-param-reassign': 'error',
    'no-octal-escape': 'error',
    'no-new-wrappers': 'error',
    'no-new-func': 'error',
    'no-multi-str': 'error',
    'no-multi-spaces': 'error',
    'no-magic-numbers': [
      'error', 
      { 
        ignoreArrayIndexes: true, 
        enforceConst: true,
        detectObjects: true,
      }
    ],
    'no-loop-func': 'error',
    'no-lone-blocks': 'error',
    'no-labels': 'error',
    'no-implied-eval': 'error',
    'no-implicit-globals': 'error',
    'no-floating-decimal': 'error',
    'no-extra-bind': 'error',
    
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-extend-native': 'error',
    'no-eval': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'max-classes-per-file': ['error', 1],
  }
}
