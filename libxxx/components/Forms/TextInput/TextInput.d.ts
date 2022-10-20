import React from "react";
declare type Type = "text" | "email" | "number" | "password" | "search" | "tel" | "url" | "date" | "datetime-local" | "month" | "time" | "week" | "currency";
export interface TextInputProps {
    /** Input type*/
    type: Type;
    /** Input ID */
    id?: string;
    /** Input Name */
    name?: string;
    /** Label for the input */
    label?: string;
    /** Force the focus state on the input */
    isFocused?: boolean;
    /** Error state */
    isError?: boolean;
    /** If field is required */
    isRequired?: boolean;
    /** Disabled state */
    isDisabled?: boolean;
    /** Readonly state */
    isReadonly?: boolean;
    /** Set default value */
    defaultValue?: string;
    /** Message shown under the text field */
    message?: string;
    /** Input character counter */
    isShowCounter?: boolean;
    /** Max length of input character  */
    maxLength?: number;
    /** Callback on change */
    onChange?(value: string): void;
    /** input value */
    value?: string;
    className?: string;
}
declare const _TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
export { _TextInput as TextInput };
