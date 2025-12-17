import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
	title: "Design System/atoms/Typography/Label",
	component: Label,
	tags: ["autodocs"]
};

type Story = StoryObj<typeof Label>;

export const DefaultLabel: Story = {
	args: { children: "Default Label" }
};

export const ExtraLargeLabel: Story = {
	args: { children: "Extra Large Label", size: "xl" }
};

export const LargeLabel: Story = {
	args: { children: "Large Label", size: "lg" }
};

export const MediumLabel: Story = {
	args: { children: "Medium Label", size: "md" }
};

export const SmallLabel: Story = {
	args: { children: "Small Label", size: "sm" }
};

export const ExtraSmallLabel: Story = {
	args: { children: "Extra Small Label", size: "xs" }
};

export const LabelWithCustomStyle: Story = {
	args: { children: "Label With Custom Style", className: "text-red-500" }
};

export default meta;
