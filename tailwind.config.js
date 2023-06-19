/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
		],
	},
	theme: {
		extend: {
			animation: {
				text: "text 5s ease infinite",
				"link-icon": "link-icon 500ms ease-in",
			},
			keyframes: {
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				shimmer: {
					"100%": {
						transform: "translateX(100%)",
					},
				},
				"link-icon": {
					"0%": {
						opacity: 0,
					},
					"50%": {
						opacity: 0.25,
					},
					"100%": {
						opacity: 0.5,
					},
				},
				"sidemenu-border-gradient": {
					from: {
						"background-color": "red",
					},
					to: {
						"background-color": "blue",
					},
				},
			},
		},
	},
};
