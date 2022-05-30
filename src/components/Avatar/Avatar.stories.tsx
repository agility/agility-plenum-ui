import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import { BRAND_CONFIG } from "../../common";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/Avatar`,
    component: Avatar
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
const baseArgs = {
    src: 'https://dlux.ca/wp-content/uploads/2021/07/IMG_3456-300x300.jpg'
} as AvatarProps;

export const AvatarIcon = Template.bind({});
AvatarIcon.args = {...baseArgs};