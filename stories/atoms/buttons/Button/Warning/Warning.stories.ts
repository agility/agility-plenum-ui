import type { Meta, StoryObj } from "@storybook/react"
import Button from "../Button"
import { defaultIcon } from "../defaultArgs"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: "Design System/atoms/Buttons/Button/Warning",
	component: Button,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof Button>
// #region Warning Button Stories
export const Warning: Story = {
	args: {
		actionType: "warning",
		label: "Warning Zone!",
		onClick: () => {
			window.alert("Button clicked!")
		}
	}
}

export const WarningDisabled: Story = {
	args: {
		actionType: "warning",
		label: "Warning Zone!",
		disabled: true,
		onClick: () => {
			window.alert("Button clicked!")
		}
	}
}

export const WarningTrailingIcon: Story = {
	args: {
		...Warning.args,
		icon: {
			...defaultIcon,
			icon: "IconTrash"
		},
		iconPosition: "trailing"
	}
}
export const WarningLeadingIcon: Story = {
	args: {
		...WarningTrailingIcon.args,
		iconPosition: "leading"
	}
}
export const WarningSimpleIconName: Story = {
	args: {
		...Warning.args,
		icon: "IconTrash",
		iconPosition: "leading"
	}
}
export const WarningExtraSmall: Story = {
	args: {
		...Warning.args,
		size: "sm"
	}
}
export const WarningSmall: Story = {
	args: {
		...Warning.args,
		size: "sm"
	}
}
export const WarningMedium: Story = {
	args: {
		...Warning.args,
		size: "md"
	}
}
export const WarningLarge: Story = {
	args: {
		...Warning.args,
		size: "lg"
	}
}
export const WarningExtraLarge: Story = {
	args: {
		...Warning.args,
		size: "xl"
	}
}
// #endregion
