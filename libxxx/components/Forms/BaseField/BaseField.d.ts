import React from "react";
export declare type Type = "text" | "email" | "number" | "password" | "search" | "tel" | "url" | "date" | "datetime-local" | "month" | "time" | "week" | "currency";
export interface BaseFieldProps {
    /** Input type*/
    type: Type;
    /** Input ID */
    id: string;
    /** Input Name */
    name: string;
    /** placeholder for the input */
    placeholder?: string;
    /** Disabled state */
    isDisabled?: boolean;
    /** Readonly state */
    isReadonly?: boolean;
    /** Set value */
    value?: string;
    /** Set default value */
    defaultValue?: string;
    /** Max length of input character  */
    maxLength?: number;
    /** Input style classes  */
    className?: string;
    /** Callback on change */
    onChange?(value: string): void;
    /** Callback on onFocus */
    onFocus?(): void;
    /** Callback on onBlur */
    onBlur?(): void;
    /** Callback to get the value for the immediate parent component */
    onValueChange?(value: string): void;
}
declare const _BaseField: React.ForwardRefExoticComponent<BaseFieldProps & React.RefAttributes<HTMLInputElement>>;
export { _BaseField as BaseField };
