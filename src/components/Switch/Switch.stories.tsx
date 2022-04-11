import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Switch, SwitchProps } from './Switch';
import { BRAND_CONFIG } from '../../common';

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/Atoms/Switch`,
    component: Switch
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;


export const AllVariations = Template.bind({});
AllVariations.decorators = [
    () => {
        return (
            <div className="grid-flow-row gap-4 grid">
                <Switch {...(SwitchComponentSm.args as SwitchProps)} />
                <Switch {...(SwitchComponentMd.args as SwitchProps)} />
                <Switch {...(SwitchComponentLg.args as SwitchProps)} />
                <span className="text-xs block mt-5 text-gray-400">
                    Note: controls are disabled on this view
                </span>
            </div>
        );
    }
];

export const SwitchComponentSm = Template.bind({});
SwitchComponentSm.args = {
    size: 'sm',
    onChange: (value:boolean) => {console.log(`onChange ${value}`)},
};
SwitchComponentSm.storyName = 'Switch Small';

export const SwitchComponentMd = Template.bind({});
SwitchComponentMd.args = {
    size: 'md',
    onChange: (value:boolean) => {console.log(`onChange ${value}`)},
};
SwitchComponentMd.storyName = 'Switch Medium';

export const SwitchComponentLg = Template.bind({});
SwitchComponentLg.args = {
    size: 'lg',
    onChange: (value:boolean) => {console.log(`onChange ${value}`)},
};
SwitchComponentLg.storyName = 'Switch Large';
