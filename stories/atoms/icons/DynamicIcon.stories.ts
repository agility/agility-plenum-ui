import type { Meta, StoryObj } from "@storybook/react"
import { DynamicIcon } from "./DynamicIcon"

const meta: Meta<typeof DynamicIcon> = {
	title: "Design System/atoms/Icons/DynamicIcon",
	component: DynamicIcon,
	tags: ["autodocs"]
}

type Story = StoryObj<typeof DynamicIcon>

export const HeroIconSolid: Story = {
	args: {
		icon: "TrashIcon",
		outline: false
	}
}
export const HeroIconOutline: Story = {
	args: {
		icon: "TrashIcon",
		outline: true
	}
}
export const TablerIconSolid: Story = {
	args: {
		icon: "IconTrashFilled",
		outline: false
	}
}
export const TablerIconOutline: Story = {
	args: {
		icon: "TrashIcon",
		outline: true
	}
}
export const FAIcon: Story = {
	args: {
		icon: "FaGithub",
		outline: true
	}
}

export default meta
