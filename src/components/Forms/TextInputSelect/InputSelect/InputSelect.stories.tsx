import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { InputSelect, InputSelectProps } from './InputSelect';
import { BRAND_CONFIG, HIDE_CONTROL } from '../../../../common';

export default {
    title: `${BRAND_CONFIG.brandTitle}/Atoms`,
    component: InputSelect,
    argTypes: {
        onSelectOption: HIDE_CONTROL
    }
} as Meta;

const Template: Story<InputSelectProps> = (args) => <InputSelect {...args} />;

export const InputSelectComponent = Template.bind({});
InputSelectComponent.args = {
    align: 'left',
    inputOptions: [{ label: 'Select', value: 'Select' }]
};
InputSelectComponent.storyName = 'Input Select';
