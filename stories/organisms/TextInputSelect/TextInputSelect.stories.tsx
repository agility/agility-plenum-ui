import type { Meta, StoryObj } from "@storybook/react"
import TextInputSelect from "."

const meta: Meta<typeof TextInputSelect> = {
	title: "Design System/organisms/TextInputSelect",
	component: TextInputSelect,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof TextInputSelect>
export const DefaultTextInputSelectStory: Story = {
	args: {
		isFocused: false,
		isError: false,
		id: "input",
		name: "input",
		defaultValue: "",
		isRequired: false,
		isDisabled: false,
		isShowCounter: false,
		label: "Currency",
		placeholder: "420.69",
		type: "currency",
		inputOptions: [
			{ label: "USD", value: "USD" },
			{ label: "CAD", value: "CAD" },
			{ label: "EUR", value: "EUR" }
		],
		prefix: "$"
	}
}
