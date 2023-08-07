// build.js
const esbuild = require("esbuild")
const path = require("path")

esbuild
	.build({
		entryPoints: [path.resolve(__dirname, "stories/index.ts")],
		bundle: true,
		platform: "browser",
		target: ["es6"],
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
			"react",
			"react-dom",
			"react-icons"
		],
		format: "esm"
	})
	.catch(() => process.exit(1))
