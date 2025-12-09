import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";
import { defaultIcon } from "../defaultArgs";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: "Design System/atoms/Buttons/Button/DangerSecondary",
	component: Button,
	tags: ["autodocs"],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Button>;
// #region Danger Button Stories
export const DangerSecondary: Story = {
	args: {
		actionType: "danger-secondary",
		label: "Danger Secondary",
		onClick: () => {
			window.alert("Button clicked!");
		}
	}
};

export const DangerSecondaryDisabled: Story = {
	args: {
		actionType: "danger-secondary",
		label: "Danger Secondary",
		disabled: true,
		onClick: () => {
			window.alert("Button clicked!");
		}
	}
};

export const DangerSecondaryTrailingIcon: Story = {
	args: {
		...DangerSecondary.args,
		icon: {
			...defaultIcon,
			icon: "IconTrash"
		},
		iconPosition: "trailing"
	}
};
export const DangerSecondaryLeadingIcon: Story = {
	args: {
		...DangerSecondaryTrailingIcon.args,
		iconPosition: "leading"
	}
};
export const DangerSecondarySimpleIconName: Story = {
	args: {
		...DangerSecondary.args,
		icon: "IconTrash",
		iconPosition: "leading"
	}
};
export const DangerSecondaryExtraSmall: Story = {
	args: {
		...DangerSecondary.args,
		size: "sm"
	}
};
export const DangerSecondarySmall: Story = {
	args: {
		...DangerSecondary.args,
		size: "sm"
	}
};
export const DangerSecondaryMedium: Story = {
	args: {
		...DangerSecondary.args,
		size: "md"
	}
};
export const DangerSecondaryLarge: Story = {
	args: {
		...DangerSecondary.args,
		size: "lg"
	}
};
export const DangerSecondaryExtraLarge: Story = {
	args: {
		...DangerSecondary.args,
		size: "xl"
	}
};
// #endregion
