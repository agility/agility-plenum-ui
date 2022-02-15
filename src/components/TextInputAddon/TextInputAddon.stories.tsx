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
        isFocused: HIDE,
        onChange: HIDE,
        defaultValue: HIDE
    }
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TextInputAddonProps> = (args) => <TextInputAddon {...args} />;
const baseArgs = {
    label: 'Default',
    isFocused: false,
    isError: false,
    id: 'input',
    name: 'input',
    type: 'text',
    defaultValue: '',
    isRequired: false,
    isDisabled: false,
    showCounter: false
} as TextInputAddonProps;

export const Default = Template.bind({});
Default.args = {
    ...baseArgs,
    label: 'Email',
    leadIcon: 'MailIcon',
    placeholder: 'you@example.com'
};
Default.storyName = 'Leading Icon'

export const TrailAction = Template.bind({});
TrailAction.args = {
    ...baseArgs,
    label: 'Copy',
    trailIcon: 'DuplicateIcon',
    placeholder: 'class="flex-shrink-0',
    ctaLabel: 'copy'
};
TrailAction.storyName = 'Trailing Action'

export const TrailAndLeadIcons = Template.bind({});
TrailAndLeadIcons.args = {
    ...baseArgs,
    label: 'Person',
    trailIcon: 'SortAscendingIcon',
    leadIcon: 'UserIcon',
    placeholder: 'John Doe',
    ctaLabel: 'Sort'
};
TrailAndLeadIcons.storyName = 'Trail/Lead Action'

export const TrailIcon = Template.bind({});
TrailIcon.args = {
    ...baseArgs,
    label: 'API Key',
    trailIcon: 'QuestionMarkCircleIcon',
    placeholder: '000-00-0000',
};
TrailIcon.storyName = 'Trailing Icon'