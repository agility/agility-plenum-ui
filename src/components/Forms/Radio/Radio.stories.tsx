import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Radio, RadioProps } from './Radio';
import { BRAND_CONFIG } from '../../../common';

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/Radio`,
    component: Radio
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;
const baseArgs = {
    label: 'Radio Label',
    id: 'radioId',
    isDisabled: false,
    isChecked: false,
    isRequired: false,
    isError: false,
    message: '',
    name: 'radio-group'
};

export const AllVariations = Template.bind({});
AllVariations.decorators = [
    () => {
        return (
            <div className="grid-flow-row gap-4 grid">
                <Radio {...(Default.args as RadioProps)} />
                <Radio {...(Description.args as RadioProps)} />
                <Radio {...(Required.args as RadioProps)} />
                <Radio {...(Checked.args as RadioProps)} />
                <Radio {...(ErrorState.args as RadioProps)} />
                <Radio {...(Disabled.args as RadioProps)} />
                <span className="text-xs block mt-5 text-gray-400">
                    Note: controls are disabled on this view
                </span>
            </div>
        );
    }
];

export const Default = Template.bind({});
Default.args = { ...(baseArgs as RadioProps) };

export const Description = Template.bind({});
Description.args = {
    ...(baseArgs as RadioProps),
    id: 'radioId2',
    message: 'Radio with message or description'
};

export const Required = Template.bind({});
Required.args = {
    ...(baseArgs as RadioProps),
    id: 'radioId3',
    isRequired: true,
    message: 'Radio is a required field'
};

export const Checked = Template.bind({});
Checked.args = {
    ...(baseArgs as RadioProps),
    id: 'radioId4',
    isChecked: true,
    message: 'Radio is checked by default'
};
Checked.storyName = 'Checked by Default';

export const ErrorState = Template.bind({});
ErrorState.args = {
    ...(baseArgs as RadioProps),
    id: 'radioId5',
    isError: true,
    message: 'Radio in error state'
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...(baseArgs as RadioProps),
    id: 'radioId6',
    isDisabled: true,
    message: 'This radio is disabled'
};
