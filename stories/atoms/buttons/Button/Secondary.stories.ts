import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"
import { defaultIcon } from "./defaultArgs"

const meta: Meta<typeof Button> = {
  title: "Atoms/Buttons/Button/Secondary",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Secondary: Story = {
  args: {
    actionType: "secondary",
    label: "Button",
    onClick: () => {
      window.alert("Button clicked!")
    },
  },
}
export const TrailingIcon: Story = {
	args: {
		...Secondary.args,
		icon: { ...defaultIcon, icon: "Icon3dCubeSphere" },
		iconPosition: "trailing"
	}
}
export const LeadingIcon: Story = {
  args: {
    ...TrailingIcon.args,
    iconPosition: "leading",
  },
}
export const ExtraSmall: Story = {
  args: {
    ...Secondary.args,
    size: "sm",
  },
}
export const Small: Story = {
  args: {
    ...Secondary.args,
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    ...Secondary.args,
    size: "md",
  },
}

export const Large: Story = {
  args: {
    ...Secondary.args,
    size: "lg",
  },
}
export const ExtraLarge: Story = {
  args: {
    ...Secondary.args,
    size: "xl",
  },
}
