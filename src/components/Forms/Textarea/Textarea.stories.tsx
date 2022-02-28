import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';
import { BRAND_CONFIG } from '../../../common';

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/Textarea`,
    component: Textarea
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;
const baseArgs = {
    label: 'Default',
    id: 'input',
    name: 'input',
    defaultValue: '',
    isRequired: false,
    isDisabled: false,
    isError: false,
    isShowCounter: false
} as TextareaProps;

export const AllVariations = Template.bind({});
AllVariations.decorators = [
    () => {
        return (
            <div className="grid-flow-row gap-3 grid">
                <Textarea {...(Default.args as TextareaProps)} />
                <Textarea {...(Required.args as TextareaProps)} />
                <Textarea {...(Message.args as TextareaProps)} />
                <Textarea {...(Counter.args as TextareaProps)} />
                <Textarea {...(Error.args as TextareaProps)} />
                <Textarea {...(Disabled.args as TextareaProps)} />
                <span className="text-xs block mt-5 text-gray-400">
                    Note: controls are disabled on this view
                </span>
            </div>
        );
    }
];

export const Default = Template.bind({});
Default.args = {
    ...baseArgs
};
export const Message = Template.bind({});
Message.args = {
    ...baseArgs,
    label: 'With Message',
    message: 'Write a few sentences about yourself.'
};
export const Counter = Template.bind({});
Counter.args = {
    ...baseArgs,
    label: 'With Counter',
    isShowCounter: true
};
Counter.storyName = 'With Counter';

export const Required = Template.bind({});
Required.args = {
    ...baseArgs,
    label: 'Required',
    isRequired: true
};

export const Error = Template.bind({});
Error.args = {
    ...baseArgs,
    defaultValue: 'Error state',
    isError: true,
    isRequired: true,
    label: 'Error State',
    message: 'What a bummer. We all make mistakes.'
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...baseArgs,
    label: 'Disabled State',
    isDisabled: true,
    defaultValue: 'Default Value'
};
