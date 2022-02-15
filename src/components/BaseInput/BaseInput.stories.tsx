import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { BaseInput, BaseInputProps } from './BaseInput';

export default {
    title: 'Design System/Components/BaseInput',
    component: BaseInput
} as Meta;

const Template: Story<BaseInputProps> = (args) => <BaseInput {...args} />;

export const BaseInputComponent = Template.bind({});
BaseInputComponent.args = {prop: 'prop'};