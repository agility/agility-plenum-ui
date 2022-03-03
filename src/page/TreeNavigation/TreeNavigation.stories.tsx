import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import withMock from 'storybook-addon-mock';
import { Story } from '@storybook/react';
import { TreeNavigation, TreeNavigationProps } from './TreeNavigation';
import { BRAND_CONFIG } from "../../common";
import initialData from './fixtures/lists.json';

export default {
    title: `${BRAND_CONFIG.brandTitle}/Agility Manager/TreeNavigation`,
    component: TreeNavigation,
    decorators: [withMock],
} as Meta;

const Template: Story<TreeNavigationProps> = (args) => <div className="h-[500px] w-full"><TreeNavigation {...args} /></div>;
const baseArgs = {
    
} as TreeNavigationProps;

export const TreeNavigationComponent = Template.bind({});
TreeNavigationComponent.parameters = {
    mockData: [
        {
            url: '/api/getTreeData',
            method: 'POST',
            status: 200,
            response: {
                data: initialData
            },
        },
    ],
}
TreeNavigationComponent.args = {...baseArgs};