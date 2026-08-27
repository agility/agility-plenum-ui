import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";

// Stories documenting the min-width behaviour introduced in v2.5:
// labeled buttons at the default size get a 150px floor; icon-only buttons,
// explicit size="xs"/"sm" buttons, and consumers passing their own min-w-* do not.
const meta: Meta<typeof Button> = {
	title: "Design System/atoms/Buttons/Button/Min Width",
	component: Button,
	tags: ["autodocs"],
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Button>;

/** A labeled button with no explicit size gets the 150px min-width floor. */
export const LabeledDefaultSize: Story = {
	args: {
		actionType: "primary",
		label: "Save"
	}
};

/** An icon-only button (no label) is exempt from the floor and can be sized freely. */
export const IconOnly: Story = {
	args: {
		actionType: "alternative",
		label: "",
		icon: "IconDots",
		className: "w-[30px] !px-1"
	}
};

/** Explicitly passing size="sm" opts out of the floor — compact toolbars keep their width. */
export const ExplicitSmall: Story = {
	args: {
		actionType: "secondary",
		label: "Compact",
		size: "sm",
		className: "!px-3"
	}
};

/** Explicitly passing size="xs" also opts out of the floor. */
export const ExplicitExtraSmall: Story = {
	args: {
		actionType: "secondary",
		label: "Tiny",
		size: "xs",
		className: "!px-3"
	}
};

/** Consumer classes win: min-w-0 (or any min-w-*) removes the floor via tailwind-merge. */
export const ConsumerMinWidthOverride: Story = {
	args: {
		actionType: "primary",
		label: "Override",
		className: "min-w-0"
	}
};

/** Larger explicit sizes (md/lg/xl) keep the floor. */
export const MediumKeepsFloor: Story = {
	args: {
		actionType: "primary",
		label: "Medium",
		size: "md"
	}
};
