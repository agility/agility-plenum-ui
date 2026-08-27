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

	describe("min-width floor", () => {
		it("applies min-w-[150px] to a labeled button with no explicit size", () => {
			render(<Button {...defaultProps} />);

			expect(screen.getByRole("button")).toHaveClass("min-w-[150px]");
		});

		it("applies min-w-[150px] at explicit size md", () => {
			render(<Button {...defaultProps} size="md" />);

			expect(screen.getByRole("button")).toHaveClass("min-w-[150px]");
		});

		it("does not apply to an icon-only button (no label)", () => {
			render(<Button label="" icon="IconDots" />);

			expect(screen.getByRole("button")).not.toHaveClass("min-w-[150px]");
		});

		it("does not apply at explicit size sm", () => {
			render(<Button {...defaultProps} size="sm" />);

			expect(screen.getByRole("button")).not.toHaveClass("min-w-[150px]");
		});

		it("does not apply at explicit size xs", () => {
			render(<Button {...defaultProps} size="xs" />);

			expect(screen.getByRole("button")).not.toHaveClass("min-w-[150px]");
		});

		it("is overridden by a consumer min-w-* class", () => {
			render(<Button {...defaultProps} className="min-w-0" />);

			const buttonElement = screen.getByRole("button");
			expect(buttonElement).not.toHaveClass("min-w-[150px]");
			expect(buttonElement).toHaveClass("min-w-0");
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
