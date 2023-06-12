/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
	{
		root: true,
		parser: "astro-eslint-parser",
		parserOptions: {
			project: "tsconfig.json",
			extraFileExtensions: [".astro"],
		},
		extends: [
			"eslint:recommended",
			"plugin:unicorn/recommended",
			"plugin:astro/jsx-a11y-strict",
			"plugin:@typescript-eslint/recommended",
		],
		overrides: [
			{
				files: ["*.astro"],
				parser: "astro-eslint-parser",
				parserOptions: {
					parser: "@typescript-eslint/parser",
					extraFileExtensions: [".astro"],
				},
			},
		],
	},
];
