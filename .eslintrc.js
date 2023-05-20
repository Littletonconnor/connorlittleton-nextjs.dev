const config = {
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.cjs',
    },
    next: {
      rootDir: ['apps/*/'],
    },
  },
};

module.exports = config;
