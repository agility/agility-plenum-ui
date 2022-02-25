import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import { Select } from './Select';

const options = [{ label: 'label', value: 'value' }];
describe('Select component', () => {
    it('should display the label when label prop is provided', () => {
        // setup
        const SelectComponent: ShallowWrapper = shallow(<Select options={options} id="select" name="select" label="label" />);
        // test
        expect(SelectComponent.find('label').text().includes('label')).toBeTruthy;
    });
    it('should not show label when label prop is empty', () => {
        // setup
        const SelectComponent: ShallowWrapper = shallow(<Select options={options} id="select" name="select" label="" />);
        // test
        expect(SelectComponent.find('label')).toBeFalsy;
    });
    it('should have the correct class when disabled', () => {
        // setup
        const SelectComponent: ShallowWrapper = shallow(<Select options={options} id="select" name="select" isDisabled />);
        // test
        expect(SelectComponent.hasClass('opacity-50')).toBeTruthy;
    });
    it('should have a label with an asterisk with correct class when required', () => {
        // setup
        const SelectComponent: ShallowWrapper = shallow(<Select options={options} id="select" name="select" label="label" isRequired />);
        // test
        expect(SelectComponent.find('label')).toBeTruthy;
        expect(SelectComponent.find('.text-red-500').text().includes('*')).toBeTruthy;
    });
    it('should have the correct class when in an error state', () => {
        // setup
        const SelectComponent: ShallowWrapper = shallow(<Select options={options} id="select" name="select" label="label" isError />);
        // test
        expect(SelectComponent.find('select').hasClass('border-red-500')).toBeTruthy;
    });
    it('should contain the id and name props within the select input', () => {
        // setup
        const SelectComponent: ShallowWrapper = shallow(<Select options={options} id="select" name="select" label="label" />);
        // test
        expect(SelectComponent.find('select').prop('id')).toEqual('select');
        expect(SelectComponent.find('select').prop('name')).toEqual('select');
    });
    it('should trigger the callback on change event', () => {
        // setup
        let value = '';
        const inputOptions = [{label: 'label', value: 'expectedValue1'}, {label: 'label', value: 'expectedValue2'}];
        const SelectComponent: ReactWrapper = mount(<Select options={inputOptions} id="select" name="select" label="label" onChange={(targetValue) => {value = targetValue}} />);
        SelectComponent.find('select').simulate('change');
        expect(value).toEqual('expectedValue1');
    });
});
