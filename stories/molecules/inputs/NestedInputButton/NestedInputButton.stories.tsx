import type { Meta, StoryObj } from "@storybook/react"
import NestedInputButton, { INestedInputButtonProps } from "./NestedInputButton"

const meta: Meta<typeof NestedInputButton> = {
	title: "Design System/molecules/inputs/Nested Input Button",
	component: NestedInputButton,
	tags: ["autodocs"],
	argTypes: {},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Rb5fJ8hD3pwvLnidgCaGgB/Agility-UI?type=design&node-id=114-2290&mode=dev&device-scaling=100%25&page-id=0%3A1"
		}
	}
}

export default meta
type Story = StoryObj<typeof NestedInputButton>

export const RightAligned: Story = {
	args: {
		icon: {
			icon: "IconSearch",
			className: "h-5 w-5 text-gray-400"
		},
		ctaLabel: "Search",
		align: "right",
		isClear: false,
		onClickHandler: () => window.alert("Clicked"),
		buttonProps: {
			type: "button"
		}
	}
}
export const LeftAligned: Story = {
	args: {
		...RightAligned.args,
		align: "left"
	}
}
export const IsClear: Story = {
	args: {
		...RightAligned.args,
		isClear: true
	}
}
export const NoIcon: Story = {
	args: {
		...RightAligned.args,
		icon: undefined
	}
}
