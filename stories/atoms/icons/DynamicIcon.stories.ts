import type { Meta, StoryObj } from "@storybook/react";
import { DynamicIcon } from "./DynamicIcon";

const meta: Meta<typeof DynamicIcon> = {
	title: "Design System/atoms/Icons/DynamicIcon",
	component: DynamicIcon,
	tags: ["autodocs"]
};

type Story = StoryObj<typeof DynamicIcon>;

export const TablerIconSolid: Story = {
	args: {
		icon: "IconTrashFilled",
		outline: false
	}
};
export const TablerIconOutline: Story = {
	args: {
		icon: "IconTrash",
		outline: true
	}
};
export const TablerIconBrandGithub: Story = {
	args: {
		icon: "IconBrandGithub",
		outline: true
	}
};

export default meta;
