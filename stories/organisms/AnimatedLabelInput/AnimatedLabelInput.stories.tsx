import type { Meta, StoryObj } from "@storybook/react"
import AnimatedLabelInput, { IAnimatedLabelInputProps } from "./AnimatedLabelInput"

const meta: Meta<typeof AnimatedLabelInput> = {
	title: "Design System/organisms/Animated Label Input",
	component: AnimatedLabelInput,
	tags: ["autodocs"],
	argTypes: {},
	decorators: [
		(Story, context) => {
			if (context.name === "Default Animated Label Inputs Dark BG Story") {
				return (
					<div className="bg-transparent-black-03 p-6">
						<Story />
					</div>
				)
			}
			return <Story />
		}
	]
}

export default meta
type Story = StoryObj<typeof AnimatedLabelInput>
export const DefaultAnimatedLabelInputsStory: Story = {
	args: {
		id: "test",
		label: {
			display: "Label"
		}
	} as IAnimatedLabelInputProps
}
export const DefaultAnimatedLabelInputsDarkBGStory: Story = {
	args: {
		id: "test",
		label: {
			display: "Label with Dark BG"
		},
		value: "Value"
	} as IAnimatedLabelInputProps
}

export const DefaultAnimatedLabelInputsStoryWithPlaceHolder: Story = {
	args: {
		id: "test",
		label: {
			display: "Label"
		},
		placeholder: "Placeholder"
	} as IAnimatedLabelInputProps
}
