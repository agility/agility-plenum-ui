import React from "react";
import { IconName } from "../../util/DynamicIcons";
export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type?: "primary" | "secondary" | "alternative" | "danger";
    /**
     * How large should the button be?
     */
    size?: "sm" | "base" | "lg";
    /**
     * Button contents
     */
    label?: string;
    /**
     * An optional icon
     */
    icon?: IconName;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * If button should be disabled
     */
    isDisabled?: boolean;
    /**
     * Shows loading indicator
     */
    isLoading?: boolean;
    /**
     * If button should be of type submit
     */
    isSubmit?: boolean;
    isWidthFull?: boolean;
    /**
     * Add on classes
     */
    className?: string;
    iconObj?: React.ReactNode;
    title?: string;
}
declare const _Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { _Button as Button };
