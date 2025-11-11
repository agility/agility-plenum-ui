import type { Meta, StoryObj } from "@storybook/react";
import SelectSearch from "./SelectSearch";

const meta: Meta<typeof SelectSearch> = {
	title: "Design System/Molecules/Inputs/SelectSearch",
	component: SelectSearch,
	tags: ["autodocs"],
	argTypes: {},
	decorators: [
		(Story, context) => {
			if (context.name === "SelectSearch Dark BG") {
				return (
					<div className="bg-transparent-black-03 rounded p-6">
						<Story />
					</div>
				);
			}
			return <Story />;
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
		placeholder: "Select a country..."
	}
};

export const SearchableSelectDarkBG: TStory = {
	args: {
		label: "Locale Region",
		options: sampleOptions,
		placeholder: "Select a country..."
	}
};
