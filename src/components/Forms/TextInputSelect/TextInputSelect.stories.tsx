import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextInputSelect, TextInputSelectProps } from './TextInputSelect';

const HIDE = {
    table: {
        disable: true
    }
};

export default {
    title: 'Design System/Components/TextInputSelect',
    component: TextInputSelect,
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
const Template: Story<TextInputSelectProps> = (args) => <TextInputSelect {...args} />;
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
} as TextInputSelectProps;

export const AllVariations = Template.bind({});
AllVariations.decorators = [
    () => {
        return (
            <div className="grid-flow-row gap-4 grid">
                <TextInputSelect {...(Default.args as TextInputSelectProps)} />
                <TextInputSelect {...(LeadSelect.args as TextInputSelectProps)} />
                <TextInputSelect {...(TrailSelect.args as TextInputSelectProps)} />
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

export const LeadSelect = Template.bind({});
LeadSelect.args = {
    ...baseArgs,
};
LeadSelect.storyName = 'Leading Icon';

export const TrailSelect = Template.bind({});
TrailSelect.args = {
    ...baseArgs,
};
TrailSelect.storyName = 'Trailing Action';