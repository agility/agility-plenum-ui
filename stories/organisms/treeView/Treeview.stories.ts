import type { Meta, StoryObj } from "@storybook/react"
import Treeview from "./Treeview"
const meta: Meta<typeof Treeview> = {
	title: "Design System/Organisms/Treeview",
	component: Treeview,
	tags: []
}
type Story = StoryObj<typeof Treeview>
export const DefaultTreeview: Story = {
  args: {},
}
export default meta
