
import type { Meta, StoryObj } from "@storybook/react"
import CardLayout, { ICardLayoutProps } from "./CardLayout"

const meta: Meta<typeof CardLayout> = {
  title: "Design System/layouts/CardLayout",
  component: CardLayout,
  tags: ["autodocs"],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof CardLayout>
export const DefaultCardLayoutStory: Story = {
	args: {
		
	}
}
