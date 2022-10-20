import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { ComboboxProps } from './Combobox';
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
interface ComboItem {
    [value: string]: string;
}
export declare const AllVariations: Story<ComboboxProps<ComboItem>>;
export declare const Default: Story<ComboboxProps<ComboItem>>;
export declare const Label: Story<ComboboxProps<ComboItem>>;
export declare const Disabled: Story<ComboboxProps<ComboItem>>;
export declare const Required: Story<ComboboxProps<ComboItem>>;
export declare const Error: Story<ComboboxProps<ComboItem>>;
