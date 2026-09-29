import React from "react";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "@/stories/atoms/buttons/Button";
import Capsule from "@/stories/atoms/buttons/Capsule";
import InputField from "@/stories/molecules/inputs/InputField";
import TextInput from "@/stories/molecules/inputs/TextInput";
import NestedInputButton from "@/stories/molecules/inputs/NestedInputButton";
import Combobox from "@/stories/molecules/inputs/combobox/ComboBox";
import Select from "@/stories/molecules/inputs/select/Select";
import Checkbox from "@/stories/molecules/inputs/checkbox/Checkbox";
import Radio from "@/stories/molecules/inputs/radio/Radio";
import ToggleSwitch from "@/stories/molecules/inputs/toggleSwitch/ToggleSwitch";
import FormInputWithAddons from "@/stories/organisms/FormInputWithAddons";
import AnimatedFormInputWithAddons from "@/stories/organisms/AnimatedFormInputWithAddons";
import AnimatedLabelInput from "@/stories/organisms/AnimatedLabelInput";
import TextInputSelect from "@/stories/organisms/TextInputSelect/TextInputSelect";
import ButtonDropdown from "@/stories/organisms/ButtonDropdown";
import DropdownWithMultiSelect from "@/stories/organisms/DropdownWithMultiSelect/DropdownWithMultiSelect";

/**
 * Cross-component guard for the form-control consistency rules:
 *  - every single-line input-like control is a fixed 36px (h-9), matching the default Button;
 *  - text-like inputs and select triggers focus with a single 1px violet-700 border and no ring;
 *  - buttons and other non-text controls show a 1px focus ring for keyboard focus (focus-visible) only;
 *    filled buttons add a 1px white offset so the ring stays visible against the fill.
 */

const noop = vi.fn();
const selectOptions = [
	{ label: "One", value: "1" },
	{ label: "Two", value: "2" }
];

/** A ring (or ring offset) with a width, applied on mouse focus, press or focus-within. */
const NON_KEYBOARD_RING = /^(focus|focus-within|active):!?ring-(offset-)?([1-9]|\[)/;

const classesOf = (container: HTMLElement) =>
	Array.from(container.querySelectorAll<HTMLElement>("[class]")).flatMap((el) =>
		(el.getAttribute("class") ?? "").split(/\s+/).filter(Boolean)
	);

beforeAll(() => {
	class ResizeObserver {
		observe() {}
		unobserve() {}
		disconnect() {}
	}
	vi.stubGlobal("ResizeObserver", ResizeObserver);
});

describe("single-line controls are 36px (h-9)", () => {
	it("InputField and TextInput (including date inputs)", () => {
		render(
			<>
				<InputField type="text" value="" handleChange={noop} placeholder="field" />
				<TextInput type="text" value="" handleChange={noop} placeholder="text" />
				<TextInput type="date" value="" handleChange={noop} id="date" label="Date" />
			</>
		);
		expect(screen.getByPlaceholderText("field")).toHaveClass("h-9", "py-0");
		expect(screen.getByPlaceholderText("text")).toHaveClass("h-9", "py-0");
		expect(screen.getByPlaceholderText("text")).not.toHaveClass("py-2");
		expect(document.getElementById("date")).toHaveClass("h-9");
	});

	it("FormInputWithAddons, its nested button, and the animated-label inputs", () => {
		render(
			<>
				<FormInputWithAddons
					id="addons"
					type="text"
					value=""
					handleChange={noop}
					addonBTN={{ align: "right", ctaLabel: "Edit", onClick: noop }}
				/>
				<AnimatedFormInputWithAddons
					id="animated-addons"
					type="text"
					value=""
					handleChange={noop}
					label={{ display: "Animated addons" }}
					addonBTN={{ align: "right", ctaLabel: "Add", onClick: noop }}
				/>
				<AnimatedLabelInput id="animated" type="text" value="" handleChange={noop} label={{ display: "Animated" }} />
			</>
		);
		expect(document.getElementById("addons")).toHaveClass("h-9");
		expect(document.getElementById("animated-addons")).toHaveClass("h-9");
		expect(document.getElementById("animated")).toHaveClass("h-9");
		expect(screen.getByRole("button", { name: "Edit" })).toHaveClass("h-9", "py-0");
		expect(screen.getByRole("button", { name: "Add" })).toHaveClass("h-9", "py-0");
	});

	it("TextInputSelect's input and native select", () => {
		render(<TextInputSelect type="text" id="tis" value="" inputOptions={selectOptions} />);
		expect(document.getElementById("tis")).toHaveClass("h-9");
		expect(document.getElementById("tis")).not.toHaveClass("py-2");
		expect(screen.getByRole("combobox")).toHaveClass("h-9", "py-0");
	});

	it("Select: the bordered wrapper is h-9 and the input fills it", () => {
		render(<Select id="sel" options={selectOptions} />);
		const input = screen.getByRole("combobox");
		expect(input).toHaveClass("h-full", "py-0");
		expect(input.parentElement).toHaveClass("h-9", "border");
	});

	it("Combobox", () => {
		render(<Combobox id="cb" items={[{ id: "1", name: "One" }]} keyProperty="id" displayProperty="name" />);
		expect(screen.getByRole("combobox")).toHaveClass("h-9", "py-0");
	});

	it("DropdownWithMultiSelect trigger", () => {
		render(<DropdownWithMultiSelect label="Filters" options={[{ key: "a", label: "A", isSelected: false }]} />);
		expect(screen.getByRole("button", { name: /Filters/ })).toHaveClass("h-9", "py-0");
	});
});

describe("text-like inputs and select triggers focus with a single 1px violet border", () => {
	it.each([
		["InputField", () => <InputField type="text" value="" handleChange={noop} />],
		["TextInput", () => <TextInput type="text" value="" handleChange={noop} />],
		["Combobox", () => <Combobox id="cb" items={[]} keyProperty="id" displayProperty="name" />],
		["TextInputSelect", () => <TextInputSelect type="text" value="" />]
	])("%s input: violet border, ring forced to 0", (_, renderControl) => {
		const { container } = render(renderControl());
		const input = container.querySelector("input");
		expect(input).toHaveClass("focus:!ring-0", "focus:outline-none", "focus:!border-violet-700");
	});

	it("TextInputSelect's native select: violet border, ring forced to 0", () => {
		render(<TextInputSelect type="text" value="" inputOptions={selectOptions} />);
		expect(screen.getByRole("combobox")).toHaveClass("focus:!ring-0", "focus:outline-none", "focus:!border-violet-700");
	});

	it("Select wrapper: focus-within violet border, no ring", () => {
		render(<Select id="sel" options={selectOptions} />);
		const input = screen.getByRole("combobox");
		expect(input).toHaveClass("focus:!ring-0");
		expect(input.parentElement).toHaveClass("focus-within:border-violet-700", "focus-within:ring-0");
		expect(input.parentElement).not.toHaveClass("focus-within:ring-1");
	});

	it.each([
		["TextInput", () => <TextInput type="text" value="" handleChange={noop} isError />],
		["Combobox", () => <Combobox id="cb" items={[]} keyProperty="id" displayProperty="name" isError />],
		["TextInputSelect", () => <TextInputSelect type="text" value="" isError />]
	])("%s in error keeps its red border on focus", (_, renderControl) => {
		const { container } = render(renderControl());
		const input = container.querySelector("input");
		expect(input).not.toHaveClass("focus:!border-violet-700");
	});

	it("TextInput in error marks the input aria-invalid", () => {
		render(<TextInput type="text" value="" handleChange={noop} isError />);
		expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
	});

	it("Select in error keeps its red border on focus", () => {
		render(<Select id="sel" options={selectOptions} isError />);
		const wrapper = screen.getByRole("combobox").parentElement;
		expect(wrapper).toHaveClass("border-red-500");
		expect(wrapper).not.toHaveClass("focus-within:border-violet-700");
	});

	it("NestedInputButton and the multi-select trigger use the violet border for keyboard focus", () => {
		render(
			<>
				<NestedInputButton align="right" ctaLabel="Edit" />
				<DropdownWithMultiSelect label="Filters" options={[]} />
			</>
		);
		expect(screen.getByRole("button", { name: "Edit" })).toHaveClass("focus-visible:!border-violet-700");
		expect(screen.getByRole("button", { name: /Filters/ })).toHaveClass("focus-visible:border-violet-700");
	});
});

describe("buttons and toggles ring on keyboard focus only", () => {
	it.each(["primary", "secondary", "alternative", "danger", "danger-secondary", "warning"] as const)(
		"Button (%s) keeps a focus-visible ring and no mouse-focus ring",
		(actionType) => {
			render(<Button label="Save" actionType={actionType} />);
			const button = screen.getByRole("button");
			expect(button).toHaveClass("focus-visible:ring-1", "focus-visible:ring-purple-600");
			expect(button.className.split(/\s+/).filter((c) => NON_KEYBOARD_RING.test(c))).toEqual([]);
		}
	);

	it.each(["primary", "danger", "warning"] as const)(
		"filled Button (%s) separates its 1px ring from the fill with a 1px white offset",
		(actionType) => {
			render(<Button label="Save" actionType={actionType} />);
			expect(screen.getByRole("button")).toHaveClass(
				"focus-visible:ring-1",
				"focus-visible:ring-offset-1",
				"focus-visible:ring-offset-white"
			);
		}
	);

	it.each(["secondary", "alternative", "danger-secondary"] as const)(
		"outlined Button (%s) sits its ring on the edge with no offset",
		(actionType) => {
			render(<Button label="Save" actionType={actionType} />);
			expect(screen.getByRole("button").className).not.toMatch(/ring-offset/);
		}
	);

	it("primary ButtonDropdown trigger uses the same 1px white offset", () => {
		render(
			<ButtonDropdown
				button={{ label: "Save", actionType: "primary" }}
				dropDown={{ id: "more3", label: "More", items: [[{ key: "a", label: "A", onClick: noop }]] }}
			/>
		);
		const [, trigger] = screen.getAllByRole("button");
		expect(trigger).toHaveClass("focus-visible:ring-1", "focus-visible:ring-offset-1", "focus-visible:ring-offset-white");
	});

	it.each(["primary", "danger", "warning"] as const)("Button asLink (%s) has no mouse-focus ring", (actionType) => {
		render(<Button label="Go" actionType={actionType} asLink={{ href: "#", target: "_self" }} />);
		const link = screen.getByRole("link");
		expect(link).toHaveClass("focus-visible:ring-1");
		expect(link.className.split(/\s+/).filter((c) => NON_KEYBOARD_RING.test(c))).toEqual([]);
		expect(link.className).not.toContain("<");
	});

	it("ButtonDropdown: both halves ring on focus-visible only", () => {
		render(
			<ButtonDropdown
				button={{ label: "Save", actionType: "primary" }}
				dropDown={{ id: "more", label: "More", items: [[{ key: "a", label: "A", onClick: noop }]] }}
			/>
		);
		const [main, trigger] = screen.getAllByRole("button");
		for (const half of [main, trigger]) {
			expect(half).toHaveClass("focus-visible:ring-1", "focus-visible:ring-purple-600");
			expect(half.className.split(/\s+/).filter((c) => NON_KEYBOARD_RING.test(c))).toEqual([]);
		}
	});

	it("Checkbox and Radio zero the forms ring on :focus and ring on focus-visible", () => {
		render(
			<>
				<Checkbox label="Check" />
				<Radio label="Pick" />
			</>
		);
		for (const control of [screen.getByRole("checkbox"), screen.getByRole("radio")]) {
			expect(control).toHaveClass("focus:!ring-0", "focus:!ring-offset-0", "focus-visible:!ring-1");
		}
	});
});

/** Any focus ring, or ring offset, wider than 1px. */
const THICK_RING = /(^|:)!?ring-([2-9]|\[)|(^|:)!?ring-offset-([2-9]|\[)/;

it("focus rings and ring offsets are at most 1px", () => {
	const { container } = render(
		<>
			<Button label="Save" />
			<Button label="Go" asLink={{ href: "#", target: "_self" }} />
			<Capsule label="Capsule" actionType="primary" />
			<Checkbox label="Check" />
			<Radio label="Pick" />
			<ToggleSwitch id="t2" name="t2" isChecked={false} onChange={noop} />
			<ButtonDropdown
				button={{ label: "Save", actionType: "primary" }}
				dropDown={{ id: "more2", label: "More", items: [[{ key: "a", label: "A", onClick: noop }]] }}
			/>
		</>
	);
	expect(classesOf(container).filter((c) => THICK_RING.test(c))).toEqual([]);
});

it("no form control applies a ring width on mouse focus, press or focus-within", () => {
	const { container } = render(
		<>
			<Button label="Save" />
			<Capsule label="Capsule" actionType="primary" />
			<InputField type="text" value="" handleChange={noop} isError />
			<TextInput type="text" value="" handleChange={noop} isError />
			<TextInput type="text" value="" handleChange={noop} isDisabled />
			<NestedInputButton align="left" ctaLabel="Edit" isClear />
			<Combobox id="cb" items={[]} keyProperty="id" displayProperty="name" />
			<Select options={selectOptions} />
			<Checkbox label="Check" />
			<Radio label="Pick" />
			<ToggleSwitch id="t" name="t" isChecked={false} onChange={noop} />
			<FormInputWithAddons id="f" type="text" value="" handleChange={noop} />
			<TextInputSelect type="text" value="" inputOptions={selectOptions} selectLocation="left" />
			<ButtonDropdown
				button={{ label: "Save", actionType: "secondary" }}
				dropDown={{ id: "more", label: "More", items: [[{ key: "a", label: "A", onClick: noop }]] }}
			/>
			<DropdownWithMultiSelect label="Filters" options={[]} />
		</>
	);
	expect(classesOf(container).filter((c) => NON_KEYBOARD_RING.test(c))).toEqual([]);
});
