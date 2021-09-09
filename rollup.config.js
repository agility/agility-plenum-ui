import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

const config = [{
	input: "src/index.ts",
	output: [
		{
			file: packageJson.main,
			format: "cjs",
			sourcemap: true
		},
		{
			file: packageJson.module,
			format: "esm",
			sourcemap: true
		}
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		postcss({
			extensions: ['.css']
		}),

	]
},
// {
// 	// path to your declaration files root
// 	input: './lib/index.d.ts',
// 	output: [{ file: 'lib/index.d.ts', format: 'es' }],
// 	plugins: [dts()],
// },
]

export default config