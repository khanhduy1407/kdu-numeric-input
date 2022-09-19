// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // consider switching to `plugin:kdu/strongly-recommended` or `plugin:kdu/recommended` for stricter rules.
    'plugin:kdu/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.kdu files
  plugins: [
    'kdu'
  ],

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    "kdu/no-dupe-keys": "off",
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
