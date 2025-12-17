import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
	title: "Design System/atoms/Typography/Heading",
	component: Heading,
	tags: ["autodocs"]
};

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
	args: { level: 1, children: "Heading 1", className: "" }
};

export const Heading2: Story = {
	args: { level: 2, children: "Heading 2", className: "" }
};

export const Heading3: Story = {
	args: { level: 3, children: "Heading 3", className: "" }
};

export const Heading4: Story = {
	args: { level: 4, children: "Heading 4", className: "" }
};

export const Heading5: Story = {
	args: { level: 5, children: "Heading 5", className: "" }
};

export const Heading6: Story = {
	args: { level: 6, children: "Heading 6", className: "" }
};

export const HeadingWithCustomClassName: Story = {
	args: { level: 1, children: "Heading 1", className: "text-red-500" }
};

export default meta;
