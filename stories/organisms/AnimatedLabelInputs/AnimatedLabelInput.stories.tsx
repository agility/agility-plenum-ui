import type { Meta, StoryObj } from "@storybook/react"
import AmimatedLabelInput, { IAnimatedLabelInputProps } from "./AnimatedLabelInput"

const meta: Meta<typeof AmimatedLabelInput> = {
	title: "Design System/organisms/Amimated Label Input",
	component: AmimatedLabelInput,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof AmimatedLabelInput>
export const DefaultAnimatedLabelInputsStory: Story = {
	args: {
		id: "test",
		label: {
			display: "Label"
		},
		input: {}
	} as IAnimatedLabelInputProps
}
