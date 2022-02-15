import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput';

const HIDE = {
    table: {
        disable: true
    }
};

export default {
    title: 'Design System/Components/TextInput',
    component: TextInput,
    argTypes: {
        type: {
            options: ['text', 'number', 'password'],
            control: { type: 'radio' }
        },
        name: HIDE,
        id: HIDE,
        isFocused: HIDE,
        onChange: HIDE,
        isError: HIDE,
        // isDisabled: HIDE,
        defaultValue: HIDE
    }
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;
const baseArgs = {
    label: 'Default',
    isFocused: false,
    isError: false,
    id: 'input',
    name: 'input',
    type: 'text',
    defaultValue: '',
    isRequired: false,
    isDisabled: false,
    showCounter: false
} as TextInputProps;

export const Default = Template.bind({});
Default.args = {
    ...baseArgs,
    message: 'Write a few sentences about yourself.'
};

export const Counter = Template.bind({});
Counter.args = {
    ...baseArgs,
    showCounter: true,
};
Counter.storyName='With Counter'

export const Required = Template.bind({});
Required.args = {
    ...baseArgs,
    isRequired: true
};

export const Error = Template.bind({});
Error.args = {
    ...baseArgs,
    defaultValue: 'Error state',
    isError: true,
    isRequired: true,
    message: 'What a bummer. We all make mistakes.'
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...baseArgs,
    isDisabled: true,
    defaultValue: 'Default Value'
};
