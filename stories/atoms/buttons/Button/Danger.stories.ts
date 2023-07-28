import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Atoms/Buttons/Button/Danger",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Danger: Story = {
  args: {
    actionType: "danger",
    label: "Danger Zone!",
    onClick: () => {
      window.alert("Button clicked!")
    },
  },
}
export const TrailingIcon: Story = {
  args: {
    ...Danger.args,
    icon: "TrashIcon",
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
    ...Danger.args,
    size: "sm",
  },
}
export const Small: Story = {
  args: {
    ...Danger.args,
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    ...Danger.args,
    size: "md",
  },
}

export const Large: Story = {
  args: {
    ...Danger.args,
    size: "lg",
  },
}
export const ExtraLarge: Story = {
  args: {
    ...Danger.args,
    size: "xl",
  },
}
