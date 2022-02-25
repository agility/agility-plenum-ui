import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextInputAddon, TextInputAddonProps } from './TextInputAddon';
import { BRAND_CONFIG, HIDE_CONTROL } from "../../../common";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/TextInputAddon`,
    component: TextInputAddon,
    argTypes: {
        type: HIDE_CONTROL,
        name: HIDE_CONTROL,
        id: HIDE_CONTROL,
        isFocused: HIDE_CONTROL,
        onChange: HIDE_CONTROL,
        defaultValue: HIDE_CONTROL
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
    isShowCounter: false
} as TextInputAddonProps;

export const AllVariations = Template.bind({});
AllVariations.decorators = [
    () => {
        return (
            <div className="grid-flow-row gap-4 grid">
                <TextInputAddon {...(Default.args as TextInputAddonProps)} />
                <TextInputAddon {...(LeadIcon.args as TextInputAddonProps)} />
                <TextInputAddon {...(TrailAction.args as TextInputAddonProps)} />
                <TextInputAddon {...(TrailAndLeadIcons.args as TextInputAddonProps)} />
                <TextInputAddon {...(TrailIcon.args as TextInputAddonProps)} />
                <TextInputAddon {...(LeadLabel.args as TextInputAddonProps)} />
                <span className="text-xs block mt-5 text-gray-400">Note: controls are disabled on this view</span>
            </div>
        );
    }
];

export const Default = Template.bind({});
Default.args = {
    ...baseArgs,
    label: 'Label',
    placeholder: 'Placeholder'
};
Default.storyName = 'Minimum';

export const LeadIcon = Template.bind({});
LeadIcon.args = {
    ...baseArgs,
    label: 'Email',
    inlineIcon: 'MailIcon',
    placeholder: 'you@example.com'
};
LeadIcon.storyName = 'Leading Icon';

export const TrailAction = Template.bind({});
TrailAction.args = {
    ...baseArgs,
    label: 'Copy',
    placeholder: 'class="flex-shrink-0',
    trailIcon: 'DuplicateIcon',
    trailLabel: 'copy'
};
TrailAction.storyName = 'Trailing Action';

export const TrailAndLeadIcons = Template.bind({});
TrailAndLeadIcons.args = {
    ...baseArgs,
    label: 'Person',
    trailIcon: 'SortAscendingIcon',
    inlineIcon: 'UserIcon',
    placeholder: 'John Doe',
    trailLabel: 'Sort'
};
TrailAndLeadIcons.storyName = 'Trail/Lead Action';

export const TrailIcon = Template.bind({});
TrailIcon.args = {
    ...baseArgs,
    label: 'API Key',
    trailIcon: 'QuestionMarkCircleIcon',
    placeholder: '000-00-0000',
    clearCta: 'right'
};
TrailIcon.storyName = 'Trailing Icon';

export const LeadLabel = Template.bind({});
LeadLabel.args = {
    ...baseArgs,
    label: 'URL',
    leadLabel: 'http://',
    placeholder: 'agilitycms.com'
};
LeadLabel.storyName = 'Leading label';
