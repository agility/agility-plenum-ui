import { FC } from 'react';
export interface RadioProps {
    /** group name */
    name?: string;
    /** Radio label */
    label: string;
    /** Radio ID */
    id?: string;
    /** Disabled state */
    isDisabled?: boolean;
    /** Check state */
    isChecked?: boolean;
    /** If field is required */
    isRequired?: boolean;
    /** Error state */
    isError?: boolean;
    /** Message or description */
    message?: string;
    /** value */
    value?: string;
    /** Callback on input change */
    onChange?(value: string, isChecked: boolean): void;
    /** Callback on click */
    onClick?(value: string, isChecked: boolean): void;
}
/** Comment */
export declare const Radio: FC<RadioProps>;
