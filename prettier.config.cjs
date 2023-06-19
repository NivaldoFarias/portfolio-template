/** @type {import('prettier').Config} */
module.exports = {
	semi: true,
	tabWidth: 2,
	useTabs: true,
	printWidth: 100,
	endOfLine: "lf",
	singleQuote: false,
	insertPragma: false,
	requirePragma: false,
	trailingComma: "all",
	proseWrap: "preserve",
	arrowParens: "always",
	bracketSpacing: true,
	bracketSameLine: false,
	quoteProps: "as-needed",
	htmlWhitespaceSensitivity: "ignore",
	singleAttributePerLine: true,
	jsxSingleQuote: false,
	overrides: [
		{
			files: "*.d.ts",
			options: {
				tabWidth: 4,
				useTabs: false,
			},
		},
	],
	overrides: [
		{
			files: ["*.md", "*.mdx"],
			options: {
				tabWidth: 3,
				useTabs: false,
			},
		},
	],
	plugins: ["prettier-plugin-astro"],
};
