import { ItemProp } from '.';

export const dropdownDataBase: ItemProp[][] = [
	[
		{
			icon: {
				name: "ClipboardCopyIcon",
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
				name: "CheckIcon",
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
				name: "EyeIcon",
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
			label: "Delete",
			onClick: () => {
				console.log("Delete action")
			},
			isEmphasized: true,
			key: "Delete",
			icon: {
				name: "TrashIcon",
				pos: "leading",
				className: "h-5 w-5",
				outline: false
			}
		}
	]
]

export const dropdownDataWithIcons: ItemProp[][] = [
	[
		{
			icon: {
				name: "ClipboardCopyIcon",
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
				name: "FolderAddIcon",
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
				name: "EyeIcon",
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
				name: "TrashIcon",
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
