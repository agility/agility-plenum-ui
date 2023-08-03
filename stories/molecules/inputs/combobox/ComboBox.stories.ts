import type { Meta, StoryObj } from "@storybook/react"
import { Combobox } from "./ComboBox"

const meta: Meta<typeof Combobox> = {
	title: "Design System/Molecules/Inputs/Combobox",
	component: Combobox,
	tags: ["autodocs"]
}
type Story = StoryObj<typeof Combobox>
interface ComboItem {
	[value: string]: string
}

const comboboxlist: ComboItem[] = [
	{ value: "Leslie Alexander" },
	{ value: "Alishba Molloy" },
	{ value: "Raya Oconnell" },
	{ value: "Danica Sweet" },
	{ value: "Ralph Brook" },
	{ value: "Tamar Tapia" },
	{ value: "Cara Avila" },
	{ value: "Jayson Cisneros" },
	{ value: "Tracey Reader" },
	{ value: "Rahima Fritz" },
	{ value: "Vera Pritchard" }
]
export const DefaultComboBox: Story = {
	args: {
		label: "",
		items: comboboxlist,
		displayProperty: "value",
		keyProperty: "value",
		placeholder: "Select",
		id: "combobox",
		isRequired: false,
		isError: false,
		isDisabled: false,
		nullable: false
	}
}
export default meta
