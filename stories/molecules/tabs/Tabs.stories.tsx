import type { Meta, StoryObj } from "@storybook/react"
import Tabs from "./Tabs"
const meta: Meta<typeof Tabs> = {
  title: "Molecules/Tabs",
  component: Tabs,
}
type Story = StoryObj<typeof Tabs>
export const DefaultTabs: Story = {
  args: {},
}
export default meta
