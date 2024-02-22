import type { Meta, StoryObj } from "@storybook/react"
import Badge from "../Badge"

const meta: Meta<typeof Badge> = {
	title: "Design System/atoms/Badges/Pill",
	component: Badge,
	tags: ["autodocs"],
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Rb5fJ8hD3pwvLnidgCaGgB/Agility-UI?type=design&node-id=12-755&mode=design&t=9hpwa8YStpwXksff-4"
		}
	}
}
type Story = StoryObj<typeof Badge>
export const SmallPrimaryPill: Story = {
	args: {
		variant: "pill",
		label: "Badge",
		color: "primary"
	}
}
export const PillAsButton: Story = {
	args: {
		variant: "pill",
		label: "Badge",
		color: "primary",
		actionButton: { onClick: () => window.alert("action button clicked") }
	}
}
export const SmallPrimaryPillWithRemoveButton: Story = {
	args: {
		...SmallPrimaryPill.args,
		removeButton: { onClick: () => window.alert("remove button clicked") }
	}
}
export const SmallPrimaryPillWithStatusDot: Story = {
	args: {
		...SmallPrimaryPill.args,
		statusDot: true
	}
}
export const SmallPrimaryPillWithStatusDotAndRemoveButton: Story = {
	args: {
		...SmallPrimaryPillWithRemoveButton.args,
		...SmallPrimaryPillWithStatusDot.args
	}
}
export const LargePrimaryPill: Story = {
	args: {
		variant: "pill",
		label: "Badge",
		color: "primary",
		size: "lg"
	}
}
export const LargePrimaryPillWithRemoveButton: Story = {
	args: {
		...LargePrimaryPill.args,
		removeButton: { onClick: () => window.alert("remove button clicked") }
	}
}
export const LargePrimaryPillWithStatusDot: Story = {
	args: {
		...LargePrimaryPill.args,
		statusDot: true
	}
}
export const LargePrimaryPillWithStatusDotAndRemoveButton: Story = {
	args: {
		...LargePrimaryPillWithRemoveButton.args,
		...LargePrimaryPillWithStatusDot.args
	}
}
export default meta
