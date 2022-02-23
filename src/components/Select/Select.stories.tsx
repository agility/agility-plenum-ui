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
export const SelectComponent = Template.bind({});
SelectComponent.args = {...baseArgs};