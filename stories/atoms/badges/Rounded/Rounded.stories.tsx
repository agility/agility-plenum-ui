import type { Meta, StoryObj } from "@storybook/react"
import Badge from "../Badge"

const meta: Meta<typeof Badge> = {
	title: "Design System/Atoms/Badges/Rounded",
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
export const SmallPrimaryRounded: Story = {
	args: {
		variant: "rounded",
		label: "Badge",
		color: "primary"
	}
}
export const RoundedAsButton: Story = {
	args: {
		variant: "rounded",
		label: "Badge",
		color: "primary",
		actionButton: { onClick: () => window.alert("action button clicked") }
	}
}
export const SmallPrimaryRoundedWithRemoveButton: Story = {
	args: {
		...SmallPrimaryRounded.args,
		removeButton: { onClick: () => window.alert("remove button clicked") }
	}
}
export const SmallPrimaryRoundedWithStatusDot: Story = {
	args: {
		...SmallPrimaryRounded.args,
		statusDot: true
	}
}
export const SmallPrimaryRoundedWithStatusDotAndRemoveButton: Story = {
	args: {
		...SmallPrimaryRoundedWithRemoveButton.args,
		...SmallPrimaryRoundedWithStatusDot.args
	}
}
export const LargePrimaryRounded: Story = {
	args: {
		variant: "rounded",
		label: "Badge",
		color: "primary",
		size: "lg"
	}
}
export const LargePrimaryRoundedWithRemoveButton: Story = {
	args: {
		...LargePrimaryRounded.args,
		removeButton: { onClick: () => window.alert("remove button clicked") }
	}
}
export const LargePrimaryRoundedWithStatusDot: Story = {
	args: {
		...LargePrimaryRounded.args,
		statusDot: true
	}
}
export const LargePrimaryRoundedWithStatusDotAndRemoveButton: Story = {
	args: {
		...LargePrimaryRoundedWithRemoveButton.args,
		...LargePrimaryRoundedWithStatusDot.args
	}
}
export default meta
