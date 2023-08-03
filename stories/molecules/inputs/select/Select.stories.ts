import type { Meta, StoryObj } from "@storybook/react"
import Select from "./Select"
const meta: Meta<typeof Select> = {
	title: "Design System/Molecules/Inputs/Select",
	component: Select,
	tags: []
}
type Story = StoryObj<typeof Select>
export const DefaultSelect: Story = {
	args: {
		label: "Label",
		id: "select",
		name: "select",
		options: [
			{ label: "Canada", value: "value1" },
			{ label: "USA", value: "value2" }
		],
		isDisabled: false,
		isError: false,
		isRequired: false
	}
}
export default meta
