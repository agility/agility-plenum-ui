import React, { FC, JSXElementConstructor } from "react";
import { IconName } from "../../util/DynamicIcons";
export declare type ItemProp = {
    icon?: IconName;
    iconObj?: React.ReactNode;
    label: string;
    url?: string;
    onClick?(): void;
    isEmphasized?: boolean;
};
export interface DropdownProps {
    /** Prop comment */
    items: ItemProp[][];
    IconElement: JSXElementConstructor<unknown>;
    label?: string;
    className?: string;
    menuClassName?: string;
    itemsClassName?: string;
    itemClassName?: string;
    activeItemClassName?: string;
    yPosition?: "top" | "bottom";
    xPosition?: "left" | "right";
}
/** Comment */
export declare const Dropdown: FC<DropdownProps>;
