import type { Meta, StoryObj } from "@storybook/react"
import Button from "../Button"
import { defaultIcon } from "../defaultArgs"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: "Design System/atoms/Buttons/Button/Primary",
	component: Button,
	tags: ["autodocs"],
	argTypes: {},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Rb5fJ8hD3pwvLnidgCaGgB/Agility-UI?type=design&node-id=12-149&mode=design&t=9hpwa8YStpwXksff-4"
		}
	}
}

export default meta
type Story = StoryObj<typeof Button>
//#region Primary Button Stories
export const Primary: Story = {
	args: {
		actionType: "primary",
		label: "Button",
		onClick: () => {
			window.alert("Button clicked!")
		}
	}
}

export const PrimaryDisabled: Story = {
	args: {
		actionType: "primary",
		label: "Button",
		disabled: true,
		onClick: () => {
			window.alert("Button clicked!")
		}
	}
}

export const PrimaryLeadingIcon: Story = {
	args: {
		...Primary.args,
		icon: {
			...defaultIcon,
			icon: "IconCheck",
			outline: false
		},
		iconPosition: "leading"
	}
}
export const PrimarySimpleIconName: Story = {
	args: {
		...Primary.args,
		icon: "IconCheck",
		iconPosition: "leading"
	}
}
export const PrimaryTrailingIcon: Story = {
	args: {
		...PrimaryLeadingIcon.args,
		iconPosition: "trailing"
	}
}
export const PrimaryExtraSmall: Story = {
	args: {
		...Primary.args,
		size: "sm"
	}
}
export const PrimarySmall: Story = {
	args: {
		...Primary.args,
		size: "sm"
	}
}
export const PrimaryMedium: Story = {
	args: {
		...Primary.args,
		size: "md"
	}
}
export const PrimaryLarge: Story = {
	args: {
		...Primary.args,
		size: "lg"
	}
}
export const PrimaryExtraLarge: Story = {
	args: {
		...Primary.args,
		size: "xl"
	}
}
// #endregion
