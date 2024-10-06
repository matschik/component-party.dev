import FRAMEWORKS from "./frameworks.mjs";

/** @type {import('eslint').Linter.Config[]} */
const config = (
  await Promise.all(
    FRAMEWORKS.map(({ getEslintConfigs }) => {
      if (typeof getEslintConfigs === "function") {
        return getEslintConfigs();
      }
    }).filter(Boolean)
  )
).flat();

// console.log(config)

export default config;
