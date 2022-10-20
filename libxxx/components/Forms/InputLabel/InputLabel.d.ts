import { FC } from 'react';
export interface InputLabelProps {
    /** Prop comment */
    isPlaceholder?: boolean;
    id: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    isError?: boolean;
    isActive?: boolean;
    isFocused?: boolean;
    label?: string;
}
/** Comment */
export declare const InputLabel: FC<InputLabelProps>;
