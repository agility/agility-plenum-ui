import type { Meta, StoryObj } from "@storybook/react"
import Crumb from "./Crumb"
const meta: Meta<typeof Crumb> = {
  title: "Atoms/Crumb",
  component: Crumb,
  tags: [],
}
type Story = StoryObj<typeof Crumb>
export const DefaultCrumb: Story = {
  args: {},
}
export default meta
