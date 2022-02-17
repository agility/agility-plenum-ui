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
export const InputSelect: FC<InputSelectProps> = ({ inputOptions, onSelectOption, align='right'}: InputSelectProps): JSX.Element | null => {
    const [selectedOption, setSelectedOption] = useState<string>(inputOptions[0].value);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const targetValue = e.target.value;
        onSelectOption && onSelectOption(targetValue);
        setSelectedOption(targetValue);
    };
    const selectStyle = cn(
        'focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md',
    );
    if(!inputOptions?.length) return null;
    return (
        <div className="absolute inset-y-0 left-0 flex items-center">
            <select
                className={selectStyle}
                onChange={handleChange}
                value={selectedOption}
            >
                {inputOptions.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))
            }
            </select>
        </div>
    );
};
