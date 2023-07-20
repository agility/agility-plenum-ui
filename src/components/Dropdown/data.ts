import { ItemProp } from '.';

export const dropdownDataBase: ItemProp[][] = [
	[
		{
			icon: {
				name: "ClipboardCopyIcon",
				pos: "trailing",
				className: "",
				outline: true
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
				pos: "trailing",
				className: "",
				outline: true
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
				pos: "trailing",
				className: "",
				outline: true
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
				pos: "trailing",
				className: "",
				outline: true
			}
		}
	]
]

export const dropdownDataWithIcons: ItemProp[][] = [
	[
		{
			icon: {
				name: "ClipboardCopyIcon",
				pos: "trailing",
				className: "",
				outline: true
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
				pos: "trailing",
				className: "",
				outline: true
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
				pos: "trailing",
				className: "",
				outline: true
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
				pos: "trailing",
				className: "",
				outline: true
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
