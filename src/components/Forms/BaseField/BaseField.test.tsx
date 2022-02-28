import React from 'react';
import { shallow } from 'enzyme';
import { BaseField, Type } from './BaseField';

describe('BaseField', () => {
    describe('Type param', () => {
        const availableTypes = [
            'text',
            'email',
            'number',
            'password',
            'search',
            'tel',
            'url',
            'date',
            'datetime-local',
            'month',
            'time',
            'week',
            'currency'
        ];
        it.each(availableTypes)('should have the correct type params', (type) => {
            const basefield = shallow(<BaseField type={type as Type} id={type} name={type} />);
            expect(basefield.prop('type')).toBe(type);
        });
    });
    describe('Placeholder', () => {
        it('should pass the correct placeholder param', () => {
            const basefield = shallow(
                <BaseField type="text" name="text" id="text" placeholder="placeholder" />
            );
            expect(basefield.prop('placeholder')).toBe('placeholder');
        });
    });
    describe('isDisabled', () => {
        it('should apply the correct style and prop for the disabled state', () => {
            const basefield = shallow(
                <BaseField
                    type="text"
                    name="text"
                    id="text"
                    placeholder="placeholder"
                    isDisabled={true}
                />
            );
            expect(basefield.prop('disabled')).toBe(true);
            expect(basefield.hasClass('opacity-50')).toBe(true);
        });
    });
});
