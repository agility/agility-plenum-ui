import type { Meta, StoryObj } from "@storybook/react"
import IconWithShadow from "./IconWithShadow"

const meta: Meta<typeof IconWithShadow> = {
	title: "Design System/atoms/Icons/Icon With Shadow",
	component: IconWithShadow,
	tags: ["autodocs"]
}

type Story = StoryObj<typeof IconWithShadow>

export const HeroIconSolid: Story = {
	args: {
		icon: "IconCube",
		outline: false
	}
}
export const HeroIconOutline: Story = {
	args: {
		icon: "IconCube",
		outline: true
	}
}
export const TablerIconSolid: Story = {
	args: {
		icon: "IconPaperclip",
		outline: false
	}
}
export const TablerIconOutline: Story = {
	args: {
		icon: "IconPaperclip",
		outline: true
	}
}
export const FAIcon: Story = {
	args: {
		icon: "IconBrandGithub",
		outline: true
	}
}

export default meta
