import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { BRAND_CONFIG } from "../../common";
import {  TreeView, TreeViewProps } from ".";
import initialData from './fixtures/lists.json';

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/TreeView-V2`,
    component: TreeView
} as Meta;

const Template: Story<TreeViewProps> = (args) => <div className="h-[500px]"><TreeView {...args} /></div>;
const baseArgs = {
    treeData: initialData
} as TreeViewProps;

export const TreeViewComponent = Template.bind({});
TreeViewComponent.args = {...baseArgs};