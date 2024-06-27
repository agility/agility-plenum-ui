import { Preview } from "@storybook/react"
import Layout from "./Layout"
import React from "react"
import "../app/globals.css"
// import "./fonts.css"

const preview: Preview = {
	parameters: {
		options: {
			storySort: {
				order: ["atoms", "molecules", "organisms"]
			}
		},
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	},
	decorators: [
		(Story) => (
			<Layout>
				<Story />
			</Layout>
		)
	]
}
export default preview
