require('dotenv').config()
const path = require('path')
const esbuild = require("esbuild")

const context = {
	logLevel: "info",
	entryPoints: [path.resolve(__dirname, "stories/index.ts")],
	bundle: true,
	platform: "browser",
	target: ["esnext"],
	minify: true,
	pure: ["React.createElement"],
	jsx: 'transform',
	loader: { '.js': 'jsx' },
	outdir: path.resolve(__dirname, "dist"),
	sourcemap: true,
	external: [
		"react",
		"react-dom",
		"@floating-ui/react",
		"@headlessui/react",
		"@headlessui/tailwindcss",
		"@heroicons/react",
		"@tabler/icons",
		"@tabler/icons-react",
		"classnames",
		"react-icons",
		"@storybook/react",
		"@storybook/addon-designs",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-links",
		"@storybook/blocks",
		"@storybook/manager-api",
		"@storybook/nextjs",
		"@storybook/react",
		"@storybook/testing-library",
		"@storybook/theming",
		"storybook"
	],
	format: "esm"
}

async function watch() {
	const ctx = await esbuild.context(context)
	ctx.watch()
	console.log(`Watching....`)
}

watch()