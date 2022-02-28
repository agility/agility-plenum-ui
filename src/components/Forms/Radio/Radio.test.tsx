import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Radio } from './Radio';
import { InputLabel } from '../InputLabel';

describe('Radio component', () => {
    let radioWrapper: ShallowWrapper;
    beforeEach(() => {
        radioWrapper = shallow(
            <Radio name="radioComponent" label="Radio Component" id="radioID" />
        );
    });
    it('should set the label', () => {
        // test
        expect(radioWrapper.find(InputLabel)).toHaveLength(1);
        expect(radioWrapper.find(InputLabel).dive().find('label')).toHaveLength(1);
        expect(radioWrapper.find(InputLabel).dive().find('label').text()).toEqual(
            'Radio Component'
        );
    });
    it('should set the id', () => {
        // test
        expect(radioWrapper.find('input').prop('id')).toEqual('radioID');
    });
    it('should set the name', () => {
        // test
        expect(radioWrapper.find('input').prop('name')).toEqual('radioComponent');
    });
    it('should have the disabled class when isDisabled param is true', () => {
        // setup
        radioWrapper.setProps({ isDisabled: true });
        // test
        expect(radioWrapper.hasClass('opacity-50')).toEqual(true);
    });
    it('should be checked on init when isChecked param is true', () => {
        // setup
        radioWrapper.setProps({ isChecked: true });
        // test
        expect(radioWrapper.find('input').prop('defaultChecked')).toEqual(true);
    });
    it('should have a red asterisk when required is set to true', () => {
        // setup
        radioWrapper.setProps({ isRequired: true });
        // test
        expect(radioWrapper.find(InputLabel)).toHaveLength(1);
        expect(radioWrapper.find(InputLabel).dive().find('label')).toHaveLength(1);
        expect(radioWrapper.find(InputLabel).dive().find('span.text-red-500').text()).toEqual(
            ' *'
        );
    });
    it('should have a red border when isError is set to true', () => {
        // setup
        radioWrapper.setProps({ isError: true });
        // test
        expect(radioWrapper.find('input').hasClass('border-red-500')).toEqual(true);
    });
    it('should display the message when message is set', () => {
        // setup
        radioWrapper.setProps({ message: 'message' });
        // test
        expect(radioWrapper.find('#radioID-description').exists()).toEqual(true);
        expect(radioWrapper.find('#radioID-description').text()).toEqual('message');
    });
});
