import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';


const config = [
	{

		input: 'stories/index.ts',

		output: [
			{
				file: "lib/index.js",
				format: 'cjs',
				sourcemap: true
			},
			{
				file: "lib/index.esm.js",
				format: 'esm',
				sourcemap: true
			}
		],
		external: ["react", "react-dom"],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.lib.json",
			})
		]
	},
	{
		input: "lib/esm/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
		external: ["react", "react-dom"],
	},
];

export default config;