import type { Meta, StoryObj } from "@storybook/react"
import FloatingActionButton from "./FloatingActionButton"
const meta: Meta<typeof FloatingActionButton> = {
  title: "Atoms/Button/FloatingActionButton",
  component: FloatingActionButton,
  tags: ["atomic", `FloatingActionButton`],
}
type Story = StoryObj<typeof FloatingActionButton>
export const DefaultFloatingActionButton: Story = {
  args: {},
}
export default meta
