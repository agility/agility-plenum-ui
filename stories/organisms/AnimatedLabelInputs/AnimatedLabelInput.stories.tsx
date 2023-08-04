import type { Meta, StoryObj } from "@storybook/react"
import AnimatedLabelInput, { IAnimatedLabelInputProps } from "./AnimatedLabelInput"

const meta: Meta<typeof AnimatedLabelInput> = {
	title: "Design System/organisms/Animated Label Input",
	component: AnimatedLabelInput,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof AnimatedLabelInput>
export const DefaultAnimatedLabelInputsStory: Story = {
	args: {
		id: "test",
		label: {
			display: "Label"
		},
		input: {}
	} as IAnimatedLabelInputProps
}
