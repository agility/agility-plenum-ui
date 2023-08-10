import { IItemProp } from "./DropdownComponent"

export const dropdownDataBase: IItemProp[][] = [
	[
		{
			key: "Copy",
			label: "Copy",
			onClick: () => {
				console.log("Copy action")
			}
		}
	],
	[
		{
			key: "Add to Batch",
			label: "Add to Batch",
			onClick: () => {
				console.log("Add to Batch action")
			}
		},
		{
			key: "View Batch",
			label: "View Batch",
			onClick: () => {
				console.log("View Batch action")
			}
		}
	],
	[
		{
			label: "Delete",
			onClick: () => {
				console.log("Delete action")
			},
			isEmphasized: true,
			key: "Delete"
		}
	]
]

export const dropdownDataWithIcons: IItemProp[][] = [
	[
		{
			icon: {
				icon: "IconClipboardCopy",
				className: "h-5 w-5",
				outline: false
			},
			iconPosition: "leading",
			key: "Copy",
			label: "Copy",
			onClick: () => {
				console.log("Copy action")
			}
		}
	],
	[
		{
			icon: {
				icon: "IconFolderPlus",
				className: "h-5 w-5",
				outline: false
			},
			iconPosition: "leading",
			key: "Add to Batch",
			label: "Add to Batch",
			onClick: () => {
				console.log("Add to Batch action")
			}
		},
		{
			icon: {
				icon: "IconEye",
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
				icon: "IconTrash",
				className: "h-5 w-5",
				outline: false
			},
			iconPosition: "leading",
			key: "Delete",
			label: "Delete",
			onClick: () => {
				console.log("Delete action")
			},
			isEmphasized: true
		}
	]
]
