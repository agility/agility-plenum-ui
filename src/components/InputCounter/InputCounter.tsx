import React, { FC } from 'react';

import '../../tailwind.css';
export interface InputCounterProps {
    /** Counter limit */
    limit: number;
    /** Counter current number */
    current: number;
}

/** Primary UI component for user interaction */
export const InputCounter: FC<InputCounterProps> = ({ current = 0, limit }: InputCounterProps) => {
    return (
        <span className="text-gray-500 text-sm mt-1 block">
            {current} / {limit}
        </span>
    );
};
