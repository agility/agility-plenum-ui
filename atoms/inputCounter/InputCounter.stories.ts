import type { Meta, StoryObj } from "@storybook/react"
import InputCounter from "./InputCounter"
const meta: Meta<typeof InputCounter> = {
  title: "Atoms/InputCounter",
  component: InputCounter,
  tags: [],
}
type Story = StoryObj<typeof InputCounter>
export const DefaultInputCounter: Story = {
  args: {},
}
export default meta
