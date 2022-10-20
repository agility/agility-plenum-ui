import React from "react";
import { IconName } from "../../../util/DynamicIcons";
export declare type Type = "text" | "email" | "number" | "password" | "search" | "tel" | "url" | "date" | "datetime-local" | "month" | "time" | "week" | "currency";
export interface TextInputAddonProps {
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
    /** Leading icon displayed within the input  */
    leadIcon?: IconName;
    /** Trailing icon displayed within the input  */
    trailIcon?: IconName;
    /** Icon within the input field at the begining of the field*/
    inlineIcon?: IconName;
    /** Icon within the input field at the end of the field*/
    inlineTrailingIcon?: IconName;
    /** Trailing label for the input CTA */
    trailLabel?: string;
    /** Leading label for input CTA  */
    leadLabel?: string;
    /** Remove bg and border from CTA  */
    clearCta?: "left" | "right" | "both" | "none";
    className?: string;
    /** Callback on change */
    onChange?(value: string): void;
    /** Callback on Cta click */
    onCtaClick?(): void;
}
declare const _TextInputAddon: React.ForwardRefExoticComponent<TextInputAddonProps & React.RefAttributes<HTMLInputElement>>;
export { _TextInputAddon as TextInputAddon };
