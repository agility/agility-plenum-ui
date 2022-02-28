import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { BaseField, BaseFieldProps } from './BaseField';
import { BRAND_CONFIG, HIDE_CONTROL } from '../../../common';

export default {
    title: `${BRAND_CONFIG.brandTitle}/Atoms`,
    component: BaseField,
    argTypes: {
        name: HIDE_CONTROL,
        id: HIDE_CONTROL,
        isFocused: HIDE_CONTROL,
        onChange: HIDE_CONTROL,
        isError: HIDE_CONTROL,
        defaultValue: HIDE_CONTROL,
        maxLength: HIDE_CONTROL,
        inputStyles: HIDE_CONTROL,
        onFocus: HIDE_CONTROL,
        onBlur: HIDE_CONTROL
    }
} as Meta;

const Template: Story<BaseFieldProps> = (args) => <BaseField {...args} />;
const baseArgs = {
    id: 'input',
    name: 'input',
    type: 'text',
    placeholder: 'Base Input Field',
    defaultValue: '',
    isDisabled: false
} as BaseFieldProps;

export const BaseFieldComponent = Template.bind({});
BaseFieldComponent.args = { ...baseArgs };
BaseFieldComponent.storyName = 'Base Field';
