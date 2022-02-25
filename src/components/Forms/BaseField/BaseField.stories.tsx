import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { BaseField, BaseFieldProps } from './BaseField';
import { BRAND_CONFIG } from "../../../common/brand";

const HIDE = {
    table: {
        disable: true
    }
};

export default {
    title: `${BRAND_CONFIG.brandTitle}/Atoms`,
    component: BaseField,
    argTypes: {
        name: HIDE,
        id: HIDE,
        isFocused: HIDE,
        onChange: HIDE,
        isError: HIDE,
        defaultValue: HIDE,
        maxLength: HIDE,
        inputStyles: HIDE,
        onFocus: HIDE,
        onBlur: HIDE,
    }
} as Meta;

const Template: Story<BaseFieldProps> = (args) => <BaseField {...args} />;
const baseArgs = {
    id: 'input',
    name: 'input',
    type: 'text',
    placeholder: 'Base Input Field',
    defaultValue: '',
    isDisabled: false,
} as BaseFieldProps;

export const BaseFieldComponent = Template.bind({});
BaseFieldComponent.args = {...baseArgs};
BaseFieldComponent.storyName="Base Field"
