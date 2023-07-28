import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Atoms/Buttons/Button/Alternative",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Alternative: Story = {
  args: {
    actionType: "alternative",
    label: "Button",
    onClick: () => {
      window.alert("Button clicked!")
    },
  },
}
export const TrailingIcon: Story = {
  args: {
    ...Alternative.args,
    icon: "BellAlertIcon",
    iconPosition: "trailing",
  },
}
export const LeadingIcon: Story = {
  args: {
    ...TrailingIcon.args,
    iconPosition: "leading",
  },
}
export const ExtraSmall: Story = {
  args: {
    ...Alternative.args,
    size: "sm",
  },
}
export const Small: Story = {
  args: {
    ...Alternative.args,
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    ...Alternative.args,
    size: "md",
  },
}

export const Large: Story = {
  args: {
    ...Alternative.args,
    size: "lg",
  },
}
export const ExtraLarge: Story = {
  args: {
    ...Alternative.args,
    size: "xl",
  },
}
