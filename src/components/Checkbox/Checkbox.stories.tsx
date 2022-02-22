import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
    title: 'Design System/Components/Checkbox',
    component: Checkbox
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
const baseArgs = {
    label: 'Label',
    id: 'checkboxId',
    isDisabled: false,
    isChecked: false,
    isRequired: false,
    isError: false,
    message: 'This is a message',
}

export const CheckboxComponent = Template.bind({});
CheckboxComponent.args = {...baseArgs as CheckboxProps};