
import type { Meta, StoryObj } from "@storybook/react"
import Tabs, { ITabsProps } from "./Tabs"

const meta: Meta<typeof Tabs> = {
  title: "Design System/molecules/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Tabs>
export const DefaultTabsStory: Story = {
	args: {
		
	}
}
