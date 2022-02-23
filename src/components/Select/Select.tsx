import React, { FC } from 'react';
import { default as cn } from 'classnames';

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
export const Select: FC<SelectProps> = ({ label, id, name, options, onChange, isDisabled, isError, isRequired }: SelectProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const targetValue = e.target.value;
        onChange && onChange(targetValue);
    };
    const selectStyles = cn(
        'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none', 
        'focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md',
        {'border-red-500': isError},
        {'border-gray-300': !isError},
    );
    const labelStyles = cn(
        'block text-sm font-medium text-gray-700'
    );
    const wrapperStyle = cn(
        {'opacity-50': isDisabled}
    );
    return (
        <div className={wrapperStyle}>
            {label && 
                <label htmlFor={id} className={labelStyles}>
                    {label} {isRequired && <span className='text-red-500'> *</span>}
                </label>
            }
            <select id={id} name={name} className={selectStyles} onChange={handleChange} disabled={isDisabled} defaultValue={options[0].value}>
                {options.map(({value, label}) => {
                    return(<option key={value} value={value}>{label}</option>)
                })}
            </select>
        </div>
    );
};
