import { FC } from "react";
import { ButtonProps } from "../Button/Button";
import { DropdownProps } from "../Dropdown";
export interface ButtonDropDownProps {
    button: ButtonProps;
    dropDown: DropdownProps;
}
/**
 * Primary UI component for user interaction
 */
export declare const ButtonDropDown: FC<ButtonDropDownProps>;
