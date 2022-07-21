import { ItemProp } from '.';

export const dropdownDataBase: ItemProp[][] = [
	[
		{
			icon: "ClipboardCopyIcon",
			label: 'Copy',
			onClick: () => {
				console.log('Copy action');
			}
		}
	],
	[
		{
			icon: "CheckIcon",
			label: 'Add to Batch',
			onClick: () => {
				console.log('Add to Batch action');
			}
		},
		{
			icon: "EyeIcon",
			label: 'View Batch',
			onClick: () => {
				console.log('View Batch action');
			}
		}
	],
	[
		{
			label: 'Delete',
			onClick: () => {
				console.log('Delete action');
			},
			isEmphasized: true
		}
	]
];

export const dropdownDataWithIcons: ItemProp[][] = [
	[
		{

			icon: 'ClipboardCopyIcon',
			label: 'Copy',
			onClick: () => {
				console.log('Copy action');
			}
		}
	],
	[
		{
			icon: 'FolderAddIcon',
			label: 'Add to Batch',
			onClick: () => {
				console.log('Add to Batch action');
			}
		},
		{
			icon: 'EyeIcon',
			label: 'View Batch',
			onClick: () => {
				console.log('View Batch action');
			}
		}
	],
	[
		{
			icon: 'TrashIcon',
			label: 'Delete',
			onClick: () => {
				console.log('Delete action');
			},
			isEmphasized: true
		}
	]
];
