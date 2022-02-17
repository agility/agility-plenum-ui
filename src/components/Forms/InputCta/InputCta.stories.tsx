import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { InputCta, InputCtaProps } from './InputCta';

const HIDE = {
    table: {
        disable: true
    }
};
export default {
    title: 'Design System/Atoms',
    component: InputCta,
    argTypes: {
        onClickHandler: HIDE
    }
} as Meta;

const Template: Story<InputCtaProps> = (args) => <InputCta {...args} />;

export const InputCtaComponent = Template.bind({});
InputCtaComponent.args = {
    icon: 'SortAscendingIcon',
    ctaLabel: 'Sort',
    isClear: false,
    align: 'left'
};
InputCtaComponent.storyName = 'Input CTA';
