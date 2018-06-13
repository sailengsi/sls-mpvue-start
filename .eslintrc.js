// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        },
        ecmaVersion: 6,
        sourceType: 'module',
        parser: 'babel-eslint'
    },

    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vuefix'
    ],
    // add your custom rules here
    rules: {
        'vuefix/vuefix': [2, {'auto': true}],
        "indent": ['error', 4, {"SwitchCase": 1}],
        "no-trailing-spaces": 0,
        "space-before-function-paren": ["error", "never"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-console": [process.env.NODE_ENV === 'production' ? 'error' : 'off'],
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
