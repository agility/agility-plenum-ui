import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { InputCounter, InputCounterProps } from './InputCounter';

export default {
    title: 'Design System/Atoms',
    component: InputCounter
} as Meta;

const Template: Story<InputCounterProps> = (args) => <InputCounter {...args} />;

export const Counter = Template.bind({});
Counter.args = { current: 0, limit: 100 };
       