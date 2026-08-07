import next from "eslint-config-next/core-web-vitals";

/**
 * Flat config — required by ESLint 9, which Next 16's shareable config targets.
 * Replaces the old .eslintrc.json; `next lint` was removed in Next 16, so the
 * npm script now calls eslint directly.
 */
const config = [
  ...next,
  {
    ignores: ["out/**", ".next/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default config;
