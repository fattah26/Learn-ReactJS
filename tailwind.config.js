/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			colors: {
			  primary: '#ea580c',
        secondary: '#FFFFFF',
        tertiary: '#374151',
        hover: '#fb923c',
			},
		},
	},
	plugins: [],
};
