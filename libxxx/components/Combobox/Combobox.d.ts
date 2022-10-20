/// <reference types="react" />
export interface ComboboxProps<T extends Record<string, unknown>> {
    /** Label */
    label?: string;
    /** ID */
    id: string;
    /** Array of items to display */
    items: T[];
    /** the item property to use as the key */
    keyProperty: string;
    /** the item property to use as the display */
    displayProperty: string;
    /** Placeholder */
    placeholder?: string;
    /** Callback to trigger on change */
    onChange?(value: T | undefined): void;
    /** Select disabled state */
    isDisabled?: boolean;
    /** Select error state */
    isError?: boolean;
    /** Select required state */
    isRequired?: boolean;
    /** Message shown under field */
    message?: string;
    displayValue?: string;
    /**
     * Whether this item is nullable or not.
     *
     * @type {boolean}
     * @memberof ComboboxProps
     */
    nullable?: boolean;
}
export declare const Combobox: <T extends Record<string, unknown>>({ label, items, displayProperty, displayValue, keyProperty, onChange, placeholder, message, isDisabled, isError, isRequired, id, nullable }: ComboboxProps<T>) => JSX.Element;
