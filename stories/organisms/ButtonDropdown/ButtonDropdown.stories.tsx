import type { Meta, StoryObj } from "@storybook/react"
import ButtonDropdown from "."
import { IItemProp } from "../DropdownComponent"

const meta: Meta<typeof ButtonDropdown> = {
	title: "Design System/Organisms/Button Dropdown",
	component: ButtonDropdown,
	tags: ["autodocs"],
	argTypes: {}
}
const dropdownDataWithIcons: IItemProp[][] = [
	[
		{
			icon: {
				icon: "IconCopy"

				// className: "h-5 w-5",
				// outline: false
			},
			iconPosition: "leading",
			key: "Copy",
			label: "Copy The Thing",
			onClick: () => {}
		}
	],
	[
		{
			icon: {
				icon: "IconFolderPlus"
				// name: "IconFolderPlus",
				// className: "h-5 w-5",
				// outline: false
			},
			key: "Add to Batch",
			label: "Add to Batch",
			onClick: () => {
				console.log("Add to Batch action")
			}
		},
		{
			icon: {
				icon: "IconEye",
				//pos: "leading",
				className: "h-5 w-5",
				outline: false
			},
			iconPosition: "leading",
			key: "View Batch",
			label: "View Batch",
			onClick: () => {
				console.log("View Batch action")
			}
		}
	],
	[
		{
			icon: {
				icon: "IconTrash"

				// pos: "leading",
				// className: "h-5 w-5",
				// outline: false
			},
			key: "Delete",
			label: "Delete",
			onClick: () => {
				console.log("Delete action")
			},
			isEmphasized: true
		}
	]
]

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
		},
		placement: "bottom-end"
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
		},
		placement: "bottom-end"
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
		},
		placement: "bottom-end"
	}
}
