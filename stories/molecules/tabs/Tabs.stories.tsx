import type { Meta, StoryObj } from "@storybook/react"
import Tabs from "./Tabs"
const meta: Meta<typeof Tabs> = {
	title: "Design System/Molecules/Tabs",
	component: Tabs
}
type Story = StoryObj<typeof Tabs>
export const DefaultTabs: Story = {
  args: {},
}
export default meta
