import type { RepositoryData } from "../utils/github-api";

export const defaultCards: Partial<RepositoryData>[] = [
	{
		html_url: "https://github.com/NivaldoFarias",
		name: "Github Profile",
		description: "Explore the projects I've previously worked on.",
		topics: ["github"],
	},
	{
		html_url: "https://astro.build/",
		name: "Astro",
		description: "This project was built with Astro. Explore their documentation.",
		topics: ["astro"],
	},
	{
		html_url: "https://daisyui.com/",
		name: "Themes",
		description: "Themes and color palettes powered by DaisyUI.",
		topics: ["tailwindcss", "daisyui"],
	},
	{
		html_url: "https://tailwindcss.com/",
		name: "Tailwind CSS",
		description: "All Styles and Layout are powered by Tailwind CSS.",
		topics: ["tailwindcss"],
	},
];

export const selectOptions = [
	{ value: "updated_at", label: "Last Updated" },
	{ value: "pushed_at", label: "Last Pushed" },
	{ value: "stargazers_count", label: "Stars" },
	{ value: "forks_count", label: "Forks" },
	{ value: "open_issues_count", label: "Open Issues" },
	{ value: "size", label: "Size" },
] as const;
