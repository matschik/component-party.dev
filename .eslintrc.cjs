const { FRAMEWORKS } = require('./config.cjs');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  plugins: ['prettier'],
  overrides: FRAMEWORKS.reduce((acc, { eslint }) => {
    if (Array.isArray(eslint)) {
      acc.push(...eslint);
    } else {
      acc.push(eslint);
    }

    return acc;
  }, []),
};
