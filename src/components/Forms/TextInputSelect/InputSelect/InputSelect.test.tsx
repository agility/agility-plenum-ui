import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import { InputSelect } from './InputSelect';

describe('InputSelect component', () => {
    it('should have the correct border classes when alignment is left', () => {
        // setup
        const inputOptions = [{ label: 'label', value: 'value' }];
        const InputSelectComponent: ShallowWrapper = shallow(
            <InputSelect align="left" inputOptions={inputOptions} />
        );
        // test
        expect(InputSelectComponent.hasClass('border-r-white')).toEqual(true);
    });
    it('should have the correct border classes when alignment is right', () => {
        // setup
        const inputOptions = [{ label: 'label', value: 'value' }];
        const InputSelectComponent: ShallowWrapper = shallow(
            <InputSelect align="right" inputOptions={inputOptions} />
        );
        // test
        expect(InputSelectComponent.hasClass('border-l-white')).toEqual(true);
    });
    it('should display the options', () => {
        // setup
        const inputOptions = [{ label: 'label', value: 'value' }];
        const InputSelectComponent: ShallowWrapper = shallow(
            <InputSelect align="left" inputOptions={inputOptions} />
        );
        // test
        expect(InputSelectComponent.text().includes('label')).toEqual(true);
    });
    it('should trigger the callback on change event', () => {
        // setup
        let value = '';
        const inputOptions = [{ label: 'label', value: 'expectedValue' }];
        const InputSelectComponent: ReactWrapper = mount(
            <InputSelect
                align="left"
                inputOptions={inputOptions}
                onSelectOption={(targetValue) => {
                    value = targetValue;
                }}
            />
        );
        InputSelectComponent.simulate('change');
        expect(value).toEqual('expectedValue');
    });
});
