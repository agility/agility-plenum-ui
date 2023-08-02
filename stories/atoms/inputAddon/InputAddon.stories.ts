import type { Meta, StoryObj } from "@storybook/react"
import InputAddon from "./InputAddon"
const meta: Meta<typeof InputAddon> = {
	title: "Design System/Atoms/InputAddon",
	component: InputAddon,
	tags: []
}
type Story = StoryObj<typeof InputAddon>
export const DefaultInputAddon: Story = {
  args: {},
}
export default meta
