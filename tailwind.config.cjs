/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily : {
			'sans': ['Inter', 'ui-sans-serif']
		},
		extend: {
			colors: {
				lightgray: '#e5e5e5',
				darkgray: '#2c2c2c',
				highlightred: '#ec0406',

			}
		},
	},
	plugins: [],

}
