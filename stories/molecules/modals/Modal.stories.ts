import type { Meta, StoryObj } from "@storybook/react"
import Modal from "./Modals"
const meta: Meta<typeof Modal> = {
  title: "Molecules/Modal",
  component: Modal,
  tags: [],
}
type Story = StoryObj<typeof Modal>
export const DefaultModal: Story = {
  args: {},
}
export default meta
