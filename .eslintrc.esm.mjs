import FRAMEWORKS from './src/frameworks.mjs';

/**
 * @type {import("eslint").Linter.Config}
 */
export default {
  parserOptions: {
    ecmaVersion: 2022,
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
