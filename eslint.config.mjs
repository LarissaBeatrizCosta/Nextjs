import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import stylistic from "@stylistic/eslint-plugin";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  {
    plugins: {
      import: importPlugin,
      unicorn,
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/quotes": ["warn", "single", { avoidEscape: true }],
      "@stylistic/semi": ["warn", "always"],
      curly: ["warn", "all"],
      "@stylistic/max-len": [
        "warn",
        { code: 100, ignoreUrls: true, ignoreStrings: true },
      ],

      camelcase: ["warn", { properties: "never", ignoreDestructuring: true }],
      "react/jsx-pascal-case": "warn",

      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-cycle": "warn",
      "import/no-useless-path-segments": "warn",

      "no-useless-constructor": "warn",
      "no-useless-rename": "warn",
      "no-useless-concat": "warn",
      "prefer-template": "warn",
      "no-useless-computed-key": "warn",
      "object-shorthand": ["warn", "always"],
      "prefer-const": "warn",
      "no-var": "error",
      "prefer-arrow-callback": "warn",
      "arrow-body-style": ["warn", "as-needed"],

      eqeqeq: ["error", "always"],
      "no-implicit-coercion": "warn",
      "no-param-reassign": ["warn", { props: false }],
      "no-shadow": "warn",
      "no-return-await": "warn",

      "react/jsx-key": "error",
      "react/jsx-no-useless-fragment": "warn",
      "react/self-closing-comp": "warn",
      "react/jsx-boolean-value": ["warn", "never"],
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]);

export default eslintConfig;
