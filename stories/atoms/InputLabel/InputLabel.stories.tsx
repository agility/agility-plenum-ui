import type { Meta, StoryObj } from "@storybook/react"
import InputLabel from "./InputLabel"

const meta: Meta<typeof InputLabel> = {
	title: "Design System/Atoms/Input Label",
	component: InputLabel,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof InputLabel>

export const Default: Story = {
	args: {
		label: "Label",
		id: "input-label"
	}
}
