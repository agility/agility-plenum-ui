import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Switch, SwitchProps } from './Switch';
import { BRAND_CONFIG } from '../../common';

export default {
    title: `${BRAND_CONFIG.brandTitle}/Atoms`,
    component: Switch
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const SwitchComponent = Template.bind({});
SwitchComponent.args = {};
SwitchComponent.storyName = 'Toggle / Switch';
