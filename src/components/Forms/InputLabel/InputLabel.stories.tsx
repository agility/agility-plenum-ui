import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { InputLabel, InputLabelProps } from './InputLabel';
import { BRAND_CONFIG } from "../../../common";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Atoms`,
    component: InputLabel
} as Meta;

const Template: Story<InputLabelProps> = (args) => <InputLabel {...args} />;
const baseArgs = {
    label: 'Default',
    id: 'input',
    isRequired: false,
    isDisabled: false,
    isFocused: false,
    isError: false,
    isPlaceholder: true,
} as InputLabelProps;

export const InputLabelComponent = Template.bind({});
InputLabelComponent.args = {...baseArgs};
InputLabelComponent.storyName = "Input Label"