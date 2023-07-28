import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Atoms/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

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
    label: "Secondary",
  },
}
export const Alternative: Story = {
  args: {
    ...Primary.args,
    actionType: "alternative",
    label: "Alternative",
  },
}
export const Danger: Story = {
  args: {
    ...Primary.args,
    actionType: "danger",
    label: "Danger!",
  },
}
