/** @type {import('prettier').Config} */
export default {
	semi: true,
	tabWidth: 2,
	useTabs: true,
	printWidth: 100,
	endOfLine: "lf",
	singleQuote: false,
	trailingComma: "all",
	proseWrap: "preserve",
	arrowParens: "always",
	bracketSpacing: true,
	bracketSameLine: false,
	quoteProps: "consistent",
	htmlWhitespaceSensitivity: "ignore",
	singleAttributePerLine: true,
	jsxSingleQuote: false,
	overrides: [
		{
			files: ["*.d.ts", "*.json"],
			excludeFiles: ["package.json", "package-lock.json"],
			options: {
				tabWidth: 4,
				useTabs: false,
			},
		},
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
