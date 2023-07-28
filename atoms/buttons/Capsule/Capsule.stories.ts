import type { Meta, StoryObj } from "@storybook/react"
import Capsule from "../Capsule/Capsule"
import { IButtonProps, BTNActionType } from "../Button/Button"
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Capsule> = {
  title: "Atoms/Buttons/Capsule",
  component: Capsule,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Capsule>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    actionType: "primary",
    label: "Button",
    onClick: () => {
      window.alert("Button clicked!")
    },
  },
}
export const Secondary: Story = {
  args: {
    ...Primary.args,
    actionType: "secondary",
  },
}
export const Alternative: Story = {
  args: {
    ...Primary.args,
    actionType: "alternative",
  },
}
export const Danger: Story = {
  args: {
    ...Primary.args,
    actionType: "danger",
  },
}
