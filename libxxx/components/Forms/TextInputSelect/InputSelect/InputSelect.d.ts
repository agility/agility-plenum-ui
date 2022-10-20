import { FC } from "react";
import { SelectOptions } from "..";
export interface InputSelectProps {
    align: "left" | "right";
    /** Show the CTA without Background color and a border seperator */
    inputOptions: SelectOptions[];
    /** Onclick callback */
    onSelectOption?(value: string): void;
    className?: string;
    isDisabled?: boolean;
}
/** Comment */
export declare const InputSelect: FC<InputSelectProps>;
