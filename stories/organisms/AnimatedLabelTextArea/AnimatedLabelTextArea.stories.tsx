import type { Meta, StoryObj } from "@storybook/react"
import AnimatedLabelTextArea, { IAnimatedLabelTextAreaProps } from "./AnimatedLabelTextArea"

const meta: Meta<typeof AnimatedLabelTextArea> = {
	title: "Design System/organisms/Animated Label Text Area",
	component: AnimatedLabelTextArea,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof AnimatedLabelTextArea>
export const DefaultAnimatedLabelTextAreasStory: Story = {
	args: {
		id: "test",
		label: "Label"
	} as IAnimatedLabelTextAreaProps
}

export const DefaultAnimatedLabelTextAreasStoryWithPlaceholder: Story = {
	args: {
		id: "test",
		label: "Label",
		placeholder: "Placeholder"
	} as IAnimatedLabelTextAreaProps
}
