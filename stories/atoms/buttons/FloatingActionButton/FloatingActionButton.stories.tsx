import type { Meta, StoryObj } from "@storybook/react"
import FloatingActionButton, { IFloatingActionButtonProps } from "./FloatingActionButton"

const meta: Meta<typeof FloatingActionButton> = {
	title: "Design System/atoms/buttons/FloatingActionButton/FloatingActionButton",
	component: FloatingActionButton,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof FloatingActionButton>
export const DefaultFloatingActionButtonStory: Story = {
	args: {}
}
