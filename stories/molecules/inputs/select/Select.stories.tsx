import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Select from "./Select";

const meta: Meta<typeof Select> = {
	title: "Design System/Molecules/Inputs/Select",
	component: Select,
	tags: ["autodocs"],
	argTypes: {},
	parameters: {
		docs: {
			description: {
				component:
					"A single-value select built on Headless UI `Combobox` with a read-only display input. " +
					"The options open only on an explicit user action: a pointer click anywhere on the field " +
					"(input or chevron), or Enter / Space / ArrowDown / ArrowUp / Alt+ArrowDown while the input " +
					"is focused. They do **not** open when focus arrives via Tab / Shift+Tab or via " +
					"`element.focus()` from code, matching a native `<select>`."
			}
		}
	},
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
	parameters: {
		docs: {
			description: {
				story:
					"Click the field or press Enter / Space / ArrowDown / ArrowUp with the input focused to open. " +
					"Tabbing into the field only focuses it."
			}
		}
	},
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

export const WithLabelAction: TStory = {
	args: {
		label: "Batch",
		id: "select-label-action",
		name: "select-label-action",
		isRequired: true,
		options: [
			{ label: "Batch 1", value: "batch-1" },
			{ label: "Batch 2", value: "batch-2" },
			{ label: "Batch 3", value: "batch-3" }
		],
		labelAction: {
			label: "Add new batch",
			onClick: action("labelAction clicked")
		}
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

const fewCountries = manyCountries.slice(0, 6);

/**
 * Several Selects in a row so Tab / Shift+Tab behaviour can be checked by hand:
 * moving focus through the fields must not open any of the dropdowns.
 */
export const MultipleInARow: TStory = {
	name: "Multiple In A Row (Tab Order)",
	parameters: {
		docs: {
			description: {
				story:
					"Click into the text input, then press Tab repeatedly. Focus should move through each Select " +
					"(ring shown) without opening its options. Press Enter, Space or ArrowDown on a focused Select " +
					"to open it."
			}
		}
	},
	args: {
		options: fewCountries,
		isDisabled: false,
		isError: false,
		isRequired: false
	},
	render: (args) => (
		<div className="flex flex-col gap-4">
			<label className="flex flex-col gap-1 text-sm text-gray-700">
				Text input (start here)
				<input
					type="text"
					className="rounded border border-gray-300 px-3 py-2 text-sm"
					placeholder="Focus me, then press Tab"
				/>
			</label>
			<Select {...args} id="tab-order-1" name="tab-order-1" label="First" />
			<Select {...args} id="tab-order-2" name="tab-order-2" label="Second" value="ca" />
			<Select {...args} id="tab-order-3" name="tab-order-3" label="Third" />
			<button type="button" className="self-start rounded border border-gray-300 px-3 py-2 text-sm">
				Button after
			</button>
		</div>
	)
};
