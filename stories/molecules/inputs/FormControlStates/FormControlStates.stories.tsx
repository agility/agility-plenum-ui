import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "@/stories/atoms/buttons/Button";
import InputField from "@/stories/molecules/inputs/InputField";
import TextInput from "@/stories/molecules/inputs/TextInput";
import Select from "@/stories/molecules/inputs/select/Select";
import Combobox from "@/stories/molecules/inputs/combobox/ComboBox";
import Checkbox from "@/stories/molecules/inputs/checkbox/Checkbox";
import Radio from "@/stories/molecules/inputs/radio/Radio";
import ToggleSwitch from "@/stories/molecules/inputs/toggleSwitch/ToggleSwitch";
import FormInputWithAddons from "@/stories/organisms/FormInputWithAddons";
import AnimatedLabelInput from "@/stories/organisms/AnimatedLabelInput";
import AnimatedFormInputWithAddons from "@/stories/organisms/AnimatedFormInputWithAddons";
import TextInputSelect from "@/stories/organisms/TextInputSelect/TextInputSelect";
import ButtonDropdown from "@/stories/organisms/ButtonDropdown";
import DropdownWithMultiSelect from "@/stories/organisms/DropdownWithMultiSelect/DropdownWithMultiSelect";

/**
 * Every single-line form control side by side, to check that they share one 36px height and one
 * focus language:
 *  - text inputs, selects and triggers focus with a single 1px violet-700 border (keyboard and mouse);
 *  - buttons, checkboxes, radios and toggles show a 2px purple ring for keyboard focus only.
 */

type State = "default" | "error" | "disabled";

const noop = () => {};
const selectOptions = [
	{ label: "Published", value: "published" },
	{ label: "Staging", value: "staging" }
];
const comboItems = [
	{ id: "1", name: "Blog Posts" },
	{ id: "2", name: "Authors" }
];
const dropdownItems = [[{ key: "dup", label: "Duplicate", onClick: noop }]];

interface ControlDef {
	/** Stable id, used as the Controls value so it survives Storybook's URL args. */
	key: string;
	name: string;
	/** Which focusable element inside the control to focus, when it has several. */
	focusIndex?: number;
	render: (state: State, key: string) => React.ReactNode;
}

const CONTROLS: ControlDef[] = [
	{
		key: "textInput",
		name: "TextInput",
		render: (s, k) => (
			<TextInput
				id={`${k}-ti`}
				type="text"
				value=""
				placeholder="Placeholder"
				handleChange={noop}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "textInputDate",
		name: "TextInput (date)",
		render: (s, k) => (
			<TextInput
				id={`${k}-date`}
				type="date"
				value=""
				handleChange={noop}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "inputField",
		name: "InputField",
		render: (s, k) => (
			<InputField
				id={`${k}-if`}
				type="text"
				value=""
				placeholder="Placeholder"
				handleChange={noop}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "formInputWithAddons",
		name: "FormInputWithAddons",
		render: (s, k) => (
			<FormInputWithAddons
				id={`${k}-fiwa`}
				type="text"
				value=""
				placeholder="Search..."
				handleChange={noop}
				trailIcon={{ icon: "IconSearch" }}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "formInputWithAddonsButtonInput",
		name: "FormInputWithAddons + button (input)",
		render: (s, k) => (
			<FormInputWithAddons
				id={`${k}-fiwab`}
				type="text"
				value=""
				placeholder="Placeholder"
				handleChange={noop}
				addonBTN={{ align: "right", ctaLabel: "Edit", icon: { icon: "IconPencil" }, onClick: noop }}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "formInputWithAddonsButtonButton",
		name: "FormInputWithAddons + button (button)",
		focusIndex: 1,
		render: (s, k) => (
			<FormInputWithAddons
				id={`${k}-fiwab2`}
				type="text"
				value=""
				placeholder="Placeholder"
				handleChange={noop}
				addonBTN={{ align: "right", ctaLabel: "Edit", icon: { icon: "IconPencil" }, onClick: noop }}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "animatedLabelInput",
		name: "AnimatedLabelInput",
		render: (s, k) => (
			<AnimatedLabelInput
				id={`${k}-ali`}
				type="text"
				value=""
				label={{ display: "Label" }}
				handleChange={noop}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "animatedFormInputWithAddons",
		name: "AnimatedFormInputWithAddons",
		render: (s, k) => (
			<AnimatedFormInputWithAddons
				id={`${k}-afiwa`}
				type="text"
				value=""
				label={{ display: "Label" }}
				handleChange={noop}
				addonBTN={{ align: "right", ctaLabel: "Edit", icon: { icon: "IconPencil" }, onClick: noop }}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "textInputSelectInput",
		name: "TextInputSelect (input)",
		render: (s, k) => (
			<TextInputSelect
				id={`${k}-tis`}
				type="text"
				value=""
				placeholder="Placeholder"
				inputOptions={selectOptions}
				onSelectOption={noop}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "textInputSelectSelect",
		name: "TextInputSelect (select)",
		focusIndex: 1,
		render: (s, k) => (
			<TextInputSelect
				id={`${k}-tis2`}
				type="text"
				value=""
				placeholder="Placeholder"
				inputOptions={selectOptions}
				onSelectOption={noop}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "select",
		name: "Select",
		render: (s, k) => (
			<Select
				id={`${k}-sel`}
				options={selectOptions}
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "combobox",
		name: "Combobox",
		render: (s, k) => (
			<Combobox
				id={`${k}-cb`}
				items={comboItems}
				keyProperty="id"
				displayProperty="name"
				placeholder="Search models"
				isError={s === "error"}
				isDisabled={s === "disabled"}
			/>
		)
	},
	{
		key: "dropdownWithMultiSelect",
		name: "DropdownWithMultiSelect",
		render: (s) =>
			s === "default" ? (
				<DropdownWithMultiSelect label="Filter" options={[{ key: "a", label: "Option A", isSelected: false }]} />
			) : null
	},
	{
		key: "button",
		name: "Button",
		render: (s) => (s === "error" ? null : <Button label="Save" disabled={s === "disabled"} />)
	},
	{
		key: "buttonAlternative",
		name: "Button (alternative)",
		render: (s) =>
			s === "error" ? null : <Button label="Cancel" actionType="alternative" disabled={s === "disabled"} />
	},
	{
		key: "buttonDropdownButton",
		name: "ButtonDropdown (button)",
		render: (s) =>
			s === "error" ? null : (
				<ButtonDropdown
					button={{ label: "Save", actionType: "primary", disabled: s === "disabled" }}
					dropDown={{ id: "more", label: "More actions", items: dropdownItems, disabled: s === "disabled" }}
				/>
			)
	},
	{
		key: "buttonDropdownTrigger",
		name: "ButtonDropdown (trigger)",
		focusIndex: 1,
		render: (s) =>
			s === "error" ? null : (
				<ButtonDropdown
					button={{ label: "Save", actionType: "primary", disabled: s === "disabled" }}
					dropDown={{ id: "more", label: "More actions", items: dropdownItems, disabled: s === "disabled" }}
				/>
			)
	},
	{
		key: "checkbox",
		name: "Checkbox",
		render: (s) => <Checkbox label="Checkbox" isError={s === "error"} isDisabled={s === "disabled"} />
	},
	{
		key: "radio",
		name: "Radio",
		render: (s) => <Radio label="Radio" isError={s === "error"} isDisabled={s === "disabled"} />
	},
	{
		key: "toggleSwitch",
		name: "ToggleSwitch",
		render: (s, k) =>
			s === "error" ? null : (
				<ToggleSwitch id={`${k}-tog`} name={`${k}-tog`} isChecked={false} onChange={noop} disabled={s === "disabled"} />
			)
	}
];

const CONTROL_KEYS = CONTROLS.map((c) => c.key);
const CONTROL_LABELS = Object.fromEntries(CONTROLS.map((c) => [c.key, c.name]));

const cellStyle: React.CSSProperties = { width: 300, padding: "8px 12px", verticalAlign: "top" };

const StatesTable = ({ states }: { states: State[] }) => (
	<table className="text-left text-sm">
		<thead>
			<tr>
				<th style={cellStyle} className="font-medium text-gray-500">
					Control
				</th>
				{states.map((s) => (
					<th key={s} style={cellStyle} className="font-medium capitalize text-gray-500">
						{s}
					</th>
				))}
			</tr>
		</thead>
		<tbody>
			{CONTROLS.map((c) => (
				<tr key={c.key} data-control={c.key}>
					<td style={cellStyle} className="text-gray-700">
						{c.name}
					</td>
					{states.map((s) => (
						<td key={s} style={cellStyle} data-state={s}>
							{c.render(s, `${c.key}-${s}`) ?? <span className="text-gray-300">n/a</span>}
						</td>
					))}
				</tr>
			))}
		</tbody>
	</table>
);

/** An input, a Select and default Buttons in one row: every control should share the same 36px top and bottom edge. */
const AlignmentRow = () => (
	<div className="flex items-end gap-2" style={{ maxWidth: 900 }}>
		<div className="flex-1">
			<TextInput id="row-ti" type="text" label="Title" value="Hello world" handleChange={noop} />
		</div>
		<Button label="Save" />
		<div className="flex-1">
			<Select id="row-sel" label="Status" options={selectOptions} value="published" />
		</div>
		<div className="flex-1">
			<FormInputWithAddons
				id="row-fiwa"
				type="text"
				value=""
				placeholder="Linked content"
				handleChange={noop}
				addonBTN={{ align: "right", ctaLabel: "Edit", icon: { icon: "IconPencil" }, onClick: noop }}
			/>
		</div>
		<Button label="Cancel" actionType="alternative" />
	</div>
);

interface FocusArgs {
	control: string;
}

/**
 * Focus the chosen control. `focusVisible` makes the browser treat the focus as keyboard (true) or
 * mouse (false) focus, so :focus-visible styles match what a real Tab or click would show.
 * Supported in Chromium and Firefox; in other browsers, Tab to or click the control instead.
 */
const focusControl = (canvasElement: HTMLElement, key: string, focusVisible: boolean) => {
	const def = CONTROLS.find((c) => c.key === key);
	const row = canvasElement.querySelector(`[data-control="${key}"] [data-state="default"]`);
	const focusables = row?.querySelectorAll<HTMLElement>("input:not([type=hidden]):not([hidden]), select, button");
	const target = focusables?.[def?.focusIndex ?? 0];
	target?.focus({ focusVisible } as FocusOptions);
};

const meta: Meta<FocusArgs> = {
	title: "Design System/molecules/inputs/Form Control States",
	parameters: { layout: "padded" },
	argTypes: {
		control: { control: { type: "select", labels: CONTROL_LABELS }, options: CONTROL_KEYS }
	}
};

export default meta;
type Story = StoryObj<FocusArgs>;

/** Default, error and disabled states for every single-line control. All of them should be 36px tall. */
export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-8">
			<AlignmentRow />
			<StatesTable states={["default", "error", "disabled"]} />
		</div>
	)
};

/** An input next to a default Button in the same row. The edges should line up exactly. */
export const InputNextToButton: Story = {
	render: () => <AlignmentRow />
};

/**
 * Keyboard focus on the control picked in Controls. Text inputs and selects get a 1px violet-700 border;
 * buttons, checkboxes, radios and toggles get a 2px purple ring. You can also press Tab in the canvas.
 */
export const KeyboardFocus: Story = {
	args: { control: "textInput" },
	render: () => <StatesTable states={["default"]} />,
	play: async ({ canvasElement, args }) => focusControl(canvasElement, args.control, true)
};

/**
 * Mouse focus on the control picked in Controls. Text inputs and selects still get the 1px violet-700
 * border; buttons, checkboxes, radios and toggles show no ring. You can also click a control in the canvas.
 */
export const MouseFocus: Story = {
	args: { control: "button" },
	render: () => <StatesTable states={["default"]} />,
	play: async ({ canvasElement, args }) => focusControl(canvasElement, args.control, false)
};
