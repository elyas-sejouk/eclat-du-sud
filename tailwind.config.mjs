/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-navy': '#0b1a30',
				'brand-navy-light': '#162d4a',
				'brand-blue': '#1a365d',
				'brand-gold': '#b89047',
				'brand-gold-light': '#c9a25b',
				'brand-gray-light': '#f8fafc',
				'brand-gray-border': '#e2e8f0',
				'brand-text': '#1e293b',
				'brand-text-muted': '#64748b',
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				heading: ["Outfit", "sans-serif"],
			},
		},
	},
	plugins: [],
}