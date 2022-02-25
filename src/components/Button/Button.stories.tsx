import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { BRAND_CONFIG } from "../../common";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/Button`,
    component: Button
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: 'Primary', type: 'primary', size: 'base', icon: 'BellIcon' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, type: 'secondary', label: 'Secondary', icon: 'BellIcon' };

export const Alternative = Template.bind({});
Alternative.args = { label: 'Alternative', type: 'alternative', size: 'base', icon: 'BellIcon' };
