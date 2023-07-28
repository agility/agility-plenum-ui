import type { Meta, StoryObj } from "@storybook/react"
import Select from "./Select"
const meta: Meta<typeof Select> = {
  title: "Molecules/Inputs/Select",
  component: Select,
  tags: [],
}
type Story = StoryObj<typeof Select>
export const DefaultSelect: Story = {
  args: {},
}
export default meta
