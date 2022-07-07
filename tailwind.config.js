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
			colors: {
				'purple-50': '#EEE6FB',
				'purple-100': '#DECCF6',
				'purple-200': '#CDB3F2',
				'purple-300': '#BC99EE',
				'purple-400': '#9B66E5',
				'purple-500': '#7933DD',
				'purple-600': '#692CD8',
				'purple-700': '#5800D4',
				'purple-900': '#4600AA',
				'gray-900': '#111827',
				'gray-500': '#6B7280'
			},
		}
	},
	variants: {
		extend: {
			display: ["group-hover"]
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
