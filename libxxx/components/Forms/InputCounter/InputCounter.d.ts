import { FC } from 'react';
export interface InputCounterProps {
    /** Counter limit */
    limit: number;
    /** Counter current number */
    current: number;
}
/** Primary UI component for user interaction */
export declare const InputCounter: FC<InputCounterProps>;
