import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
	title: "Design System/atoms/Typography/Paragraph",
	component: Paragraph,
	tags: ["autodocs"]
};

type Story = StoryObj<typeof Paragraph>;

export const DefaultParagraph: Story = {
	args: { children: "Default Paragraph" }
};

export const LargeParagraph: Story = {
	args: { children: "Large Paragraph", size: "lg" }
};

export const MediumParagraph: Story = {
	args: { children: "Medium Paragraph", size: "md" }
};

export const SmallParagraph: Story = {
	args: { children: "Small Paragraph", size: "sm" }
};

export const ExtraSmallParagraph: Story = {
	args: { children: "Extra Small Paragraph", size: "xs" }
};

export const ParagraphWithCustomStyle: Story = {
	args: { children: "Paragraph With Custom Style", className: "text-red-500" }
};

export default meta;
