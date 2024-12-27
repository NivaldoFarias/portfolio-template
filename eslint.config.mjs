import eslint from "@eslint/js";
import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default tseslint.config(
	eslintPluginPrettier,
	eslintPluginAstro.configs.recommended,
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: {
			"@typescript-eslint": tseslint.plugin,
		},
		languageOptions: {
			globals: globals.node,
			parser: tseslint.parser,
			parserOptions: {
				project: ["./tsconfig.json"],
			},
		},
		rules: {
			...eslint.configs.recommended.rules,

			"prettier/prettier": "off",

			// typescript-eslint rules
			"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		},
	},
	{
		files: ["*.cjs"],
		languageOptions: {
			globals: globals.commonjs,
		},
	},
	{
		files: ["*.mjs"],
		languageOptions: {
			globals: globals.node,
		},
	},
);
