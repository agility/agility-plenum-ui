import Label from "../Label";
import { render, screen } from "@testing-library/react";

describe("<Label>", () => {
	it("renders with the default text color", () => {
		render(<Label>hello</Label>);

		expect(screen.getByText("hello")).toHaveClass("text-gray-900");
	});

	describe("className merging", () => {
		it("consumer text color replaces the default", () => {
			render(<Label className="text-gray-100">hello</Label>);

			const element = screen.getByText("hello");
			expect(element).toHaveClass("text-gray-100");
			expect(element).not.toHaveClass("text-gray-900");
		});

		it("consumer custom-theme text color replaces the default", () => {
			render(<Label className="text-transparent-white-70">hello</Label>);

			const element = screen.getByText("hello");
			expect(element).toHaveClass("text-transparent-white-70");
			expect(element).not.toHaveClass("text-gray-900");
		});

		it("non-conflicting consumer classes leave defaults intact", () => {
			render(<Label className="px-2">hello</Label>);

			const element = screen.getByText("hello");
			expect(element).toHaveClass("px-2");
			expect(element).toHaveClass("text-gray-900");
			expect(element).toHaveClass("font-normal");
			expect(element).toHaveClass("text-sm");
		});

		it("consumer text color does not clobber the size class", () => {
			render(
				<Label size="lg" className="text-gray-100">
					hello
				</Label>
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
			render(<Label size={size}>hello</Label>);

			expect(screen.getByText("hello")).toHaveClass(expected);
		});

		it("renders size xs with arbitrary-value classes", () => {
			render(<Label size="xs">hello</Label>);

			const element = screen.getByText("hello");
			expect(element).toHaveClass("text-[10px]");
			expect(element).toHaveClass("leading-[14px]");
		});
	});
});
