import type { Meta, StoryObj } from "@storybook/react"
import Avatar from "./Avatar"
const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: [],
}
type Story = StoryObj<typeof Avatar>
export const DefaultAvatar: Story = {
  args: {},
}
export default meta
