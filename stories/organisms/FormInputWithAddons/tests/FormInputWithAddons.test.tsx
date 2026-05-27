import React from "react";
import { vi } from "vitest";
import { render } from "@testing-library/react";
import FormInputWithAddons from "../FormInputWithAddons";

const baseProps = {
	id: "test-input",
	name: "test-input",
	type: "text" as const,
	value: "",
	handleChange: vi.fn()
};

describe("<FormInputWithAddons>", () => {
	let errorSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
	});

	afterEach(() => {
		errorSpy.mockRestore();
	});

	const expectNoDomPropWarnings = () => {
		const offending = errorSpy.mock.calls.filter(([msg]) =>
			typeof msg === "string" &&
			(msg.includes("React does not recognize the") ||
				msg.includes("Unknown prop") ||
				msg.includes("Invalid DOM property"))
		);
		expect(offending).toEqual([]);
	};

	it("does not warn about unknown DOM props when no inputRef is passed", () => {
		render(<FormInputWithAddons {...baseProps} />);
		expectNoDomPropWarnings();
	});

	it("does not leak inputRef to the underlying <input> element", () => {
		const ref = React.createRef<HTMLInputElement>();
		const { container } = render(<FormInputWithAddons {...baseProps} inputRef={ref} />);

		expectNoDomPropWarnings();

		const input = container.querySelector("input");
		expect(input).not.toBeNull();
		expect(input?.hasAttribute("inputref")).toBe(false);
		expect(input?.hasAttribute("inputRef")).toBe(false);
		// The ref should be attached to the actual input element.
		expect(ref.current).toBe(input);
	});
});
