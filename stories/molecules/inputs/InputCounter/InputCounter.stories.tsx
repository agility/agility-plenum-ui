import type { Meta, StoryObj } from "@storybook/react"
import InputCounter, { IInputCounterProps } from "./InputCounter"

const meta: Meta<typeof InputCounter> = {
	title: "Design System/molecules/inputs/InputCounter",
	component: InputCounter,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof InputCounter>
export const DefaultInputCounterStory: Story = {
	args: {
		limit: 100,
		current: 0
	} as IInputCounterProps
}
