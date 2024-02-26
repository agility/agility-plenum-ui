import type { Meta, StoryObj } from "@storybook/react"
import Select from "./Select"

const meta: Meta<typeof Select> = {
	title: "Design System/Molecules/Inputs/Select",
	component: Select,
	tags: ["autodocs"],
	argTypes: {},
	decorators: [
		(Story, context) => {
			if (context.name === "Default Select Dark BG") {
				return (
					<div className="bg-transparent-black-03 rounded p-6">
						<Story />
					</div>
				)
			}
			return <Story />
		}
	]
}

export default meta
type TStory = StoryObj<typeof Select>

export const DefaultSelect: TStory = {
	args: {
		label: "Label",
		id: "select",
		name: "select",
		options: [
			{ label: "Canada", value: "value1" },
			{ label: "USA", value: "value2" }
		],
		isDisabled: false,
		isError: false,
		isRequired: false
	}
}
export const DefaultSelectDarkBG: TStory = {
	args: {
		label: "Label",
		id: "select",
		name: "select",
		options: [
			{ label: "Canada", value: "value1" },
			{ label: "USA", value: "value2" }
		],
		isDisabled: false,
		isError: false,
		isRequired: false
	}
}
