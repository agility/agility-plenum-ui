import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Atoms/Buttons/Button/Primary",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    actionType: "primary",
    label: "Button",
    onClick: () => {
      window.alert("Button clicked!")
    },
  },
}
export const TrailingIcon: Story = {
  args: {
    ...Primary.args,
    icon: "CursorArrowRippleIcon",
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
    ...Primary.args,
    size: "sm",
  },
}
export const Small: Story = {
  args: {
    ...Primary.args,
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: "md",
  },
}

export const Large: Story = {
  args: {
    ...Primary.args,
    size: "lg",
  },
}
export const ExtraLarge: Story = {
  args: {
    ...Primary.args,
    size: "xl",
  },
}
