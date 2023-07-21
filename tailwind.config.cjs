/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			display: ["Lilita One"],
		},
		height: {
			'screen-half': '50vh',
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
