import { vi } from "vitest";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import DropdownWithMultiSelect from "../DropdownWithMultiSelect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Checkbox from "@/stories/molecules/inputs/checkbox/Checkbox";
import { DynamicIcon } from "@/stories/atoms/icons";

const defaultProps = {
	label: "Filters",
	options: [
		{
			label: "Option 1",
			key: "1",
			isSelected: false,
			onClick: vi.fn()
		},
		{
			label: "Option 2",
			key: "2",
			isSelected: false,
			onClick: vi.fn()
		},
		{
			label: "Option 3",
			key: "3",
			isSelected: false,
			onClick: vi.fn()
		}
	]
};

describe("DropdownWithMultiSelect", () => {
	beforeAll(() => {
		class ResizeObserver {
			observe() {}
			unobserve() {}
			disconnect() {}
		}
		vi.stubGlobal("ResizeObserver", ResizeObserver);
	});

	it("renders a button", () => {
		const { container } = render(<DropdownWithMultiSelect {...defaultProps} />);
		const button = screen.getByRole("button", { name: /Filters/i });
		expect(button).toBeInTheDocument();
		const icon = container.querySelector("svg");
		expect(icon).toBeInTheDocument();
	});

	it("opens the popover and shows options", async () => {
		render(<DropdownWithMultiSelect {...defaultProps} />);
		const button = screen.getByRole("button", { name: /Filters/i });
		fireEvent.click(button);
		const checkboxes = screen.getAllByRole("checkbox");
		expect(checkboxes).toHaveLength(3);
	});

	it("calls the onClick for an option", async () => {
		const optionSpy = vi.fn();
		render(
			<DropdownWithMultiSelect {...defaultProps} options={[{ ...defaultProps.options[0], onClick: optionSpy }]} />
		);
		const button = screen.getByRole("button", { name: /Filters/i });
		fireEvent.click(button);
		const checkbox = screen.getByRole("checkbox", { name: /Option 1/i });
		fireEvent.click(checkbox);
		await waitFor(() => expect(optionSpy).toHaveBeenCalled());
	});
});
