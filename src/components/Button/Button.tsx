import React, { FC } from 'react';
import { default as cn } from 'classnames';
import { DynamicIcons, IconName } from '../../util/DynamicIcons';

import '../../tailwind.css';
export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type?: 'primary' | 'secondary' | 'alternative' | 'danger';
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
    icon?: IconName;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * If button should be disabled
     */
    isDisabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
    type = 'primary',
    size = 'base',
    onClick,
    label,
    isDisabled,
    icon
}: ButtonProps) => {
    const btnStyles = cn(
        'inline-flex space-x-2 items-center justify-center border transition-all shadow-sm rounded-md',
        { 'text-sm px-4 py-2': size === 'sm' },
        { 'text-base px-5 py-2': size === 'base' },
        { 'text-lg px-5 py-2': size === 'lg' },
        { 'opacity-50 cursor-auto': isDisabled },
        { 'text-white bg-purple-600 hover:bg-purple-700': type === 'primary' },
        {
            'text-purple-700 bg-purple-100 hover:text-purple-700 hover:bg-purple-200':
                type === 'secondary'
        },
        {
            'text-gray-700 bg-white hover:text-gray-700 hover:bg-gray-50 border-gray-300':
                type === 'alternative'
        },
        {
            'text-white bg-red-600 hover:text-white hover:bg-red-700 border-red-300':
                type === 'danger'
        }
    );

    const iconStyles = cn(
        'h-5 w-5',
        { 'text-white': type === 'primary' || type === 'danger' },
        { 'text-purple-700': type === 'secondary' },
        { 'text-gray-700': type === 'alternative' }
    );

    return (
        <button type="button" className={btnStyles} onClick={!isDisabled ? onClick : () => {null}}>
            {icon && <DynamicIcons icon={icon} className={iconStyles} outline={false} />}
            <span>{label}</span>
        </button>
    );
};
