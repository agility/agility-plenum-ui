import type { Meta, StoryObj } from "@storybook/react"
import Button from "../Button"
import { defaultIcon } from "../defaultArgs"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: "Design System/atoms/Buttons/Button/Alternative",
	component: Button,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof Button>
// #region Alternative Button Stories
export const Alternative: Story = {
	args: {
		actionType: "alternative",
		label: "Button",
		onClick: () => {
			window.alert("Button clicked!")
		}
	}
}
export const AlternativeDisabled: Story = {
	args: {
		actionType: "alternative",
		label: "Button",
		disabled: true,
		onClick: () => {
			window.alert("Button clicked!")
		}
	}
}
export const AlternativeTrailingIcon: Story = {
	args: {
		...Alternative.args,
		icon: defaultIcon,
		iconPosition: "trailing"
	}
}
export const AlternativeLeadingIcon: Story = {
	args: {
		...AlternativeTrailingIcon.args,
		iconPosition: "leading"
	}
}
export const AlternativeExtraSmall: Story = {
	args: {
		...Alternative.args,
		size: "sm"
	}
}
export const AlternativeSimpleIconName: Story = {
	args: {
		...Alternative.args,
		icon: defaultIcon.icon,
		iconPosition: "leading"
	}
}
export const AlternativeSmall: Story = {
	args: {
		...Alternative.args,
		size: "sm"
	}
}
export const AlternativeMedium: Story = {
	args: {
		...Alternative.args,
		size: "md"
	}
}

export const AlternativeLarge: Story = {
	args: {
		...Alternative.args,
		size: "lg"
	}
}
export const AlternativeExtraLarge: Story = {
	args: {
		...Alternative.args,
		size: "xl"
	}
}
// #endregion
