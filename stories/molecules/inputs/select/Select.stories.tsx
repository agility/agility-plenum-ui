import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
	title: "Design System/Molecules/Inputs/Select",
	component: Select,
	tags: ["autodocs"],
	argTypes: {},
	decorators: [
		(Story, context) => {
			if (context.name === "Default Select Dark BG") {
				return (
					<div className="bg-transparent-black-03 rounded p-6 w-60">
						<Story />
					</div>
				);
			}
			return (
				<div className="w-64">
					<Story />
				</div>
			);
		}
	]
};

export default meta;
type TStory = StoryObj<typeof Select>;

const manyCountries = [
	{
		label: "Australia",
		value: "au",
		description: "A country and continent"
	},
	{ label: "Brazil", value: "br" },
	{ label: "Canada", value: "ca" },
	{ label: "China", value: "cn" },
	{ label: "Denmark", value: "dk" },
	{ label: "Egypt", value: "eg" },
	{ label: "France", value: "fr" },
	{ label: "Germany", value: "de" },
	{ label: "India", value: "in" },
	{ label: "Italy", value: "it" },
	{ label: "Japan", value: "jp" },
	{ label: "Mexico", value: "mx" },
	{ label: "Netherlands", value: "nl" },
	{ label: "New Zealand", value: "nz" },
	{ label: "Norway", value: "no" },
	{ label: "Portugal", value: "pt" },
	{ label: "South Korea", value: "kr" },
	{ label: "Spain", value: "es" },
	{ label: "Sweden", value: "se" },
	{ label: "United Kingdom", value: "gb" },
	{ label: "United States", value: "us" }
];

export const DefaultSelect: TStory = {
	args: {
		label: "Label",
		id: "select",
		name: "select",
		options: [
			{
				label: "All",
				value: ""
			},
			{
				label: "Canadian French blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
				value: "fr-ca"
			}
		],
		isDisabled: false,
		isError: false,
		isRequired: false,
		message: "Message"
	}
};

export const ManyOptions: TStory = {
	args: {
		label: "Country",
		id: "select-many",
		name: "select-many",
		options: manyCountries,
		isDisabled: false,
		isError: false,
		isRequired: false,
		message: "Scroll to see all options"
	}
};

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
		isRequired: false,
		message: "Message"
	}
};
