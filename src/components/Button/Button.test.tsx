import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Button } from './Button';

describe('Button', function () {
    describe('Button Size', function () {
        let button: ShallowWrapper;
        beforeEach(() => {
            button = shallow(<Button label="Primary" type="primary" />);
        });
        it('should have large font using lg size prop', function () {
            button.setProps({ size: 'lg' })
            expect(button.hasClass('text-lg')).toBe(true);
        });
        it('should have base font using base size prop', function () {
            button.setProps({ size: 'base' })
            expect(button.hasClass('text-base')).toBe(true);
        });
        it('should have small font using sm size prop', function () {
            button.setProps({ size: 'sm' })
            expect(button.hasClass('text-sm')).toBe(true);
        });
    });
    describe('Primary Button', function () {
        let button: ShallowWrapper;
        beforeEach(() => {
            button = shallow(<Button label="Primary" type="primary" />);
        });
        it('should have a label', function () {
            expect(button.text()).toEqual('Primary');
        });
        it('should have the correct color class', function () {
            expect(button.hasClass('bg-purple-600')).toBe(true);
        });
        it('should have the correct hover color class', function () {
            expect(button.hasClass('hover:bg-purple-700')).toBe(true);
        });
    });
    describe('Secondary Button', function () {
        let button: ShallowWrapper;
        beforeEach(() => {
            button = shallow(<Button label="Secondary" type="secondary"/>);
        });
        it('should have a label', function () {
            expect(button.text()).toEqual('Secondary');
        });
        it('should have the correct color class', function () {
            expect(button.hasClass('bg-purple-100')).toBe(true);
        });
        it('should have the correct hover color class', function () {
            expect(button.hasClass('hover:bg-purple-200')).toBe(true);
        });
    });
    describe('Alternative Button', function () {
        let button: ShallowWrapper;
        beforeEach(() => {
            button = shallow(<Button label="Alternative" type="alternative" />);
        });
        it('should have a label', function () {
            expect(button.text()).toEqual('Alternative');
        });
        it('should have the correct color class', function () {
            expect(button.hasClass('bg-white')).toBe(true);
        });
        it('should have the correct hover color class', function () {
            expect(button.hasClass('hover:bg-gray-50')).toBe(true);
        });
    });
});
