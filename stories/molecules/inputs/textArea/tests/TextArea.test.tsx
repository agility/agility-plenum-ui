import Textarea from "../TextArea";
import { render, screen } from "@testing-library/react";

describe("<Textarea>", () => {
	describe("placeholder", () => {
		it("is gray-500 without a label, matching TextInput", () => {
			render(<Textarea placeholder="Write something" />);
			expect(screen.getByPlaceholderText("Write something")).toHaveClass("placeholder:text-gray-500");
		});

		it("is gray-500 with a label, matching TextInput", () => {
			render(<Textarea label={{ display: "Notes" }} placeholder="Write something" />);
			expect(screen.getByPlaceholderText("Write something")).toHaveClass("placeholder:text-gray-500");
		});

		it("keeps the gray-300 disabled placeholder when disabled", () => {
			render(<Textarea label={{ display: "Notes" }} placeholder="Write something" isDisabled />);
			expect(screen.getByPlaceholderText("Write something")).toHaveClass(
				"placeholder:text-gray-500",
				"disabled:placeholder:text-gray-300"
			);
		});
	});
});
