/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  semi: true,
  plugins: [
    'prettier-plugin-tailwindcss',
  ],
};

module.exports = config;
