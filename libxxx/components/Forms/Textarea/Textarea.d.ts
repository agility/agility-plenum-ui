import React from "react";
export interface TextareaProps {
    /** Input ID */
    id?: string;
    /** Input Name */
    name?: string;
    /** Label for the input */
    label?: string;
    /** Error state */
    isError?: boolean;
    /** If field is required */
    isRequired?: boolean;
    /** Disabled state */
    isDisabled?: boolean;
    /** Set default value */
    defaultValue?: string;
    value?: string;
    /** Message shown under the text field */
    message?: string;
    /** Input character counter */
    isShowCounter?: boolean;
    /** Max length of input character  */
    maxLength?: number;
    /** Callback on change */
    onChange?(value: string): void;
    /** Number of rows */
    rows?: number;
    placeholder?: string;
    className?: string;
}
declare const _Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { _Textarea as Textarea };
