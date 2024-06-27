/* eslint-disable no-undef */
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			"6xs": "320px",
			"3xs": "360px",
			"2xs": "375px",
			xs: "414px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1173px",
			"2xl": "1294px",
			"3xl": "1424px",
			"4xl": "1920px",
			"5xl": "2560px"
		},

		extend: {
			flex: {
				"unset!": "unset !important"
			},
			boxShadow: {
				"actions-bar": "0px 2px 4px rgba(0, 0, 0, 0.06)"
			},
			fontFamily: {
				sans: ["TTInterphasesPro", "monospace"]
			},

			gridTemplateColumns: {
				// Simple 16 column grid
				mainContainer: "max-content 1fr 1fr",
				diffContainer: " 0.5fr 3fr",
				moduleCard: "min-content 1fr"
			},

			gridTemplateRows: {
				// Simple 16 column grid
				header: "max-content 1fr 1fr"
			},

			colors: {
				"transparent-white-05": "rgba(255, 255, 255, 0.05)",
				"transparent-white-10": "rgba(255, 255, 255, 0.1)",
				"transparent-white-20": "rgba(255, 255, 255, 0.2)",
				"transparent-white-30": "rgba(255, 255, 255, 0.3)",
				"transparent-white-40": "rgba(255, 255, 255, 0.4)",
				"transparent-white-50": "rgba(255, 255, 255, 0.5)",
				"transparent-white-60": "rgba(255, 255, 255, 0.6)",
				"transparent-white-70": "rgba(255, 255, 255, 0.7)",
				"transparent-white-80": "rgba(255, 255, 255, 0.8)",
				"transparent-white-90": "rgba(255, 255, 255, 0.9)",

				"transparent-black-03": "rgba(0, 0, 0, 0.03)",
				"transparent-black-05": "rgba(0, 0, 0, 0.05)",
				"transparent-black-10": "rgba(0, 0, 0, 0.1)",
				"transparent-black-20": "rgba(0, 0, 0, 0.2)",
				"transparent-black-30": "rgba(0, 0, 0, 0.3)",
				"transparent-black-40": "rgba(0, 0, 0, 0.4)",
				"transparent-black-50": "rgba(0, 0, 0, 0.5)",
				"transparent-black-60": "rgba(0, 0, 0, 0.6)",
				"transparent-black-70": "rgba(0, 0, 0, 0.7)",
				"transparent-black-80": "rgba(0, 0, 0, 0.8)",
				"transparent-black-90": "rgba(0, 0, 0, 0.9)",

				"gray-50": "#F9FAFB",
				"gray-100": "#F3F4F6",
				"gray-200": "#E5E7EB",
				"gray-300": "#D1D5DB",
				"gray-400": "#9CA3AF",
				"gray-500": "#6B7280",
				"gray-600": "#4B5563",
				"gray-700": "#374151",
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

				"cyan-50": "#ECFEFF",
				"cyan-100": "#CFFAFE",
				"cyan-200": "#A5F3FC",
				"cyan-300": "#67E8F9",
				"cyan-400": "#22D3EE",
				"cyan-500": "#06B6D4",
				"cyan-600": "#0891B2",
				"cyan-700": "#0E7490",
				"cyan-800": "#155E75",
				"cyan-900": "#164E63",

				"lightBlue-50": "#F0F9FF",
				"lightBlue-100": "#E0F2FE",
				"lightBlue-200": "#BAE6FD",
				"lightBlue-300": "#7DD3FC",
				"lightBlue-400": "#38BDF8",
				"lightBlue-500": "#0EA5E9",
				"lightBlue-600": "#0284C7",
				"lightBlue-700": "#0369A1",
				"lightBlue-800": "#075985",
				"lightBlue-900": "#0C4A6E",

				"blue-50": "#EFF6FF",
				"blue-100": "#DBEAFE",
				"blue-200": "#BFDBFE",
				"blue-300": "#93C5FD",
				"blue-400": "#60A5FA",
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

				"violet-50": "#F5F3FF",
				"violet-100": "#EDE9FE",
				"violet-200": "#DDD6FE",
				"violet-300": "#C4B5FD",
				"violet-400": "#A78BFA",
				"violet-500": "#8B5CF6",
				"violet-600": "#7C3AED",
				"violet-700": "#6D28D9",
				"violet-800": "#5B21B6",
				"violet-900": "#4C1D95",

				"pink-50": "#FDF2F8",
				"pink-100": "#FCE7F3",
				"pink-200": "#FBCFE8",
				"pink-300": "#F9A8D4",
				"pink-400": "#F472B6",
				"pink-500": "#EC4899",
				"pink-600": "#DB2777",
				"pink-700": "#BE185D",
				"pink-800": "#9D174D",
				"pink-900": "#831843",

				"rose-50": "#FFF1F2",
				"rose-100": "#FFE4E6",
				"rose-200": "#FECDD3",
				"rose-300": "#FDA4AF",
				"rose-400": "#FB7185",
				"rose-500": "#F43F5E",
				"rose-600": "#E11D48",
				"rose-700": "#BE123C",
				"rose-800": "#9F1239",
				"rose-900": "#881337"
			},

			fontWeight: {
				medium: 600
			},

			fontSize: {
				xs: ["0.75rem", "1rem"],
				sm: ["0.875rem", "1.25rem"],
				base: ["1rem", "1.5rem"],
				lg: ["1.125rem", "1.75rem"],
				xl: ["1.25rem", "1.75rem"],
				"2xl": ["1.5rem", "2rem"],
				"3xl": ["1.875rem", "2.25rem"],
				"4xl": ["2.25rem", "2.5rem"],
				"5xl": ["3rem", "3rem"],
				"6xl": ["3.75rem", "3.75rem"],
				"7xl": ["4.5rem", "4.5rem"],
				"8xl": ["6rem", "6rem"],
				"9xl": ["8rem", "8rem"]
			},
			transitionTimingFunction: {
				"in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
				"out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
				"tab-underline": "cubic-bezier(.7,0,.28,1)"
			},
			transitionProperty: {
				left: "left",
				height: "height"
			},

			animation: {
				enter: "fadeInLeft 300ms ease-out",
				exit: "fadeOutLeft 300ms ease-in forwards",
				quickBounce: "quickBounce 200ms ease-out forwards",
				fadeIn: "fadeIn 400ms ease-in-out forwards",
				drawLine: "drawLine 1s ease-tab-underline forwards"
			},

			keyframes: {
				fadeIn: {
					"0%": {
						opacity: "0"
					},
					"100%": {
						opacity: "1"
					}
				},
				fadeInLeft: {
					"0%": {
						opacity: "0",
						transform: "translate(-2rem)"
					},
					"100%": {
						opacity: "1",
						transform: "translate(0)"
					}
				},
				quickBounce: {
					"0%": {
						transform: "translateY(0px)"
					},
					"50%": {
						transform: "translateY(-8px)"
					},
					"100%": {
						transform: "translateY(-4px)"
					}
				},
				fadeOutLeft: {
					"0%": {
						opacity: "1",
						transform: "translate(0)"
					},
					"100%": {
						opacity: "0",
						transform: "translate(-2rem)"
					}
				},
				drawLine: {
					"0%": {
						width: "0%"
					},
					"100%": {
						width: "100%"
					}
				}
			}
		}
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@headlessui/tailwindcss")({ prefix: "ui" })
	]
}
