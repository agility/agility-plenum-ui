import type { Meta, StoryObj } from "@storybook/react"

import { DynamicIcon } from "@/stories/atoms/icons"
import { dropdownDataBase, dropdownDataWithIcons } from "./dropdownData"
import Dropdown, { defaultClassNames } from "./Dropdown"

const meta: Meta<typeof Dropdown> = {
	title: "Design System/Organisms/Dropdown",
	component: Dropdown,
	tags: ["autodocs"],
	argTypes: {}
}
type Story = StoryObj<typeof Dropdown>

const IconElement = () => (
	<DynamicIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" icon={"DotsVerticalIcon"} />
)
const defaultArgs: Story["args"] = {
	items: [...dropdownDataBase],
	label: "Dropdown",
	classNames: defaultClassNames
}
export const WithLabel: Story = {
	args: {
		...defaultArgs
	}
}

export const CustomTrigger: Story = {
	args: {
		...defaultArgs,
		CustomDropdownTrigger: <IconElement />
	}
}
export const WithLabelAndIcons: Story = {
	args: {
		...defaultArgs,
		items: [...dropdownDataWithIcons]
	}
}
export const WithIcons: Story = {
	args: {
		...defaultArgs,
		items: [...dropdownDataWithIcons],
		CustomDropdownTrigger: <IconElement />
	}
}
export default meta
