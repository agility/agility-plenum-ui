import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TreeItem, TreeItemProps } from './TreeItem';
import { BRAND_CONFIG } from "../../../common";
import { data } from "../sampleData";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/TreeItem`,
    component: TreeItem
} as Meta;

const Template: Story<TreeItemProps> = (args) => <TreeItem {...args} />;
const baseArgs = {
    isCurrent: false,
    title: 'Assets',
    isExpanded: false,
} as TreeItemProps;

export const Base = Template.bind({});
Base.args = {...baseArgs};

export const Active = Template.bind({});
Active.args = {...baseArgs, isCurrent: true};

export const Expanded = Template.bind({});
Expanded.args = {...baseArgs, isExpanded: true};

export const WithChildren = Template.bind({});
WithChildren.args = {...baseArgs, isExpanded: true, childNodes: [data[0], data[1]]};