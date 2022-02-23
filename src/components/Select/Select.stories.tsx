import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Select, SelectProps } from './Select';

export default {
    title: 'Design System/Components/Select',
    component: Select
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;
const baseArgs = {
    label: 'Label',
    id: 'select',
    name: 'select',
    options: [{label:'Canada', value: 'value1'}, {label:'USA', value: 'value2'}],
    isDisabled: false,
    isError: false,
    isRequired: false,
}

export const AllVariations = Template.bind({});
AllVariations.decorators = [
    () => {
        return (
            <div className="grid-flow-row gap-4 grid">
                <Select {...(Base.args as SelectProps)} />
                <Select {...(Label.args as SelectProps)} />
                <Select {...(Required.args as SelectProps)} />
                <Select {...(Error.args as SelectProps)} />
                <Select {...(Disabled.args as SelectProps)} />
                <span className="text-xs block mt-5 text-gray-400">Note: controls are disabled on this view</span>
            </div>
        );
    }
];

export const Base = Template.bind({});
Base.args = {...baseArgs, label:''};

export const Label = Template.bind({});
Label.args = {...baseArgs};

export const Disabled = Template.bind({});
Disabled.args = {...baseArgs, isDisabled: true};

export const Required = Template.bind({});
Required.args = {...baseArgs, isRequired: true};

export const Error = Template.bind({});
Error.args = {...baseArgs, isError: true};