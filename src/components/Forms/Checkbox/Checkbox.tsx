import React, { FC } from 'react';
import { default as cn } from 'classnames';
import { InputLabel } from '../InputLabel';

export interface CheckboxProps {
    /** Checkbox label */
    label: string;
    /** Checkbox ID */
    id: string;
    /** Disabled state */
    isDisabled?: boolean;
    /** value */
    value?: string;
    /** Check state */
    isChecked?: boolean;
    /** If field is required */
    isRequired?: boolean;
    /** Error state */
    isError?: boolean;
    /** Message or description */
    message?: string;
    /** Callback on input change */
    onChange?(value: string, isChecked: boolean): void;
}

/** Comment */
export const Checkbox: FC<CheckboxProps> = ({
    label,
    id,
    isDisabled,
    isChecked,
    isRequired,
    isError,
    message,
    value,
    onChange,
}: CheckboxProps) => {
    const checboxStyles = cn(
        'focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded',
        { 'border-red-500 shadow-none': isError }
    );
    const wrapperStyles = cn('relative flex items-start', { 'opacity-50': isDisabled });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.currentTarget.value;
        const targetChecked = e.currentTarget.checked;
        typeof onChange === 'function' && onChange(targetValue, targetChecked);
    };

    return (
        <div className={wrapperStyles}>
            <div className="flex items-center h-5">
                <input
                    id={id}
                    aria-describedby={`${id}-description`}
                    name={id}
                    value={value}
                    type="checkbox"
                    className={checboxStyles}
                    disabled={isDisabled}
                    defaultChecked={isChecked}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor={id} className="font-medium text-gray-700">
                    <InputLabel
                        label={label}
                        isRequired={isRequired}
                        id={id}
                    />
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
