import type { Meta, StoryObj } from "@storybook/react"
import Checkbox from "./Checkbox"
const meta: Meta<typeof Checkbox> = {
	title: "Design System/Molecules/Inputs/Checkbox",
	component: Checkbox,
	tags: []
}
type Story = StoryObj<typeof Checkbox>
export const DefaultCheckbox: Story = {
	args: {
		label: "Checkbox Label",
		id: "checkboxId",
		isDisabled: false,
		isChecked: false,
		isRequired: false,
		isError: false,
		message: "",
		onChange: (value: string) => {

		}
	}
}
export default meta
