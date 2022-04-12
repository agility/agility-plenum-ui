import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';
import { dropdownDataBase, dropdownDataWithIcons } from './data';
import { BRAND_CONFIG } from '../../common';
import { DynamicIcons } from "../../util/DynamicIcons";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/Dropdown`,
    component: Dropdown
} as Meta;

const IconElement = () => <DynamicIcons className="h-5 w-5" aria-hidden="true" icon="DotsVerticalIcon" />

const Template: Story<DropdownProps> = (args) => (
    <div className="text-center">
        <Dropdown {...args} />
    </div>
);
const baseArgs = {
    items: dropdownDataBase,
    IconElement,
};

export const Default = Template.bind({});
Default.args = { ...baseArgs };

export const Icon = Template.bind({});
Icon.args = { ...baseArgs, items: dropdownDataWithIcons };
