
import type { Meta, StoryObj } from "@storybook/react"
import Crumb, { ICrumbProps } from "./Crumb"

const meta: Meta<typeof Crumb> = {
  title: "Design System/atoms/Crumb",
  component: Crumb,
  tags: ["autodocs"],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Crumb>
export const DefaultCrumbStory: Story = {
	args: {
		
	}
}
