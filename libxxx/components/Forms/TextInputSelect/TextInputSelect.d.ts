import { FC } from "react";
declare type Type = "text" | "email" | "number" | "password" | "search" | "tel" | "url" | "date" | "datetime-local" | "month" | "time" | "week" | "currency";
export declare type SelectOptions = {
    label: string;
    value: string;
};
export interface TextInputSelectProps {
    /** Input type*/
    type: Type;
    /** Input ID */
    id?: string;
    /** Input Name */
    name?: string;
    /** Label for the input */
    label?: string;
    /** placeholder for the input */
    placeholder?: string;
    /** Force the focus state on the input */
    isFocused?: boolean;
    /** Error state */
    isError?: boolean;
    /** If field is required */
    isRequired?: boolean;
    /** Disabled state */
    isDisabled?: boolean;
    /** Set default value */
    defaultValue?: string;
    /** Set value */
    value?: string;
    /** Message shown under the text field */
    message?: string;
    /** Input character counter */
    isShowCounter?: boolean;
    /** Max length of input character  */
    maxLength?: number;
    /** Select input location  */
    selectLocation?: "left" | "right";
    /** Prefix  */
    prefix?: string;
    /** List of options to show on the select field  */
    inputOptions?: SelectOptions[];
    /** Callback on base input */
    onChange?(value: string): void;
    /** Callback on input select field */
    onSelectOption?(value: string): void;
}
export declare const TextInputSelect: FC<TextInputSelectProps>;
export {};
