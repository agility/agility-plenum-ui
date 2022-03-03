import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TreeItem, TreeItemProps } from './TreeItem';
import { BRAND_CONFIG } from "../../../common";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/TreeItem`,
    component: TreeItem
} as Meta;

const Template: Story<TreeItemProps> = (args) => <TreeItem {...args} />;
const baseArgs = {
    
} as TreeItemProps;

export const TreeItemComponent = Template.bind({});
TreeItemComponent.args = {prop: 'prop'};