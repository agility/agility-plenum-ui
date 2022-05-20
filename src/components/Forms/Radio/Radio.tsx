import React, { FC } from 'react';
import { default as cn } from 'classnames';
import { InputLabel } from '../InputLabel';

export interface RadioProps {
    /** group name */
    name: string;
    /** Radio label */
    label: string;
    /** Radio ID */
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
    /** value */
    value?: string;
    /** Callback on input change */
    onChange?(value: string, isChecked: boolean): void;
    /** Callback on click */
    onClick?(value: string, isChecked: boolean): void;
}

/** Comment */
export const Radio: FC<RadioProps> = ({
    label,
    id,
    name,
    isDisabled = false,
    isChecked = false,
    isRequired = false,
    isError = false,
    message,
    onChange,
    onClick,
    value
}: RadioProps) => {
    const checboxStyles = cn('focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300', {
        'border-red-500 shadow-none': isError
    });
    const wrapperStyles = cn('relative flex items-start', { 'opacity-50': isDisabled });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.currentTarget.value;
        const targetChecked = e.currentTarget.checked;
        typeof onChange === 'function' && onChange(targetValue, targetChecked);
    };
    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        const targetValue = e.currentTarget.value;
        const targetChecked = e.currentTarget.checked;
        typeof onClick === 'function' && onClick(targetValue, targetChecked);
    };
    return (
        <div className={wrapperStyles}>
            <div className="flex items-center h-5">
                <input
                    id={id}
                    aria-describedby={`${id}-description`}
                    name={name}
                    type="radio"
                    value={value}
                    className={checboxStyles}
                    disabled={isDisabled}
                    defaultChecked={isChecked}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    onClick={(e) => {
                        handleClick(e);
                    }}
                />
            </div>
            <div className="ml-3 text-sm">
                <InputLabel label={label} isRequired={isRequired} id={id} />
                {message && (
                    <p id={`${id}-description`} className="text-gray-500">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};
