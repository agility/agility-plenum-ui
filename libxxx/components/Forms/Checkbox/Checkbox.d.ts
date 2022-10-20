import { FC } from 'react';
export interface CheckboxProps {
    /** Checkbox label */
    label: string;
    /** Checkbox ID */
    id?: string;
    /** Disabled state */
    isDisabled?: boolean;
    /** value */
    value?: string;
    /** Check state */
    isChecked?: boolean;
    /** If field is required */
    isRequired?: boolean;
    /** Error state */
    isError?: boolean;
    /** Message or description */
    message?: string;
    /** Callback on input change */
    onChange?(value: string, isChecked: boolean): void;
}
/** Comment */
export declare const Checkbox: FC<CheckboxProps>;
