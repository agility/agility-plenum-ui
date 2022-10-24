import React from "react"
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme"
import { Checkbox } from "./Checkbox"
import { InputLabel } from "../InputLabel"

describe("Checkbox component", () => {
	let checkboxWrapper: ShallowWrapper
	beforeEach(() => {
		checkboxWrapper = shallow(
			<Checkbox label="Checkbox Component" id="checkboxID" />
		)
	})
	it("should set the label", () => {
		// test
		expect(checkboxWrapper.find(InputLabel)).toHaveLength(1)
		expect(
			checkboxWrapper.find(InputLabel).dive().find("label")
		).toHaveLength(1)
		expect(
			checkboxWrapper.find(InputLabel).dive().find("label").text()
		).toEqual("Checkbox Component")
	})
	it("should set the id", () => {
		// test
		expect(checkboxWrapper.find("input").prop("id")).toEqual("checkboxID")
	})
	it("should be checked on init when isChecked param is true", () => {
		// setup
		checkboxWrapper.setProps({ isChecked: true })
		// test
		expect(checkboxWrapper.find("input").prop("checked")).toEqual(true)
	})
	it("should have the disabled class when isDisabled param is true", () => {
		// setup
		checkboxWrapper.setProps({ isDisabled: true })
		// test
		expect(checkboxWrapper.hasClass("opacity-50")).toEqual(true)
	})

	describe("Checkbox component", () => {
		let checkboxWrapper: ShallowWrapper
		beforeEach(() => {
			checkboxWrapper = shallow(
				<Checkbox label="Checkbox Component" id="checkboxID" />
			)
		})
		it("should set the label", () => {
			// test
			expect(checkboxWrapper.find(InputLabel)).toHaveLength(1)
			expect(
				checkboxWrapper.find(InputLabel).dive().find("label")
			).toHaveLength(1)
			expect(
				checkboxWrapper.find(InputLabel).dive().find("label").text()
			).toEqual("Checkbox Component")
		})
		it("should set the id", () => {
			// test
			expect(checkboxWrapper.find("input").prop("id")).toEqual(
				"checkboxID"
			)
		})
		it("should have the disabled class when isDisabled param is true", () => {
			// setup
			checkboxWrapper.setProps({ isDisabled: true })
			// test
			expect(checkboxWrapper.hasClass("opacity-50")).toEqual(true)
		})
		it("should be checked on init when isChecked param is true", () => {
			// setup
			checkboxWrapper.setProps({ isChecked: true })
			// test
			expect(checkboxWrapper.find("input").prop("checked")).toEqual(true)
		})
		it("should have a red asterisk when required is set to true", () => {
			// setup
			checkboxWrapper.setProps({ isRequired: true })
			// test
			expect(checkboxWrapper.find(InputLabel)).toHaveLength(1)
			expect(
				checkboxWrapper.find(InputLabel).dive().find("label")
			).toHaveLength(1)
			expect(
				checkboxWrapper
					.find(InputLabel)
					.dive()
					.find("span.text-red-500")
					.text()
			).toEqual(" *")
		})
		it("should have a red border when isError is set to true", () => {
			// setup
			checkboxWrapper.setProps({ isError: true })
			// test
			expect(
				checkboxWrapper.find("input").hasClass("border-red-500")
			).toEqual(true)
		})
		it("should display the message when message is set", () => {
			// setup
			checkboxWrapper.setProps({ message: "message" })
			// test
			expect(
				checkboxWrapper.find("#checkboxID-description").exists()
			).toEqual(true)
			expect(
				checkboxWrapper.find("#checkboxID-description").text()
			).toEqual("message")
		})
	})
})
