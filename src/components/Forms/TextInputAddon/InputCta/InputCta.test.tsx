import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { InputCta } from './InputCta';

describe('InputCta component', () => {
    it('should display the label', () => {
        // setup
        const inputcta: ShallowWrapper = shallow(
            <InputCta icon="QuestionMarkCircleIcon" ctaLabel="Label" align="left" isClear />
        );
        // test
        expect(inputcta.find('span').text().includes('Label')).toEqual(true);
    });
    it('should display the Icon', () => {
        // setup
        const inputcta: ShallowWrapper = shallow(
            <InputCta icon="QuestionMarkCircleIcon" ctaLabel="Label" align="left" isClear />
        );
        // test
        expect(inputcta.find('DynamicIcons')).toBeTruthy;
    });
    it('should have the correct class when isClear prop is true', () => {
        // setup
        const inputcta: ShallowWrapper = shallow(
            <InputCta icon="QuestionMarkCircleIcon" ctaLabel="Label" align="left" isClear />
        );
        // test
        expect(inputcta.hasClass('bg-white')).toBe(true);
    });
    it('should have the correct class when isClear prop is false', () => {
        // setup
        const inputcta: ShallowWrapper = shallow(
            <InputCta icon="QuestionMarkCircleIcon" ctaLabel="Label" align="left" isClear={false} />
        );
        // test
        expect(inputcta.hasClass('bg-white')).toBe(false);
    });
});
