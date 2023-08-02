import type { Meta, StoryObj } from "@storybook/react"
import ButtonDropdown from "."
import { dropdownDataWithIcons } from "../dropdown/dropdownData"
import { DynamicIcon } from "@/stories/atoms/icons"

const meta: Meta<typeof ButtonDropdown> = {
	title: "Design System/Organisms/ButtonDropdown",
	component: ButtonDropdown,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof ButtonDropdown>

export const Primary: Story = {
	args: {
		button: {
			label: "Primary",
			actionType: "primary"
		},
		dropDown: {
			items: dropdownDataWithIcons,
			label: "Dropdown",
			id: "dropdown-primary"
		}
	}
}
export const Secondary: Story = {
	args: {
		button: {
			label: "Secondary",
			actionType: "secondary"
		},
		dropDown: {
			label: "Dropdown",
			id: "dropdown-secondary",
			items: dropdownDataWithIcons
		}
	}
}
export const Alternative: Story = {
	args: {
		button: {
			label: "Alternative",
			actionType: "alternative"
		},
		dropDown: {
			label: "Dropdown",
			id: "dropdown-secondary",
			items: dropdownDataWithIcons
		}
	}
}
