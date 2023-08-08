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
				name: "IconClipboardCopy",
				pos: "leading",
				className: "h-5 w-5",
				outline: false
			},
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
				name: "IconFolderPlus",
				pos: "leading",
				className: "h-5 w-5",
				outline: false
			},
			key: "Add to Batch",
			label: "Add to Batch",
			onClick: () => {
				console.log("Add to Batch action")
			}
		},
		{
			icon: {
				name: "IconEye",
				pos: "leading",
				className: "h-5 w-5",
				outline: false
			},
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
				name: "IconTrash",
				pos: "leading",
				className: "h-5 w-5",
				outline: false
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
