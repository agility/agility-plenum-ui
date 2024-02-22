import type { Meta, StoryObj } from "@storybook/react"

import { DynamicIcon } from "@/stories/atoms/icons"
import { dropdownDataBase, dropdownDataWithIcons } from "./dropdownItems"
import Dropdown, { defaultClassNames } from "./DropdownComponent"

const meta: Meta<typeof Dropdown> = {
	title: "Design System/Organisms/Dropdown",
	component: Dropdown,
	tags: ["autodocs"],
	argTypes: {}
}
type Story = StoryObj<typeof Dropdown>

const IconElement = () => (
	<DynamicIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" icon={"IconDotsVertical"} />
)
const defaultArgs: Story["args"] = {
	items: [...dropdownDataBase],
	label: "Dropdown",

	placement: "bottom-end"
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
export const WithCustomItemLabelsAndIcons: Story = {
	args: {
		...defaultArgs,
		items: [
			...dropdownDataWithIcons,
			[
				{
					icon: { icon: "Icon123" },
					label: (
						<div className="flex items-baseline gap-x-2">
							sdfsdf{" "}
							<div className="flex space-x-1">
								<div className="h-1 w-1 animate-[bounce_1s_infinite] rounded-full bg-gray-500"></div>
								<div className="h-1 w-1 animate-[bounce_1s_infinite_0.2s] rounded-full bg-gray-500"></div>
								<div className="h-1 w-1 animate-[bounce_1s_infinite_0.4s] rounded-full bg-gray-500"></div>
							</div>
						</div>
					),
					key: "sdfsdf"
				}
			]
		]
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
