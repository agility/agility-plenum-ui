import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextInputAddon, TextInputAddonProps } from './TextInputAddon';

const HIDE = {
    table: {
        disable: true
    }
};

export default {
    title: 'Design System/Components/TextInputAddon',
    component: TextInputAddon,
    argTypes: {
        type: HIDE,
        name: HIDE,
        id: HIDE,
        focused: HIDE,
        onChange: HIDE,
        // isError: HIDE,
        // isDisabled: HIDE,
        defaultValue: HIDE
    }
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TextInputAddonProps> = (args) => <TextInputAddon {...args} />;
const baseArgs = {
    label: 'Default',
    focused: false,
    isError: false,
    id: 'input',
    name: 'input',
    type: 'text',
    defaultValue: '',
    isRequire: false,
    isDisabled: false,
    showCounter: false
} as TextInputAddonProps;

export const Default = Template.bind({});
Default.args = {
    ...baseArgs,
    label: 'Email',
    primaryIcon: 'MailIcon',
    placeholder: 'you@example.com'
};
Default.storyName = 'Leading Icon'
