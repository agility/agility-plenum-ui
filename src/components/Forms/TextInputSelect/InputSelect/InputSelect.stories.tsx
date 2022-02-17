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
        onSelectOption: HIDE
    }
} as Meta;

const Template: Story<InputSelectProps> = (args) => <InputSelect {...args} />;

export const InputSelectComponent = Template.bind({});
InputSelectComponent.args = {
    align: 'left',
    inputOptions: [
        { label: 'Select', value: 'Select' },
    ]
};
InputSelectComponent.storyName = 'Input Select';
