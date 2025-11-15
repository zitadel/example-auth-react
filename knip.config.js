// noinspection JSUnusedGlobalSymbols
/** @type {import('knip').KnipConfig} */
export default {
  entry: ['src/main.tsx'],
  project: ['src/**/*.{ts,tsx}'],
  vite: {
    config: ['vite.config.ts'],
  },
  tailwind: {
    config: ['tailwind.config.mjs'],
  },
  ignoreDependencies: ['tailwindcss'],
};
