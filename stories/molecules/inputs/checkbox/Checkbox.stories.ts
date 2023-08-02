import type { Meta, StoryObj } from "@storybook/react"
import Checkbox from "./Checkbox"
const meta: Meta<typeof Checkbox> = {
	title: "Design System/Molecules/Inputs/Checkbox",
	component: Checkbox,
	tags: []
}
type Story = StoryObj<typeof Checkbox>
export const DefaultCheckbox: Story = {
  args: {},
}
export default meta
