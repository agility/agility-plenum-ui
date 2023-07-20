import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';

import { BRAND_CONFIG } from '../../common';
import { ButtonDropDown, ButtonDropDownProps } from './ButtonDropdown';
import { DynamicIcons } from '../../util/DynamicIcons';
import { dropdownDataBase } from '../Dropdown/data';
import { IDropdownProps, defaultClassNames } from "../Dropdown"


export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/ButtonDropdown`,
    component: ButtonDropDown
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonDropDownProps> = (args) => (
	<ButtonDropDown {...args} />
)

const IconElement = () => (
	<DynamicIcons
		className="h-5 w-5"
		aria-hidden="true"
		icon="ChevronDownIcon"
	/>
)

const baseDropDownArgs: IDropdownProps = {
	items: dropdownDataBase,
	classNames: {
		...defaultClassNames
	},
	id: "button-dropdown-example",
	label: "button dropdown example",

	CustomDropdownTrigger: <IconElement />
}

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
	button: { label: "Primary", type: "primary", size: "base" },
	dropDown: baseDropDownArgs
}


export const Secondary = Template.bind({})
Secondary.args = {
	button: { label: "Secondary", type: "secondary", size: "base" },
	dropDown: baseDropDownArgs
}

export const Alternative = Template.bind({})
Alternative.args = {
	button: { label: "Alternative", type: "alternative", size: "base" },
	dropDown: baseDropDownArgs
}