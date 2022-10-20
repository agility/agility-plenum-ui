import { FC } from "react";
export interface SwitchProps {
    /** onChange callback */
    onChange(value: boolean): void;
    /** default state */
    defaultValue?: boolean;
    /** size state */
    size?: "sm" | "md" | "lg";
}
/** Comment */
export declare const Switch: FC<SwitchProps>;
