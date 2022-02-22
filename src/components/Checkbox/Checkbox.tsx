import React, { FC } from 'react';
import { default as cn } from 'classnames';

export interface CheckboxProps {
    /** Checkbox label */
    label: string;
    /** Checkbox ID */
    id: string;
    /** Disabled state */
    isDisabled?: boolean;
    /** Check state */
    isChecked?: boolean;
    /** If field is required */
    isRequired?: boolean;
    /** Error state */
    isError?: boolean;
    /** Message or description */
    message?: string;
}

/** Comment */
export const Checkbox: FC<CheckboxProps> = ({ label, id, isDisabled, isChecked, isRequired, isError, message }: CheckboxProps) => {
    const checboxStyles = cn(
        'focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
        { 'border-red-500 shadow-none': isError }
    );
    const wrapperStyles = cn(
        'relative flex items-start',
        { 'opacity-50': isDisabled }
    )
    return (
        <div className={wrapperStyles}>
            <div className="flex items-center h-5">
                <input id={id} aria-describedby={`${id}-description`} name={id} type="checkbox" className={checboxStyles} disabled={isDisabled} defaultChecked={isChecked} />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor={id} className="font-medium text-gray-700">
                    {label}
                    {isRequired && <span className="text-red-500"> *</span>}
                </label>
                {message && (
                    <p id={`${id}-description`} className="text-gray-500">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};
