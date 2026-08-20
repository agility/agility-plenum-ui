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
		extend: {
			fontFamily: {
				sans: ["TTInterphasesPro", "sans-serif"]
			},
			backgroundImage: (theme) => ({
				"label-gradient-focus": "linear-gradient(to top, #FFF 10px, transparent 10px)",
				"label-gradient-idle": "linear-gradient(to top, #FFF 10px, transparent 10px)"
			}),
			gridTemplateColumns: {
				// Simple 16 column grid
				mainContainer: "max-content 1fr 1fr"
			},
			gridTemplateRows: {
				// Simple 16 column grid
				header: "max-content 1fr 1fr"
			},
			colors: {
				"neutral-50": "#F7F7F7",
				"neutral-100": "#F2F2F2",
				"neutral-200": "#E5E7EB",
				"neutral-300": "#D1D5DB",
				"neutral-400": "#9CA3aF",
				"neutral-500": "#6B7280",
				"neutral-600": "#4B5563",
				"neutral-700": "#374151",
				"neutral-800": "#1F2937",
				"neutral-900": "#111827",
				"neutral-950": "#030712",

				"warm-25": "#FDFCFA",
				"warm-50": "#FAF9F7",
				"warm-100": "#F5F4F1",
				"warm-200": "#EFEDE8",
				"warm-300": "#E5E2DB",

				"primary-50": "#F7F7F7",
				"primary-100": "#EDE9FE",
				"primary-200": "#DDD6FE",
				"primary-300": "#C4B5FD",
				"primary-400": "#A78BFA",
				"primary-500": "#8B5CF6",
				"primary-600": "#7C3AED",
				"primary-700": "#6D28D9",
				"primary-800": "#5B21B6",
				"primary-900": "#4C1D95",

				"secondary-50": "#FFFAEA",
				"secondary-100": "#FFF5D4",
				"secondary-200": "#FFEAA9",
				"secondary-300": "#FFE07E",
				"secondary-400": "#FFD553",
				"secondary-500": "#FFCB28",
				"secondary-600": "#F2C126",
				"secondary-700": "#D9AD22",
				"secondary-800": "#BF981E",
				"secondary-900": "#997A18",
				"secondary-950": "#6B5410",

				"success-50": "#ECFDF5",
				"success-100": "#D1FAE5",
				"success-200": "#A7F3D0",
				"success-300": "#6EE7B7",
				"success-400": "#34D399",
				"success-500": "#10B981",
				"success-600": "#059669",
				"success-700": "#047857",
				"success-800": "#065F46",
				"success-900": "#064E3B",

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

				"warning-50": "#FFF7ED",
				"warning-100": "#FFEDD5",
				"warning-200": "#FED7AA",
				"warning-300": "#FDBA74",
				"warning-400": "#FB923C",
				"warning-500": "#F97316",
				"warning-600": "#EA580C",
				"warning-700": "#C2410C",
				"warning-800": "#9A3412",
				"warning-900": "#7C2D12",

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

				"error-50": "#FEF2F2",
				"error-100": "#FEE2E2",
				"error-200": "#FECACA",
				"error-300": "#FCA5A5",
				"error-400": "#F87171",
				"error-500": "#EF4444",
				"error-600": "#DC2626",
				"error-700": "#B91C1C",
				"error-800": "#991B1B",
				"error-900": "#7F1D1D",

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
				"yellow-950": "#6B5410",

				"amber-50": "#FFFAEA",
				"amber-100": "#FFF5D4",
				"amber-200": "#FFEAA9",
				"amber-300": "#FFE07E",
				"amber-400": "#FFD553",
				"amber-500": "#FFCB28",
				"amber-600": "#E6B724",
				"amber-700": "#B38E1C",
				"amber-800": "#997A18",
				"amber-900": "#806614",
				"amber-950": "#6B5410",

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

				"blue-50": "#EEF4FF",
				"blue-100": "#D9E6FE",
				"blue-200": "#BCD2FD",
				"blue-300": "#8FB2",
				"blue-400": "#5C8DF8",
				"blue-500": "#2C6AF2",
				"blue-600": "#1A56DB",
				"blue-700": "#1544AE",
				"blue-800": "#153A8B",
				"blue-900": "#16336E",
				"blue-950": "#122A5C",

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
				medium: 500
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
			animation: {
				enter: "fadeInLeft 300ms ease-out",
				exit: "fadeOutLeft 300ms ease-in forwards",
				quickBounce: "quickBounce 200ms ease-out forwards",
				fadeIn: "fadeIn 400ms ease-in-out forwards",
				spinSlower: "spin 0.8s linear infinite"
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
				}
			},
			transitionProperty: {
				left: "left",
				height: "height"
			},
			spacing: {
				xxsm: "4px",
				xsm: "8px",
				sm: "12px",
				md: "16px",
				lg: "20px",
				xlg: "24px",
				xxlg: "28px",
				hg: "32px",
				xhg: "40px",
				xxhg: "80px"
			}
		}
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@headlessui/tailwindcss")]
};
