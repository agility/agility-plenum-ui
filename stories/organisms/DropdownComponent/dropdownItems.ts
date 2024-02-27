import { IItemProp } from "./DropdownComponent"

export const dropdownDataBase: IItemProp[][] = [
	[
		{
			icon: { icon: "IconCopy" },
			key: "Copy",
			label: "Copy to Clipboard",
			onClick: () => {
				console.log("Copy action")
			}
		},
		{
			icon: { icon: "IconTrash" },
			label: "Delete",
			onClick: () => {
				console.log("Delete action")
			},
			isEmphasized: true,
			key: "Delete"
		}
	],
	[
		{
			icon: { icon: "IconPlus" },
			key: "Add to Batch",
			label: "Add to Batch",
			onClick: () => {
				console.log("Add to Batch action")
			}
		},
		{
			icon: { icon: "IconEye" },
			key: "View Batch",
			label: "View Batch",
			onClick: () => {
				console.log("View Batch action")
			}
		}
	]
]

export const multipleGroups: IItemProp[][] = [
	[
		{
			icon: { icon: "IconArrowUp" },
			key: "moveUp",
			label: "Move up",
			onClick: () => {
				window.alert("moved up")
			}
		},
		{ icon: { icon: "IconArrowDown" }, key: "moveDown", label: "Moved down", onClick: () => {} }
	],
	[
		{ icon: { icon: "IconCheck" }, key: "publish", label: "Publish", onClick: () => {} },
		{ icon: { icon: "IconEyeOff" }, key: "unpublish", label: "Unpublish", onClick: () => {} }
	],
	[
		{ icon: { icon: "IconEyeCheck" }, key: "reqApproval", label: "Request Approval", onClick: () => {} },
		{ icon: { icon: "IconThumbUp" }, key: "approve", label: "Approve", onClick: () => {} },
		{ icon: { icon: "IconBan" }, key: "decline", label: "Decline", onClick: () => {} }
	],
	[{ icon: { icon: "IconCopy" }, key: "Copy", label: "Copy", onClick: () => {} }],
	[{ icon: { icon: "IconTrash" }, key: "delete", label: "Delete", onClick: () => {} }]
]

export const dropdownDataWithIcons: IItemProp[][] = [
	[
		{
			icon: {
				icon: "IconCopy",
				className: "h-5 w-5",
				outline: false
			},
			iconPosition: "leading",
			key: "Copy",
			label: "Copy Item",
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
