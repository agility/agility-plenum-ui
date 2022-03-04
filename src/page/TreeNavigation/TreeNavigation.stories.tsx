import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import withMock from 'storybook-addon-mock';
import { Story } from '@storybook/react';
import { TreeNavigation, TreeNavigationProps } from './TreeNavigation';
import { BRAND_CONFIG } from "../../common";
import allData from './fixtures/lists.json';
import partialData from './fixtures/list.json';

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
            response: (request: any) => {
                const {
                    body
                } = request;
                const parsedBody = JSON.parse(body);
                if (parsedBody.action == 'all') {
                     return {
                        data: allData
                    };   
                } else if (parsedBody.action === 'partial') {
                    console.log(parsedBody);
                    return {
                        data: partialData.map(data => {
                            data.id = `${data.id}+${parsedBody.id}`
                            data.parent = parsedBody.id;
                            return data;
                        })
                    }
                }
            },
        },
    ],
}
TreeNavigationComponent.args = {...baseArgs};