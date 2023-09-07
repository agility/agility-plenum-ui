import type { Meta, StoryObj } from "@storybook/react"
import Radio from "./Radio"
const meta: Meta<typeof Radio> = {
	title: "Design System/Molecules/Inputs/Radio",
	component: Radio,
	tags: []
}
type Story = StoryObj<typeof Radio>
export const DefaultRadio: Story = {
	args: {
		label: "Radio Label",
		id: "radioId",
		isDisabled: false,
		isChecked: false,
		isRequired: false,
		isError: false,
		message: "",
		name: "radio-group",
		onChange: (value: string, checked: boolean) => {

		},
		onClick: (value: string, checked: boolean) => {

		}
	}
}
export default meta
