import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { InputSelect, InputSelectProps } from './InputSelect';

const HIDE = {
    table: {
        disable: true
    }
};
export default {
    title: 'Design System/Atoms',
    component: InputSelect,
    argTypes: {
        onClickHandler: HIDE
    }
} as Meta;

const Template: Story<InputSelectProps> = (args) => <InputSelect {...args} />;

export const InputSelectComponent = Template.bind({});
InputSelectComponent.args = {
    icon: 'SortAscendingIcon',
    ctaLabel: 'Sort',
    isClear: false,
    align: 'left'
};
InputSelectComponent.storyName = 'Input Select';
