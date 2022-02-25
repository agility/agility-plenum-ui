import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Combobox, ComboboxProps } from './Combobox';
import { BRAND_CONFIG } from "../../common";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Combobox`,
    component: Combobox
} as Meta;

const comboboxlist = [
    { value: 'Leslie Alexander' },
    { value: 'Alishba Molloy' },
    { value: 'Raya Oconnell' },
    { value: 'Danica Sweet' },
    { value: 'Ralph Brook' },
    { value: 'Tamar Tapia' },
    { value: 'Cara Avila' },
    { value: 'Jayson Cisneros' },
    { value: 'Tracey Reader' },
    { value: 'Rahima Fritz' },
    { value: 'Vera Pritchard' }
];

const Template: Story<ComboboxProps> = (args) => <Combobox {...args} />;
const baseArgs = {
    label: 'Label',
    items: comboboxlist,
    placeholder: 'Select',
} as ComboboxProps

export const AllVariations = Template.bind({});
AllVariations.decorators = [
    () => {
        return (
            <div className="grid-flow-row gap-4 grid">
                <Combobox {...(Default.args as ComboboxProps)} />
                <Combobox {...(Label.args as ComboboxProps)} />
                <span className="text-xs block mt-5 text-gray-400">Note: controls are disabled on this view</span>
            </div>
        );
    }
];

export const Default = Template.bind({});
Default.args = {...baseArgs, label: '', placeholder: 'Select'};

export const Label = Template.bind({});
Label.args = {...baseArgs, label: 'Combobox Label', placeholder: 'Select'};