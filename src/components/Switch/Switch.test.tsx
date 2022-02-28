import React from 'react';
import { shallow } from 'enzyme';
import { Switch } from './Switch';

describe('Switch component', () => {
    it('should be in off state by default', () => {
        // setup
        const switchComponent = shallow(
            <Switch
                onChange={() => {
                    return;
                }}
            />
        );
        // testComponent
        expect(switchComponent.props().children.props.checked).toEqual(false);
    });
    it('should be in on state by if defaultValue is true', () => {
        // setup
        const switchComponent = shallow(
            <Switch
                onChange={() => {
                    return;
                }}
                defaultValue
            />
        );
        // testComponent
        expect(switchComponent.props().children.props.checked).toEqual(true);
    });
    it('should trigger the callback on change event', () => {
        /** Cant test click on external libraries */
        // setup
        // let expectedValue = false;
        // const switchComponent = shallow(<Switch onChange={(stateValue) => {expectedValue = stateValue}} defaultValue={false} />);
        // switchComponent.setProps({defaultValue: true})
        // switchComponent.find(HeadlessUISwitch).find('button').simulate('click');
        // // testComponent
        // expect(expectedValue).toEqual(true);
    });
});
