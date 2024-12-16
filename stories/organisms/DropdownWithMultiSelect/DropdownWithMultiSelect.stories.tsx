import type { Meta, StoryObj } from "@storybook/react";
import { DynamicIcon } from "@/stories/atoms/icons";
import DropdownWithMultiSelect from "../DropdownWithMultiSelect/DropdownWithMultiSelect";
import { dropdownDataBase } from "./DropdownItems";

const meta: Meta<typeof DropdownWithMultiSelect> = {
	title: "Design System/Organisms/Dropdown",
	component: DropdownWithMultiSelect,
	tags: ["autodocs"],
	argTypes: {}
};
type Story = StoryObj<typeof DropdownWithMultiSelect>;

const IconElement = () => (
	<DynamicIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" icon={"IconDotsVertical"} />
);
const defaultArgs: Story["args"] = {
	label: "Filters",
	options: dropdownDataBase
};

export const WithMultiSelect: Story = {
	args: {
		...defaultArgs
	}
};

export default meta;
