import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';

export default {
    title: 'Design System/Components/Dropdown',
    component: Dropdown
} as Meta;

const Template: Story<DropdownProps> = (args) => <div className="text-center"><Dropdown {...args} /></div>;

export const DropdownComponent = Template.bind({});
DropdownComponent.args = {prop: 'prop'};