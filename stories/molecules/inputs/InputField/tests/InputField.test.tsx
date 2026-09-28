import { vi } from "vitest";
import InputField from "../InputField";
import { render, screen } from "@testing-library/react";

const defaultProps = {
	type: "text" as const,
	value: "",
	handleChange: vi.fn()
};

const getInput = () => screen.getByRole("textbox");

describe("<InputField>", () => {
	describe("height", () => {
		it("is a fixed 36px (h-9) with no vertical padding, matching the default Button", () => {
			render(<InputField {...defaultProps} />);
			expect(getInput()).toHaveClass("h-9", "py-0", "text-sm", "leading-5");
			expect(getInput()).not.toHaveClass("py-2");
		});

		it("appends the consumer className after its own classes", () => {
			render(<InputField {...defaultProps} className="consumer-class pl-7" />);
			const classes = getInput().className.split(/\s+/);
			expect(classes).toContain("h-9");
			expect(classes[classes.length - 1]).toBe("pl-7");
			expect(classes.indexOf("consumer-class")).toBeGreaterThan(classes.indexOf("h-9"));
		});
	});

	describe("focus", () => {
		it("zeroes the focus ring with !important so @tailwindcss/forms cannot add one", () => {
			render(<InputField {...defaultProps} />);
			expect(getInput()).toHaveClass("focus:!ring-0", "focus:outline-none");
		});

		it("shows a violet-700 border on focus", () => {
			render(<InputField {...defaultProps} />);
			expect(getInput()).toHaveClass("focus:!border-violet-700");
		});

		it("never adds a focus ring width", () => {
			render(<InputField {...defaultProps} isError />);
			expect(getInput().className).not.toMatch(/focus:!?ring-(1|2|red|gray)/);
		});

		it("keeps the error border on focus", () => {
			render(<InputField {...defaultProps} isError />);
			expect(getInput()).toHaveClass("!border-red-600");
			expect(getInput()).not.toHaveClass("focus:!border-violet-700");
			expect(getInput()).toHaveAttribute("aria-invalid", "true");
		});

		it("keeps the error border on focus when a wrapper signals the error with aria-invalid", () => {
			render(<InputField {...defaultProps} aria-invalid />);
			expect(getInput()).not.toHaveClass("focus:!border-violet-700");
		});

		it("keeps the readonly border on focus", () => {
			render(<InputField {...defaultProps} isReadonly />);
			expect(getInput()).toHaveClass("!border-gray-400");
			expect(getInput()).not.toHaveClass("focus:!border-violet-700");
		});
	});
});
