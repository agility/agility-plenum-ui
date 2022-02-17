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
        name: HIDE,
        id: HIDE,
        isFocused: HIDE,
        onChange: HIDE,
        defaultValue: HIDE
    }
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;
const baseArgs = {
    label: 'Default',
    id: 'input',
    name: 'input',
    type: 'text',
    defaultValue: '',
    isRequired: false,
    isDisabled: false,
    isFocused: false,
    isError: false,
    isShowCounter: false,
} as TextInputProps;

export const AllVariations = Template.bind({});
AllVariations.decorators=[
    ()=> {
        return(
            <div className="grid-flow-row gap-3 grid">
                <TextInput {...Default.args as TextInputProps} />
                <TextInput {...Required.args as TextInputProps} />
                <TextInput {...Disabled.args as TextInputProps} />
                <TextInput {...Error.args as TextInputProps} />
                <TextInput {...Message.args as TextInputProps} />
                <TextInput {...Counter.args as TextInputProps} />
                <span className="text-xs block mt-5 text-gray-400">Note: controls are disabled on this view</span>
            </div>
        )
    }
]

export const Default = Template.bind({});
Default.args = {
    ...baseArgs
};
export const Message = Template.bind({});
Message.args = {
    ...baseArgs,
    message: 'Write a few sentences about yourself.'
};
export const Counter = Template.bind({});
Counter.args = {
    ...baseArgs,
    isShowCounter: true,
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
