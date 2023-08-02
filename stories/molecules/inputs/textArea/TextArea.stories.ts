import type { Meta, StoryObj } from "@storybook/react"
import TextArea from "./TextArea"
const meta: Meta<typeof TextArea> = {
	title: "Design System/Molecules/Inputs/TextArea",
	component: TextArea,
	tags: []
}
type Story = StoryObj<typeof TextArea>
export const DefaultTextArea: Story = {
  args: {},
}
export default meta
