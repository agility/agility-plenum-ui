import type { Meta, StoryObj } from "@storybook/react"
import AnimatedLabelField from "./AnimatedLabelField"
const meta: Meta<typeof AnimatedLabelField> = {
  title: "Molecules/Inputs/AnimatedLabelField",
  component: AnimatedLabelField,
  tags: [],
}
type Story = StoryObj<typeof AnimatedLabelField>
export const DefaultAnimatedLabelField: Story = {
  args: {},
}
export default meta
