import type { Meta, StoryObj } from "@storybook/react"
import TextInput, { ITextInputProps } from "./TextInput"

const meta: Meta<typeof TextInput> = {
	title: "Design System/molecules/inputs/TextInput",
	component: TextInput,
	tags: ["autodocs"],
	argTypes: {}
}

export default meta
type Story = StoryObj<typeof TextInput>
export const DefaultTextInputStory: Story = {
	args: {
		type: "text",
		label: "Label",
		isFocused: true,
		isError: false,
		id: "id",
		name: "name",
		isRequired: true,
		defaultValue: "defaultValue",
		isDisabled: false,
		isReadonly: false,
		message: "message",
		isShowCounter: true,
		maxLength: 100,
		onChange: () => {},
		placeholder: "placeholder",
		value: "value"
	} as ITextInputProps
}
