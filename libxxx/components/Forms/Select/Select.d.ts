import { FC } from "react";
export declare type SimpleSelectOptions = {
    label: string;
    value: string;
};
export interface SimpleSelectProps {
    /** Label */
    label?: string;
    /** Select ID prop */
    id?: string;
    /** Select name prop */
    name?: string;
    /** List of options to display in the select menu */
    options: SimpleSelectOptions[];
    /** Select name prop */
    onChange?(value: string): void;
    /** Select disabled state */
    isDisabled?: boolean;
    /** Select error state */
    isError?: boolean;
    /** Select required state */
    isRequired?: boolean;
    value?: string;
    className?: string;
}
/** Comment */
export declare const Select: FC<SimpleSelectProps>;
