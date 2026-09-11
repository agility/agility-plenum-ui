import { vi } from "vitest";
import Select from "../Select";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";

const options = [
	{ label: "Canada", value: "ca" },
	{ label: "United States", value: "us" },
	{ label: "Mexico", value: "mx" }
];

const defaultProps = {
	label: "Country",
	id: "country",
	options
};

const getInput = () => screen.getByRole("combobox") as HTMLInputElement;

/** Emulates a real pointer click (Headless UI listens for mousedown, not click). */
const pointerClick = (el: Element) => {
	fireEvent.mouseDown(el, { button: 0 });
	fireEvent.mouseUp(el, { button: 0 });
	fireEvent.click(el, { button: 0 });
};

const expectClosed = () => {
	expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
	expect(screen.queryAllByRole("option")).toHaveLength(0);
	expect(getInput()).toHaveAttribute("aria-expanded", "false");
};

const expectOpen = async () => {
	await waitFor(() => expect(screen.getAllByRole("option")).toHaveLength(options.length));
	expect(getInput()).toHaveAttribute("aria-expanded", "true");
};

describe("<Select>", () => {
	beforeAll(() => {
		class ResizeObserver {
			observe() {}
			unobserve() {}
			disconnect() {}
		}
		vi.stubGlobal("ResizeObserver", ResizeObserver);
	});

	it("renders a read-only combobox input showing the selected option's label", () => {
		render(<Select {...defaultProps} value="us" />);
		const input = getInput();
		expect(input).toHaveAttribute("readonly");
		expect(input).toHaveValue("United States");
		expectClosed();
	});

	describe("focus does not open the options", () => {
		it("stays closed when focus arrives via Tab", () => {
			render(
				<>
					<button type="button">Before</button>
					<Select {...defaultProps} />
				</>
			);
			const before = screen.getByRole("button", { name: "Before" });
			const input = getInput();

			act(() => before.focus());
			fireEvent.keyDown(before, { key: "Tab" });
			// jsdom does not move focus on Tab; emulate the browser landing on the input.
			act(() => input.focus());

			expect(input).toHaveFocus();
			expectClosed();
		});

		it("stays closed when focused programmatically via element.focus()", () => {
			render(<Select {...defaultProps} />);
			const input = getInput();

			act(() => input.focus());

			expect(input).toHaveFocus();
			expectClosed();
		});
	});

	describe("pointer", () => {
		it("opens on click on the input and closes on a second click", async () => {
			render(<Select {...defaultProps} />);
			const input = getInput();

			pointerClick(input);
			await expectOpen();
			expect(input).toHaveFocus();

			pointerClick(input);
			await waitFor(() => expectClosed());
		});

		it("opens on click on the chevron / field area outside the input", async () => {
			render(<Select {...defaultProps} />);
			const input = getInput();
			const field = input.parentElement as HTMLElement;

			pointerClick(field);
			await expectOpen();
			expect(input).toHaveFocus();
		});

		it("closes on Escape", async () => {
			render(<Select {...defaultProps} />);
			const input = getInput();

			pointerClick(input);
			await expectOpen();

			fireEvent.keyDown(input, { key: "Escape" });
			await waitFor(() => expectClosed());
		});
	});

	describe("keyboard on the focused input", () => {
		it.each([
			["Enter", { key: "Enter" }],
			["Space", { key: " " }],
			["ArrowDown", { key: "ArrowDown" }],
			["ArrowUp", { key: "ArrowUp" }],
			["Alt+ArrowDown", { key: "ArrowDown", altKey: true }]
		])("opens on %s", async (_name, keyInit) => {
			render(<Select {...defaultProps} />);
			const input = getInput();

			act(() => input.focus());
			expectClosed();

			fireEvent.keyDown(input, keyInit);
			await expectOpen();
		});
	});

	describe("selection", () => {
		it("calls onChange with the option's value and shows its label", async () => {
			const onChange = vi.fn();
			render(<Select {...defaultProps} onChange={onChange} />);
			const input = getInput();

			pointerClick(input);
			await expectOpen();

			pointerClick(screen.getByRole("option", { name: "Mexico" }));

			expect(onChange).toHaveBeenCalledTimes(1);
			expect(onChange).toHaveBeenCalledWith("mx");
			await waitFor(() => expect(input).toHaveValue("Mexico"));
			await waitFor(() => expectClosed());
		});
	});

	describe("isDisabled", () => {
		it("blocks opening via click and keyboard", async () => {
			render(<Select {...defaultProps} isDisabled />);
			const input = getInput();
			expect(input).toBeDisabled();

			pointerClick(input);
			pointerClick(input.parentElement as HTMLElement);
			expectClosed();

			fireEvent.keyDown(input, { key: "ArrowDown" });
			fireEvent.keyDown(input, { key: "Enter" });
			fireEvent.keyDown(input, { key: " " });
			expectClosed();
		});
	});

	describe("callbacks", () => {
		it("still fires onFocus and onBlur", () => {
			const onFocus = vi.fn();
			const onBlur = vi.fn();
			render(<Select {...defaultProps} onFocus={onFocus} onBlur={onBlur} />);
			const input = getInput();

			act(() => input.focus());
			expect(onFocus).toHaveBeenCalledTimes(1);
			expect(onBlur).not.toHaveBeenCalled();

			act(() => input.blur());
			expect(onBlur).toHaveBeenCalledTimes(1);
		});
	});
});
