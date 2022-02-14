import React, { FC } from 'react';
import { default as cn } from 'classnames';

import '../../tailwind.css';
export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type?: 'primary' | 'secondary' | 'alternative';
    /**
     * How large should the button be?
     */
    size?: 'sm' | 'base' | 'lg';
    /**
     * Button contents
     */
    label: string;
    /**
     * An optional icon
     */
    icon?: JSX.Element;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({ type = 'primary', size = 'base', onClick, label, icon }: ButtonProps) => {
    const btnStyles = cn(
        'inline-flex space-x-2 items-center justify-center border border-transparent transition-all min-w-[200px] shadow-sm',
        {
            'text-sm': size === 'sm'
        },
        {
            'text-base px-4 py-2 rounded-md': size === 'base'
        },
        {
            'text-lg': size === 'lg'
        },
        {
            'text-white bg-purple-600 hover:bg-purple-700': type === 'primary'
        },
        {
            'text-purple-700 bg-purple-100 hover:text-purple-700 hover:bg-purple-200': type === 'secondary'
        },
        {
            'text-gray-700 bg-white hover:gray-700 hover:bg-gray-50 border-gray-300': type === 'alternative'
        }
    );

    return (
        <button type="button" className={btnStyles} onClick={onClick}>
            {icon}
            <span>{label}</span>
        </button>
    );
};
