import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Combobox, ComboboxProps } from './Combobox';
import { BRAND_CONFIG } from '../../common';

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/Combobox`,
    component: Combobox
} as Meta;

interface ComboItem {
    [value: string]: string
}

const comboboxlist: ComboItem[] = [
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

const Template: Story<ComboboxProps<ComboItem>> = (args) => <Combobox {...args} />;
const baseArgs = {
    label: 'Label',
    items: comboboxlist,
    displayProperty: "value",
    keyProperty: "value",
    placeholder: 'Select',
    id: 'combobox',
    isRequired: false,
    isError: false,
    isDisabled: false,
    nullable: false
} as ComboboxProps<ComboItem>;

export const AllVariations = Template.bind({});
AllVariations.decorators = [
    () => {
        return (
            <div className="grid-flow-row gap-4 grid">
                <Combobox {...(Default.args as ComboboxProps<ComboItem>)} />
                <Combobox {...(Label.args as ComboboxProps<ComboItem>)} />
                <Combobox {...(Required.args as ComboboxProps<ComboItem>)} />
                <Combobox {...(Error.args as ComboboxProps<ComboItem>)} />
                <Combobox {...(Disabled.args as ComboboxProps<ComboItem>)} />
                <span className="text-xs block mt-5 text-gray-400">
                    Note: controls are disabled on this view
                </span>
            </div>
        );
    }
];

export const Default = Template.bind({});
Default.args = { ...baseArgs, label: '', placeholder: 'Select' };

export const Label = Template.bind({});
Label.args = { ...baseArgs, label: 'Combobox Label', placeholder: 'Select' };

export const Disabled = Template.bind({});
Disabled.args = { ...baseArgs, isDisabled: true, label: 'Disabled' };

export const Required = Template.bind({});
Required.args = { ...baseArgs, isRequired: true, label: 'Required'  };

export const Error = Template.bind({});
Error.args = { ...baseArgs, isError: true, label: 'Error' };