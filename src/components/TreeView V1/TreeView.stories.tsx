import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TreeView, TreeViewProps } from './TreeView';
import { BRAND_CONFIG } from "../../common";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Agility Manager/TreeView-V1`,
    component: TreeView
} as Meta;

const Template: Story<TreeViewProps> = (args) => <div className="h-[500px]"><TreeView {...args} /></div>;
const baseArgs = {
    
} as TreeViewProps;

export const TreeViewComponent = Template.bind({});
TreeViewComponent.args = {prop: 'prop'};