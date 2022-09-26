// eslint-disable-next-line
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			muli: ['Muli', 'sans-serif']
		},
		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				mainContainer: "max-content 1fr 1fr"
			},
			gridTemplateRows: {
				// Simple 16 column grid
				header: "max-content 1fr 1fr"
			},
			colors: {
				'purple-50': '#EEE6FB',
				'purple-100': '#DECCF6',
				'purple-200': '#CDB3F2',
				'purple-300': '#BC99EE',
				'purple-400': '#9B66E5',
				'purple-500': '#7933DD',
				'purple-600': '#692CD8',
				'purple-700': '#5800D4',
				'purple-800': '#4F00BF',
				'purple-900': '#4600AA',

				"gray-500": "#6B7280",
				"gray-700": "#374151",
				"gray-900": "#111827",

				"green-50": "#ECFDF5",
				"green-100": "#D1FAE5",
				"green-200": "#A7F3D0",
				"green-300": "#6EE7B7",
				"green-400": "#34D399",
				"green-500": "#10B981",
				"green-600": "#059669",
				"green-700": "#047857",
				"green-800": "#065F46",
				"green-900": "#064E3B",

				"yellow-100": "#FFF5D4",
				"yellow-400": "#FFDB69",

				"pink-100": "#fce7f3",
				"pink-400": "#f472b6"
			},
			fontWeight: {
				medium: 600
			}
		}
	},
	variants: {
		extend: {
			display: ["group-hover"]
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
