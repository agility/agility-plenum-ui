import { Preview } from "@storybook/react"
import Layout from "./Layout"
import React from "react"

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
