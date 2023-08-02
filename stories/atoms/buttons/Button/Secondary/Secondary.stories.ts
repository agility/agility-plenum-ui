import type { Meta, StoryObj } from "@storybook/react"
import Button from "../Button"
import { defaultIcon } from "../defaultArgs"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: "Design System/Atoms/Buttons/Button/Secondary",
	component: Button,
	tags: ["autodocs"],
	argTypes: {},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Rb5fJ8hD3pwvLnidgCaGgB/Agility-UI?type=design&node-id=12-213&mode=design&t=9hpwa8YStpwXksff-4"
		}
	}
}

export default meta
type Story = StoryObj<typeof Button>
// #region Secondary Button Stories
export const Secondary: Story = {
	args: {
		actionType: "secondary",
		label: "Button",
		onClick: () => {
			window.alert("Button clicked!")
		}
	}
}
export const SecondaryTrailingIcon: Story = {
	args: {
		...Secondary.args,
		icon: { ...defaultIcon, icon: "Icon3dCubeSphere" },
		iconPosition: "trailing"
	}
}
export const SecondaryLeadingIcon: Story = {
	args: {
		...SecondaryTrailingIcon.args,
		iconPosition: "leading"
	}
}
export const SecondaryExtraSmall: Story = {
	args: {
		...Secondary.args,
		size: "sm"
	}
}
export const SecondarySmall: Story = {
	args: {
		...Secondary.args,
		size: "sm"
	}
}
export const SecondaryMedium: Story = {
	args: {
		...Secondary.args,
		size: "md"
	}
}
export const SecondaryLarge: Story = {
	args: {
		...Secondary.args,
		size: "lg"
	}
}
export const SecondaryExtraLarge: Story = {
	args: {
		...Secondary.args,
		size: "xl"
	}
}
// #endregion
