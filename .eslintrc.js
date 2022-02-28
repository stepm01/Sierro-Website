const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
)

module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['unused-imports', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    semi: [2, 'never'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['node_modules', '.'],
      },
    },
  },
}
