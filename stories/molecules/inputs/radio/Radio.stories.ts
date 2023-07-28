import type { Meta, StoryObj } from "@storybook/react"
import Radio from "./Radio"
const meta: Meta<typeof Radio> = {
  title: "Molecules/Inputs/Radio",
  component: Radio,
  tags: [],
}
type Story = StoryObj<typeof Radio>
export const DefaultRadio: Story = {
  args: {},
}
export default meta
