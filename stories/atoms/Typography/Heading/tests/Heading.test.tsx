import Heading from "../Heading";
import { render, screen } from "@testing-library/react";

describe("<Heading>", () => {
	it("renders with the default text color", () => {
		render(<Heading level={1}>hello</Heading>);

		expect(screen.getByRole("heading", { level: 1 })).toHaveClass("text-gray-900");
	});

	describe("className merging", () => {
		it("consumer text color replaces the default", () => {
			render(
				<Heading level={1} className="text-gray-100">
					hello
				</Heading>
			);

			const element = screen.getByRole("heading", { level: 1 });
			expect(element).toHaveClass("text-gray-100");
			expect(element).not.toHaveClass("text-gray-900");
		});

		it("consumer text color does not clobber the arbitrary-value size classes", () => {
			render(
				<Heading level={1} className="text-gray-100">
					hello
				</Heading>
			);

			const element = screen.getByRole("heading", { level: 1 });
			expect(element).toHaveClass("text-[40px]");
			expect(element).toHaveClass("leading-[48px]");
		});

		it("non-conflicting consumer classes leave defaults intact", () => {
			render(
				<Heading level={2} className="px-2">
					hello
				</Heading>
			);

			const element = screen.getByRole("heading", { level: 2 });
			expect(element).toHaveClass("px-2");
			expect(element).toHaveClass("text-gray-900");
			expect(element).toHaveClass("font-medium");
			expect(element).toHaveClass("tracking-[-0.8px]");
			expect(element).toHaveClass("text-[36px]");
		});
	});

	describe("level", () => {
		it.each([
			[1, "text-[40px]", "leading-[48px]"],
			[2, "text-[36px]", "leading-[44px]"],
			[3, "text-[32px]", "leading-[40px]"],
			[4, "text-[28px]", "leading-[36px]"],
			[5, "text-[24px]", "leading-[32px]"],
			[6, "text-[20px]", "leading-[28px]"]
		] as const)("renders level %i as the matching heading tag with its size classes", (level, size, leading) => {
			render(<Heading level={level}>hello</Heading>);

			const element = screen.getByRole("heading", { level });
			expect(element.tagName).toBe(`H${level}`);
			expect(element).toHaveClass(size);
			expect(element).toHaveClass(leading);
		});
	});
});
