import type { Meta, StoryObj } from "@storybook/react"
import Card from "./Card"
const meta: Meta<typeof Card> = {
	title: "Design System/Atoms/Card",
	component: Card,
	tags: []
}
type Story = StoryObj<typeof Card>
export const DefaultCard: Story = {
  args: {},
}
export default meta
