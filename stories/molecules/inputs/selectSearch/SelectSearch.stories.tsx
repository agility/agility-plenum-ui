import type { Meta, StoryObj } from "@storybook/react";
import SelectSearch from "./SelectSearch";

const meta: Meta<typeof SelectSearch> = {
	title: "Design System/Molecules/Inputs/SelectSearch",
	component: SelectSearch,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen"
	},
	argTypes: {},
	decorators: [
		(Story, context) => {
			return (
				<div style={{ minHeight: "400px", overflow: "visible", padding: "2rem" }}>
					<Story />
				</div>
			);
		}
	]
};

export default meta;
type TStory = StoryObj<typeof SelectSearch>;

const sampleOptions = [
	{ label: "Canada", value: "CA" },
	{ label: "USA", value: "US" },
	{ label: "United Kingdom", value: "GB" },
	{ label: "France", value: "FR" },
	{ label: "Germany", value: "DE" }
];

export const DefaultSearchableSelect: TStory = {
	args: {
		label: "Locale Region",
		options: sampleOptions,
		placeholder: "Select a country...",
		isRequired: true,
		message: "Please select a country"
	}
};

export const SearchableSelectDarkBG: TStory = {
	args: {
		label: "Locale Region",
		options: sampleOptions,
		placeholder: "Select a country...",
		isRequired: true,
		message: "Please select a country"
	}
};
