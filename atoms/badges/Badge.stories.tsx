import type { Meta, StoryObj } from "@storybook/react"
import Badge from "./Badge"
const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: [],
}
type Story = StoryObj<typeof Badge>
export const DefaultBadge: Story = {
  args: {},
}
export default meta
