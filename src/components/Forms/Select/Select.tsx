import React, { FC, useState } from 'react';
import { default as cn } from 'classnames';
import { InputLabel } from '../InputLabel';

export type SelectOptions = {
    label: string;
    value: string;
};

export interface SelectProps {
    /** Label */
    label?: string;
    /** Select ID prop */
    id: string;
    /** Select name prop */
    name: string;
    /** List of options to display in the select menu */
    options: SelectOptions[];
    /** Select name prop */
    onChange?(value: string): void;
    /** Select disabled state */
    isDisabled?: boolean;
    /** Select error state */
    isError?: boolean;
    /** Select required state */
    isRequired?: boolean;
}

/** Comment */
export const Select: FC<SelectProps> = ({
    label,
    id,
    name,
    options,
    onChange,
    isDisabled,
    isError,
    isRequired
}: SelectProps) => {
    const [selectedOption, setSelectedOption] = useState<string>(options[0].value);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const targetValue = e.target.value;
        typeof onChange == 'function' && onChange(targetValue);
        setSelectedOption(targetValue);
    };
    const selectStyles = cn(
        'block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none',
        'focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md',
        { 'border-red-500': isError },
        { 'border-gray-300': !isError }
    );
    const wrapperStyle = cn({ 'opacity-50': isDisabled });
    return (
        <div className={wrapperStyle}>
            {label && (
                <InputLabel
                    isPlaceholder
                    isActive
                    label={label}
                    isRequired={isRequired}
                    id={id}
                    isError={isError}
                    isDisabled={isDisabled}
                />
            )}
            <select
                id={id}
                name={name}
                className={selectStyles}
                onChange={handleChange}
                disabled={isDisabled}
                value={selectedOption}
            >
                {options.map(({ value, label }) => {
                    return (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
