import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { BRAND_CONFIG } from '../../common';
import { IDynamicIconsProps } from "../DynamicIcons/DynamicIcons"

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/Button`,
    component: Button
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const buttonIcon: IDynamicIconsProps = {
	icon: "BellIcon",
	outline: false
}
export const AllVariations = Template.bind({})
AllVariations.decorators = [
	() => {
		return (
			<div className="flex flex-col items-center">
				<div className="grid grid-cols-3 gap-4">
					<Button {...(Primary.args as ButtonProps)} />
					<Button {...(Secondary.args as ButtonProps)} />
					<Button {...(Alternative.args as ButtonProps)} />
					<Button {...(Danger.args as ButtonProps)} />
				</div>
				<span className="mt-5 block text-xs text-gray-400">
					Note: controls are disabled on this view
				</span>
			</div>
		)
	}
]
// Reuse that template for creating different stories
export const Primary = Template.bind({})
Primary.args = {
	label: "Primary",
	type: "primary",
	size: "base",
	icon: buttonIcon
}

export const Secondary = Template.bind({})
Secondary.args = {
	...Primary.args,
	type: "secondary",
	label: "Secondary",
	icon: buttonIcon
}

export const Alternative = Template.bind({});
Alternative.args = {
	label: "Alternative",
	type: "alternative",
	size: "base",
	icon: buttonIcon
}

export const Danger = Template.bind({});
Danger.args = {
	label: "Danger",
	type: "danger",
	size: "base",
	icon: buttonIcon
}

export const Loading = Template.bind({});
Loading.args = {
	label: "Loading",
	type: "primary",
	size: "base",
	icon: buttonIcon,
	isLoading: true
}
export const StringOnly = Template.bind({})
StringOnly.args = {
	label: "Loading",
	type: "primary",
	size: "base",
	icon: "AcademicCapIcon"
}