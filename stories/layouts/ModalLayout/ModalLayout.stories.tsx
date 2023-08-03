
import type { Meta, StoryObj } from "@storybook/react"
import ModalLayout, { IModalLayoutProps } from "./ModalLayout"

const meta: Meta<typeof ModalLayout> = {
  title: "Design System/layouts/ModalLayout",
  component: ModalLayout,
  tags: ["autodocs"],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ModalLayout>
export const DefaultModalLayoutStory: Story = {
	args: {
		
	}
}
