import type { Meta, StoryObj } from "@storybook/react"
import AnimatedLabelInput, { IAnimatedLabelInputProps } from "./AnimatedLabelInput"

const meta: Meta<typeof AnimatedLabelInput> = {
	title: "Design System/organisms/Animated Label Input",
	component: AnimatedLabelInput,
	tags: ["autodocs"],
	argTypes: {}
}
const DefaultArgs: IAnimatedLabelInputProps = {
	id: "test",
	containerStyles: "w-full",
	label: {
		display: "Label with White BG"
	},
	handleChange: (value: string) => {
		console.log(value)
	},
	type: "text",
	value: ""
}

export default meta
type Story = StoryObj<typeof AnimatedLabelInput>

export const DefaultStory: Story = {
	args: {
		...DefaultArgs
	} as IAnimatedLabelInputProps
}

export const WithPlaceHolderStory: Story = {
	args: {
		...DefaultArgs,
		label: { display: "label with placeholder" },
		placeholder: "Placeholder"
	} as IAnimatedLabelInputProps
}
