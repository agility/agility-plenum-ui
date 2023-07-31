import type { Meta, StoryObj } from "@storybook/react"
import { DynamicIcon } from "./DynamicIcon"

const meta: Meta<typeof DynamicIcon> = {
	title: "Atoms/DynamicIcon",
	component: DynamicIcon,
	tags: []
}

type Story = StoryObj<typeof DynamicIcon>

export const HeroIcon: Story = {
	args: {
		icon: "IconAnchor",
		outline: true
	}
}

export default meta
