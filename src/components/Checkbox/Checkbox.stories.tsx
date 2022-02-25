import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { BRAND_CONFIG } from "../../common";

export default {
    title: `${BRAND_CONFIG.brandTitle}/Components/Checkbox`,
    component: Checkbox
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
const baseArgs = {
    label: 'Checkbox Label',
    id: 'checkboxId',
    isDisabled: false,
    isChecked: false,
    isRequired: false,
    isError: false,
    message: '',
}

export const AllVariations = Template.bind({});
AllVariations.decorators = [
    () => {
        return (
            <div className="grid-flow-row gap-4 grid">
                <Checkbox {...(Default.args as CheckboxProps)} />
                <Checkbox {...(Description.args as CheckboxProps)} />
                <Checkbox {...(Required.args as CheckboxProps)} />
                <Checkbox {...(Checked.args as CheckboxProps)} />
                <Checkbox {...(ErrorState.args as CheckboxProps)} />
                <Checkbox {...(Disabled.args as CheckboxProps)} />
                <span className="text-xs block mt-5 text-gray-400">Note: controls are disabled on this view</span>
            </div>
        );
    }
];

export const Default = Template.bind({});
Default.args = {...baseArgs as CheckboxProps};

export const Description = Template.bind({});
Description.args = {...baseArgs as CheckboxProps,
    message: 'Checkbox with message or description',
    id: 'checkboxId2',
};

export const Required = Template.bind({});
Required.args = {...baseArgs as CheckboxProps, 
    isRequired: true,
    message: 'Checkbox is a required field',
    id: 'checkboxId3',
};

export const Checked = Template.bind({});
Checked.args = {
    ...baseArgs as CheckboxProps,
    isChecked: true,
    message: 'Checkbox is checked by default',
    id: 'checkboxId4',
};
Checked.storyName = 'Checked by Default'

export const ErrorState = Template.bind({});
ErrorState.args = {...baseArgs as CheckboxProps, 
    isError: true,
    message: 'Checkbox in error state',
    id: 'checkboxId5',
};

export const Disabled = Template.bind({});
Disabled.args = {...baseArgs as CheckboxProps,
    isDisabled: true,
    message: 'This checkbox is disabled',
    id: 'checkboxId6',
};