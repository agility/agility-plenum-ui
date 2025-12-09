import { vi } from "vitest";
import Button from "../Button";
import { render, screen, fireEvent } from "@testing-library/react";

const defaultProps = {
	label: "Button Test"
};

describe("<Button>", () => {
	it("renders with the correct label", () => {
		render(<Button {...defaultProps} />);

		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toHaveTextContent("Button Test");
	});

	describe("actionType", () => {
		it("renders with primary as default", () => {
			render(<Button {...defaultProps} />);

			const buttonElement = screen.getByRole("button");
			expect(buttonElement).toHaveClass("bg-violet-800");
		});

		it("renders with actionType as secondary", () => {
			render(<Button {...defaultProps} actionType="secondary" />);

			const buttonElement = screen.getByRole("button");
			expect(buttonElement).toHaveClass("bg-purple-50");
		});

		it("renders with actionType as alternative", () => {
			render(<Button {...defaultProps} actionType="alternative" />);

			const buttonElement = screen.getByRole("button");
			expect(buttonElement).toHaveClass("border-gray-300");
		});

		it("renders with actionType as danger", () => {
			render(<Button {...defaultProps} actionType="danger" />);

			const buttonElement = screen.getByRole("button");
			expect(buttonElement).toHaveClass("bg-red-600");
		});

		it("renders with actionType as warning", () => {
			render(<Button {...defaultProps} actionType="warning" />);

			const buttonElement = screen.getByRole("button");
			expect(buttonElement).toHaveClass("bg-yellow-500");
		});
	});

	describe("asLink", () => {
		it("renders as <a /> when asLink is true", () => {
			render(<Button {...defaultProps} asLink={{ href: "#", target: "_blank" }} />);

			const linkElement = screen.getByRole("link");
			expect(linkElement).toBeInTheDocument();
		});

		it("renders as <button /> when asLink is false", () => {
			render(<Button {...defaultProps} />);

			const linkElement = screen.getByRole("button");
			expect(linkElement).toBeInTheDocument();
		});
	});

	it("calls onClick when clicked", () => {
		const handleClick = vi.fn();
		render(<Button {...defaultProps} onClick={handleClick} />);

		const buttonElement = screen.getByRole("button");
		fireEvent.click(buttonElement);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
