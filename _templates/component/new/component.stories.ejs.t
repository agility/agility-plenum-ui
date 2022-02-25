---
to: src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.stories.tsx
---
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { <%= h.capitalize(name) %>, <%= h.capitalize(name) %>Props } from './<%= h.capitalize(name) %>';
import { BRAND_CONFIG } from "../../common";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/<%= h.capitalize(name) %>`,
    component: <%= h.capitalize(name) %>
} as Meta;

const Template: Story<<%= h.capitalize(name) %>Props> = (args) => <<%= h.capitalize(name) %> {...args} />;

export const <%= h.capitalize(name) %>Component = Template.bind({});
<%= h.capitalize(name) %>Component.args = {prop: 'prop'};