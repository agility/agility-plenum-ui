import type { Meta, StoryObj } from "@storybook/react"
import InputField from "./InputField"

const meta: Meta<typeof InputField> = {
	title: "Design System/Atoms/Input Field",
	component: InputField,
	tags: ["autodocs"],
	argTypes: {},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Rb5fJ8hD3pwvLnidgCaGgB/Agility-UI?type=design&node-id=114-1861&mode=dev&device-scaling=100%25&page-id=0%3A1"
		}
	}
}

export default meta
type Story = StoryObj<typeof InputField>

export const DefaultInputField: Story = {
	args: {
		id: "input",
		name: "input",
		type: "text",
		placeholder: "Base Input Field",
		defaultValue: "",
		isDisabled: false
	}
}
