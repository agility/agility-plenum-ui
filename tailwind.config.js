/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "development",

	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*/.{js,ts,jsx,tsx}",
		"./stories/**/*.{js,ts,jsx,tsx}",
		"./.storybook/*.{js,ts,jsx,tsx}"
	],
	safelist: [
		"text-xs",
		"text-sm",
		"text-base",
		"text-lg",
		"text-xl",
		"text-2xl",
		"text-3xl",
		"text-4xl",
		"text-5xl",
		"text-6xl",
		"font-thin",
		"font-extralight",
		"font-light",
		"font-normal",
		"font-medium",
		"font-semibold",
		"font-bold",
		"font-extrabold",
		"font-black",
		{
			pattern:
				/^(bg|text|border(-(t|r|b|l))?)-((gray)|(red)|(orange)|(yellow)|(blue)|(light-blue)|(cyan)|(green)|(purple)|(teal)|(violet)|(pink)|(rose))-(50|100|200|300|400|500|600|700|800|900)|(mx|my|m|px|py|p)-\d.$/
		}
	],
	theme: {
		fontFamily: {
			mulish: ["Mulish", "sans-serif"]
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
				"gray-50": "#F9FAFB",
				"gray-100": "#F3F4F6",
				"gray-200": "#E5E7EB",
				"gray-300": "#D1D5DB",
				"gray-400": "#9CA3AF",
				"gray-500": "#6B7280",
				"gray-600": "#4B5563",
				"gray-700": "#374151",
				"gray-800": "#1F2937",
				"gray-900": "#111827",

				"red-50": "#FEF2F2",
				"red-100": "#FEE2E2",
				"red-200": "#FECACA",
				"red-300": "#FCA5A5",
				"red-400": "#F87171",
				"red-500": "#EF4444",
				"red-600": "#DC2626",
				"red-700": "#B91C1C",
				"red-800": "#991B1B",
				"red-900": "#7F1D1D",

				"orange-50": "#FFF7ED",
				"orange-100": "#FFEDD5",
				"orange-200": "#FED7AA",
				"orange-300": "#FDBA74",
				"orange-400": "#FB923C",
				"orange-500": "#F97316",
				"orange-600": "#EA580C",
				"orange-700": "#C2410C",
				"orange-800": "#9A3412",
				"orange-900": "#7C2D12",

				"yellow-50": "#FFFAEA",
				"yellow-100": "#FFF5D4",
				"yellow-200": "#FFEAA9",
				"yellow-300": "#FFE07E",
				"yellow-400": "#FFD553",
				"yellow-500": "#FFCB28",
				"yellow-600": "#E6B724",
				"yellow-700": "#B38E1C",
				"yellow-800": "#997A18",
				"yellow-900": "#806614",

				"teal-50": "#F0FDFA",
				"teal-100": "#CCFBF1",
				"teal-200": "#99F6E4",
				"teal-300": "#5EEAD4",
				"teal-400": "#2DD4BF",
				"teal-500": "#14B8A6",
				"teal-600": "#0D9488",
				"teal-700": "#0F766E",
				"teal-800": "#115E59",
				"teal-900": "#134E4A",

				"cyan-50": "#CFFAFE",
				"cyan-100": "#A5F3FC",
				"cyan-200": "#67E8F9",
				"cyan-300": "#22D3EE",
				"cyan-400": "#ECFEFF",
				"cyan-500": "#06B6D4",
				"cyan-600": "#0891B2",
				"cyan-700": "#0E7490",
				"cyan-800": "#155E75",
				"cyan-900": "#164E63",

				"light-blue-50": "#E0F2FE",
				"light-blue-100": "#BAE6FD",
				"light-blue-200": "#7DD3FC",
				"light-blue-300": "#38BDF8",
				"light-blue-400": "#F0F9FF",
				"light-blue-500": "#0EA5E9",
				"light-blue-600": "#0284C7",
				"light-blue-700": "#0369A1",
				"light-blue-800": "#075985",
				"light-blue-900": "#0C4A6E",

				"blue-50": "#DBEAFE",
				"blue-100": "#BFDBFE",
				"blue-200": "#93C5FD",
				"blue-300": "#60A5FA",
				"blue-400": "#EFF6FF",
				"blue-500": "#3B82F6",
				"blue-600": "#2563EB",
				"blue-700": "#1D4ED8",
				"blue-800": "#1E40AF",
				"blue-900": "#1E3A8A",

				"purple-50": "#EEE6FB",
				"purple-100": "#DECCF6",
				"purple-200": "#CDB3F2",
				"purple-300": "#BC99EE",
				"purple-400": "#9B66E5",
				"purple-500": "#7933DD",
				"purple-600": "#691AD8",
				"purple-700": "#5800D4",
				"purple-800": "#4F00BF",
				"purple-900": "#4600AA",

				"violet-50": "#EDE9FE",
				"violet-100": "#DDD6FE",
				"violet-200": "#C4B5FD",
				"violet-300": "#A78BFA",
				"violet-400": "#F5F3FF",
				"violet-500": "#8B5CF6",
				"violet-600": "#7C3AED",
				"violet-700": "#6D28D9",
				"violet-800": "#5B21B6",
				"violet-900": "#4C1D95",

				"pink-50": "#FCE7F3",
				"pink-100": "#FCE7F3",
				"pink-200": "#FBCFE8",
				"pink-400": "#F472B6",
				"pink-500": "#EC4899",
				"pink-600": "#DB2777",
				"pink-700": "#BE185D",
				"pink-800": "#9D174D",
				"pink-900": "#831843",

				"rose-50": "#FFE4E6",
				"rose-100": "#FECDD3",
				"rose-200": "#FDA4AF",
				"rose-300": "#FB7185",
				"rose-400": "#FFF1F2",
				"rose-500": "#F43F5E",
				"rose-600": "#E11D48",
				"rose-700": "#BE123C",
				"rose-800": "#9F1239",
				"rose-900": "#881337"
			},
			fontWeight: {
				medium: 600
			}
		}
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
		require("@headlessui/tailwindcss")
	]
}
