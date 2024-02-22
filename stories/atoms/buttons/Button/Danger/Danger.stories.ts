import type { Meta, StoryObj } from "@storybook/react"
import Button from "../Button"
import { defaultIcon } from "../defaultArgs"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: "Design System/atoms/Buttons/Button/Danger",
	component: Button,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof Button>
// #region Danger Button Stories
export const Danger: Story = {
	args: {
		actionType: "danger",
		label: "Danger Zone!",
		onClick: () => {
			window.alert("Button clicked!")
		}
	}
}

export const DangerDisabled: Story = {
	args: {
		actionType: "danger",
		label: "Danger Zone!",
		disabled: true,
		onClick: () => {
			window.alert("Button clicked!")
		}
	}
}

export const DangerTrailingIcon: Story = {
	args: {
		...Danger.args,
		icon: {
			...defaultIcon,
			icon: "IconTrash"
		},
		iconPosition: "trailing"
	}
}
export const DangerLeadingIcon: Story = {
	args: {
		...DangerTrailingIcon.args,
		iconPosition: "leading"
	}
}
export const DangerSimpleIconName: Story = {
	args: {
		...Danger.args,
		icon: "IconTrash",
		iconPosition: "leading"
	}
}
export const DangerExtraSmall: Story = {
	args: {
		...Danger.args,
		size: "sm"
	}
}
export const DangerSmall: Story = {
	args: {
		...Danger.args,
		size: "sm"
	}
}
export const DangerMedium: Story = {
	args: {
		...Danger.args,
		size: "md"
	}
}
export const DangerLarge: Story = {
	args: {
		...Danger.args,
		size: "lg"
	}
}
export const DangerExtraLarge: Story = {
	args: {
		...Danger.args,
		size: "xl"
	}
}
// #endregion
