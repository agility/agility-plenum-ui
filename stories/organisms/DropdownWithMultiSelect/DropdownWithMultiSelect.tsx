import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Checkbox from "@/stories/molecules/inputs/checkbox/Checkbox";
import { DynamicIcon } from "@/stories/atoms/icons";
import { default as cn } from "classnames";

export interface MultiSelectItemProps {
	label: string;
	onClick?(): void;
	key: React.Key;
	isSelected: boolean;
}

interface Props {
	label: string;
	options: MultiSelectItemProps[];
}

const DropdownWithMultiSelect = ({ label, options }: Props) => {
	return (
		<Popover className="group">
			<PopoverButton className="flex justify-between gap-4 text-sm py-2 px-4 rounded-[3px] border border-gray-300 bg-white">
				{label}
				<DynamicIcon
					icon="IconChevronDown"
					className="ml-1 h-5 w-5 text-gray-400 stroke-1 group-data-[open]:rotate-180"
				/>
			</PopoverButton>
			<PopoverPanel
				transition
				anchor={{
					to: "bottom end",
					gap: 8
				}}
				className="bg-white !max-h-[240px] w-[200px] rounded-[3px] border border-gray-300 shadow-lg z-40"
			>
				{options.map((option) => {
					const inputWrapperStyles = cn("py-[8px] px-3 text-gray-500 hover:bg-[rgba(0,0,0,0.03)]", {
						"text-gray-700": option.isSelected
					});
					return (
						<div className={inputWrapperStyles} key={option.key}>
							<Checkbox
								key={option.key}
								label={option.label}
								isChecked={option.isSelected}
								onChange={option.onClick}
								className="!min-h-0"
								truncateLabel
							/>
						</div>
					);
				})}
			</PopoverPanel>
		</Popover>
	);
};

export default DropdownWithMultiSelect;
