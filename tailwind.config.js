const plenumPreset = require("./tailwind.preset");

// The theme lives in tailwind.preset.js so consumers can load the same one.
/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [plenumPreset],
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
	]
};
