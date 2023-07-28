import type { Meta, StoryObj } from "@storybook/react"
import ComboBox from "./ComboBox"
const meta: Meta<typeof ComboBox> = {
  title: "Molecules/Inputs/ComboBox",
  component: ComboBox,
  tags: [],
}
type Story = StoryObj<typeof ComboBox>
export const DefaultComboBox: Story = {
  args: {},
}
export default meta
