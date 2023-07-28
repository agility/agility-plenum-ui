import type { Meta, StoryObj } from "@storybook/react"
import Stacked from "./Stacked"
const meta: Meta<typeof Stacked> = {
  title: "Molecules/Lists/Stacked",
  component: Stacked,
}
type Story = StoryObj<typeof Stacked>
export const DefaultStacked: Story = {
  args: {},
}
export default meta
