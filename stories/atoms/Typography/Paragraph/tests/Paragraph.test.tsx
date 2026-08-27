import Paragraph from "../Paragraph";
import { render, screen } from "@testing-library/react";

describe("<Paragraph>", () => {
	it("renders with the default text color", () => {
		render(<Paragraph>hello</Paragraph>);

		expect(screen.getByText("hello")).toHaveClass("text-gray-900");
	});

	describe("className merging", () => {
		it("consumer text color replaces the default", () => {
			render(<Paragraph className="text-gray-100">hello</Paragraph>);

			const element = screen.getByText("hello");
			expect(element).toHaveClass("text-gray-100");
			expect(element).not.toHaveClass("text-gray-900");
		});

		it("consumer custom-theme text color replaces the default", () => {
			render(<Paragraph className="text-neutral-700">hello</Paragraph>);

			const element = screen.getByText("hello");
			expect(element).toHaveClass("text-neutral-700");
			expect(element).not.toHaveClass("text-gray-900");
		});

		it("non-conflicting consumer classes leave defaults intact", () => {
			render(<Paragraph className="px-2">hello</Paragraph>);

			const element = screen.getByText("hello");
			expect(element).toHaveClass("px-2");
			expect(element).toHaveClass("text-gray-900");
			expect(element).toHaveClass("font-normal");
			expect(element).toHaveClass("text-sm");
		});

		it("consumer text color does not clobber the size class", () => {
			render(
				<Paragraph size="lg" className="text-gray-100">
					hello
				</Paragraph>
			);

			const element = screen.getByText("hello");
			expect(element).toHaveClass("text-base");
			expect(element).toHaveClass("text-gray-100");
		});
	});

	describe("size", () => {
		it.each([
			["xl", "text-lg"],
			["lg", "text-base"],
			["md", "text-sm"],
			["sm", "text-xs"]
		] as const)("renders size %s with %s", (size, expected) => {
			render(<Paragraph size={size}>hello</Paragraph>);

			expect(screen.getByText("hello")).toHaveClass(expected);
		});

		it("renders size xs with arbitrary-value classes", () => {
			render(<Paragraph size="xs">hello</Paragraph>);

			const element = screen.getByText("hello");
			expect(element).toHaveClass("text-[10px]");
			expect(element).toHaveClass("leading-[12px]");
		});
	});
});
