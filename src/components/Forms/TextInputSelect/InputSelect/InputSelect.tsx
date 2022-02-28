import React, { FC, useState } from 'react';
import { default as cn } from 'classnames';
import { SelectOptions } from '..';

export interface InputSelectProps {
    align: 'left' | 'right';
    /** Show the CTA without Background color and a border seperator */
    inputOptions: SelectOptions[];
    /** Onclick callback */
    onSelectOption?(value: string): void;
}

/** Comment */
export const InputSelect: FC<InputSelectProps> = ({
    inputOptions,
    onSelectOption,
    align = 'right'
}: InputSelectProps): JSX.Element | null => {
    const [selectedOption, setSelectedOption] = useState<string>(inputOptions[0].value);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const targetValue = e.target.value;
        onSelectOption && onSelectOption(targetValue);
        setSelectedOption(targetValue);
    };
    const selectStyle = cn(
        'relative z-10 inline-flex items-center space-x-2 bg-white px-4 py-2 pr-7 border border-gray-300 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',
        { 'rounded-r-md text-gray-700 -ml-px': align === 'right' },
        { 'rounded-l-md text-gray-500 -mr-px focus-within:z-10': align === 'left' },
        { 'cursor-default': !onSelectOption },
        { 'border-l-white': align === 'right' },
        { 'border-r-white': align === 'left' }
    );

    if (!inputOptions?.length) return null;
    return (
        <select className={selectStyle} onChange={handleChange} value={selectedOption}>
            {inputOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
