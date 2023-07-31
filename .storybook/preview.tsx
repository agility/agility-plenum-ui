import { Preview } from "@storybook/react"
import Layout from "./Layout"
import React from "react"

const preview: Preview = {
	parameters: {
		options: {
			storySort: {
				order: [
					"atoms",
					["buttons", "dynamicIcon", "badges", "inputAddon", "inputCounter", "loaders", "*"],
					"molecules",
					["inputs", "modals", "tabs", "*"],
					"organisms"
				]
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
