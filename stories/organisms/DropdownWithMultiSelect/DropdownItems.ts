import { MultiSelectItemProps } from "./DropdownWithMultiSelect";

export const dropdownDataBase: MultiSelectItemProps[] = [
	{
		key: "Copy",
		label: "Copy to Clipboard with some extra long text to show truncation",
		onClick: () => {
			console.log("Copy action");
		},
		isSelected: false
	},
	{
		label: "Delete",
		onClick: () => {
			console.log("Delete action");
		},
		key: "Delete",
		isSelected: true
	},
	{
		key: "Add to Batch",
		label: "Add to Batch",
		onClick: () => {
			console.log("Add to Batch action");
		},
		isSelected: false
	}
];
