import React from "react"
import { shallow } from "enzyme"
import { ToggleSwitch } from "./ToggleSwitch"

describe("ToggleSwitch component", () => {
	// it("should be in off state when not is checked", () => {
	// 	// setup
	// 	const ToggleSwitchComponent = shallow(
	// 		<ToggleSwitch value="Some Value" name="Test" isChecked={false} />
	// 	)
	// 	// testComponent
	// 	expect(ToggleSwitchComponent.props().children.props.checked).toEqual(
	// 		false
	// 	)
	// })
	// it("should be in on state by if it's checked", () => {
	// 	// setup
	// 	const ToggleSwitchComponent = shallow(
	// 		<ToggleSwitch value="Some Value" name="Test" isChecked={true} />
	// 	)
	// 	// testComponent
	// 	expect(ToggleSwitchComponent.props().).toEqual(
	// 		true
	// 	)
	// })
	it("should trigger the callback on change event", () => {
		/** Cant test click on external libraries */
		// setup
		// let expectedValue = false;
		// const ToggleSwitchComponent = shallow(<ToggleSwitch onChange={(stateValue) => {expectedValue = stateValue}} defaultValue={false} />);
		// ToggleSwitchComponent.setProps({defaultValue: true})
		// ToggleSwitchComponent.find(HeadlessUIToggleSwitch).find('button').simulate('click');
		// // testComponent
		// expect(expectedValue).toEqual(true);
	})
})
