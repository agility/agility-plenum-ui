import type { Meta, StoryObj } from "@storybook/react"
import Steps from "./Steps"
const meta: Meta<typeof Steps> = {
  title: "Molecules/Steps",
  component: Steps,
}
type Story = StoryObj<typeof Steps>
export const DefaultSteps: Story = {
  args: {},
}
export default meta
